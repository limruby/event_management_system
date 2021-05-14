import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectModel, InjectConnection } from '@nestjs/mongoose';
import { Model, Connection } from 'mongoose';

import { randomString } from '../utils/string';

import { User, UserDocument, UserSchema, removeSecret } from './entity/user.schema';
import { getHash, compareHash } from './password';
import { Role } from '../utils/role/role.enum';
import { UpdateUserDto, RegisterUserDto } from './dto/dto';
import { CreateUserDto } from './dto/create-user.dto';
import { pagesize } from 'src/utils/constant';
import { EMSPagination } from 'src/utils/dto/pagination.dto';

// This should be a real class/interface representing a user entity
// export type User = any;

// Todo: bcrypt, Mongoose

@Injectable()
export class UsersService {
    constructor(
        @InjectModel('User') private readonly UserModel: Model<UserDocument>,
        @InjectConnection() private connection: Connection
    ) {}

    async create(registerDto: CreateUserDto): Promise<User> {
        // TODO: email regex
        let user = new User({
            _id: randomString(12),
            email: registerDto.email,
            hash: await getHash(registerDto.password),
            name: registerDto.name,
            ic: registerDto.ic,
            mobile: registerDto.mobile,
            createdAt: new Date(),
            updatedAt: new Date(),
            type: registerDto.type,
            affiliation: registerDto.affiliation,
            roles: registerDto.roles,
            members: registerDto.members
        });
        const createdUser = new this.UserModel(user);
        return await createdUser.save();
    }

    async setPassword(email: string, pass: string) {
        let user = await this.UserModel.findOne({ email: email }).exec();
        user.hash = await getHash(pass);
        user.save();
    }

    async checkPassword(email: string, pass: string) {
        let user = await this.UserModel.findOne({ email: email }).exec();
        if(user == null) throw new NotFoundException();
        if(await compareHash(pass, user.hash)) {
            return removeSecret(user); 
        }
        throw new UnauthorizedException();
    }

    async setRefreshKey(id: string, key: string) {
        let user = await this.UserModel.findOne({ _id: id }).exec();
        user.refresh = key;
        user.save();
    }

    async checkRefreshKey(id: string, key: string) {
        let user = await this.UserModel.findOne({ _id: id }).exec();
        // const user = this.users.find(user => user.userId === id);
        if(user.refresh == key) {
            return removeSecret(user); 
        }
        throw new UnauthorizedException();
    }

    async find(
        id: string,
        passwordless: boolean = true,
    ): Promise<User | undefined> {
        // return this.users.find(user => user.userId === id);
        let user = await this.UserModel.findOne({ _id: id }).exec();
        if(user != null)
            if(passwordless) return removeSecret(user); 
            else return user;
        return null;
    }

    async update(updateDto: UpdateUserDto): Promise<User> {
        let user = await this.UserModel.findOne({ _id: updateDto.id }).exec();
        // TODO: email regex
        if(updateDto.email !== undefined) 
            user.email = updateDto.email;
        if(updateDto.password !== undefined) 
            user.hash = await getHash(updateDto.password);
        if(updateDto.name !== undefined) 
            user.name = updateDto.name;
        if(updateDto.ic !== undefined) 
            user.ic = updateDto.ic;
        if(updateDto.mobile !== undefined) 
            user.mobile = updateDto.mobile;
        if(updateDto.affiliation !== undefined) 
            user.affiliation = updateDto.affiliation;
        if(updateDto.members !== undefined) 
            user.members = updateDto.members;
        if(updateDto.type !== undefined) 
            user.type = updateDto.type;
        user.updatedAt = new Date();
        
        return await user.save();
    }

    async delete(id: string): Promise<User> {
        let user = await this.UserModel.findOne({ _id: id }).exec();
        
        return await user.delete();
    }

    async findOne(
        options: any,
        fields?: any,
        isSerialized?: boolean
    ): Promise<User | undefined> {
        // return this.users.find(user => user.username === username);
        let user = await this.UserModel.findOne(options, fields).exec();
        // if (user && isSerialized) {
        //     return user.removeSecret();
        // }

        return removeSecret(user); 
    }

    // admin
    async getUsers(
        page: number,
        options: any,
        fields?: any,
        passwordless: boolean = true,
    ): Promise<EMSPagination<User> | undefined> {
        // return this.users.find(user => user.username === username);
        let count = Math.ceil(await this.UserModel.find(options, fields).count().exec() / pagesize);
        let usersDoc = await this.UserModel.find(options, fields).skip(pagesize*(page)).limit(pagesize).exec();

        var users : User[] = [];
        if (usersDoc && passwordless) {
            for(let i in usersDoc) {
                users.push(removeSecret(usersDoc[i]));
            } 
        } else {
            users = usersDoc; 
        }

        let pageDto = new EMSPagination<User>({pages: count, items: users});
        return pageDto;
    }
}

import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel, InjectConnection } from '@nestjs/mongoose';
import { Model, Connection } from 'mongoose';

import { randomString } from '../utils/string';

import { RegisterUserDto } from './dto/register-user.dto';
import { User, UserDocument, UserSchema, removeSecret } from './entity/user.schema';
import { getHash, compareHash } from './password';
import { Role } from '../utils/role/role.enum';

// This should be a real class/interface representing a user entity
// export type User = any;

// Todo: bcrypt, Mongoose

@Injectable()
export class UsersService {
    constructor(
        @InjectModel('User') private readonly UserModel: Model<UserDocument>,
        @InjectConnection() private connection: Connection
    ) {}

    async create(registerDto: RegisterUserDto, role: Role): Promise<User> {
        // TODO: email regex
        let user = new User({
            _id: randomString(12),
            email: registerDto.email,
            hash: await getHash(registerDto.password),
            name: registerDto.name,
            ic: registerDto.ic,
            mobile: registerDto.mobile,
            birthday: registerDto.birthday,
            createdAt: new Date(),
            organization: registerDto.organization,
            position: registerDto.position,
            roles: [ role ]
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
        id: string
    ): Promise<User | undefined> {
        // return this.users.find(user => user.userId === id);
        let user = await this.UserModel.findOne({ _id: id }).exec();

        return removeSecret(user); 
    }
    
    async findOne(
        username: string,
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
}

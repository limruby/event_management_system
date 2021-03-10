import { Document } from 'mongoose';

export class User extends Document {
    readonly _id: string;
    readonly name: string;
    readonly email: string;
    readonly password: string;
    readonly username?: string;
    readonly admin?: boolean;
    readonly created_at: Date;
    readonly updated_at: Date;
}
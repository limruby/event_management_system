import { Document } from 'mongoose';

// unused
export class User extends Document {
    readonly _id: string;
    readonly name: string;
    readonly ic: string;
    readonly email: string;
    mobile: string;
    password: string;
    readonly admin?: boolean;
    readonly created_at: Date;
    readonly updated_at: Date;
}
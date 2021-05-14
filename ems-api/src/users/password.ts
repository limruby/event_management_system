import * as bcrypt from 'bcrypt';
require('dotenv').config()

const saltOrRounds = '$2b$12$GUOatB15VhzaztCA/4cJb.';

export async function getHash(password: string) : Promise<string> {
    return bcrypt.hash(password, saltOrRounds);
}

export async function compareHash(password: string, hash: string) : Promise<boolean> {
    return bcrypt.compare(password, hash);
}

import { Role } from "src/utils/role/role.enum";

export class JwtAccessPayload {
    email: string;
    sub: string; // user _id
    roles: Role[];

    constructor(data: Partial<JwtAccessPayload> = {}) {
        Object.assign(this, data);
    }

    toJson() {
        return {
            email: this.email,
            sub: this.sub,
            roles: this.roles
        };
    }
}

export class JwtRefreshPayload {
    key: string;
    sub: string; // user _id

    constructor(data: Partial<JwtRefreshPayload> = {}) {
        Object.assign(this, data);
    }

    toJson() {
        return {
            key: this.key,
            sub: this.sub,
        };
    }
}
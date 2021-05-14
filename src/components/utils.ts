export enum Role {
    Admin = 'admin',
    Participant = 'participant',
    Visitor = 'visitor',
    Sponsor = 'sponsor',
    Judge = 'judge',
    Speaker = 'speaker'
}

export class Member {
    constructor(data: Partial<Member> = {}) {
      Object.assign(this, data);
    }

    name?: string;
    ic?: string;
    mobile?: string;
    affiliation?: string;
}

export class UserDto {

    readonly id?: string; // max 12 char
    name?: string;
    ic?: string;
    email?: string;
    mobile?: string;
    roles?: Role[];
    paymentId?: string;
    affiliation?: string;
    members?: Member[];

    constructor(data: Partial<UserDto> = {}) {
        Object.assign(this, data);
    }
}
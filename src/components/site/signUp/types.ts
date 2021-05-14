import { Member } from "../../utils";

export interface RegisterUserDto {
    email: string;
    mobile: string;
    password: string;
    name: string;
    ic: string;
    birthday: Date;
    affiliation: string;
    members: Member[];
}
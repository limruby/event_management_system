export interface ILoginInput {
    email: string;
    password: string;
}

export interface IRegisterInput {
    email: string;
    password: string;
    mobile: string;
    name: string;
    ic: string;
    birthday: Date;
    organization: string;
    position: string;
}
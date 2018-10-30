export class UserModel {
    _id: number;
    userName: string;
    firstName: string;
    lastName: string;
    password: string;
    email: string;
    roleCode: string;
    constructor() { 
        
    }
}

export class CUser {
    public order: string;
    public limit: number;
    public page: number;
    public userName: string;
    public firstName: string;
    public lastName: string;
    public password: string;
    public email: string;
    public createdTime: string;
    public roleCode: string;
    constructor() { 
        
    }
}

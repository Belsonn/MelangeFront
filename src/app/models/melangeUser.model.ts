import { UserModel } from './user.model';
export interface MelangeUser {
    _id:string;
    user:UserModel;
    temporaryUserName:string;
    melange: string;
    incomes: number;
    expenses: number;
}

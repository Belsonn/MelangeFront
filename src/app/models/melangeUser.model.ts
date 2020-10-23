import { UserModel } from './user.model';
export interface MelangeUser {
    _id:string;
    user:UserModel;
    melange: string;
    incomes: number;
    expenses: number;
}

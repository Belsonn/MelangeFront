import { MelangeUser } from './melangeUser.model';
import {  MelangeProduct } from './product.model';

export interface MelangesResponse {
  status: string;
  results: number;
  data: {
    melanges: [Melange];
  };
}

export interface MelangeResponse {
  status: string;
  data: {
    melange: Melange;
  };
}

export interface Melange {
  users: [MelangeUser];
  products: [MelangeProduct];
  _id: string;
  name: string;
  createdAt: Date;
  inviteToken: string;
}

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
  users: [{
    name: string,
    _id: string
  }];
  products: [string];
  _id: string;
  name: string;
  createdAt: Date;
  inviteToken: string;
}

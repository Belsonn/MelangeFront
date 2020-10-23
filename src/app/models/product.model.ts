import { MelangeUser } from './melangeUser.model';

export interface ProductsResponse {
    status: string,
    results: number,
    data: {
        products: [Product]
    }
}

export interface ProductResponse {
    status: string,
    data: {
        product: Product
    }
}

export interface Product {
    _id: string,
    name: string
    shop: string,
    price: number,
    __v: any
}



export interface MelangeProduct {
    users: [MelangeUser],
    _id:string,
    product: Product,
    paidBy: MelangeUser
  }

  export interface MelangeProductResponse {
      status: string,
      data: {
          product: MelangeProduct
      }

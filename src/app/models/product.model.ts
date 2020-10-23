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

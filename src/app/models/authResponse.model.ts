export interface AuthResponse {
  status: string,
  token: string,
  expiresIn: Date,
  data: {
      user: {
          _id: string,
          name: string,
          email: string,
          family: any
          __v: number
      }
  }
}

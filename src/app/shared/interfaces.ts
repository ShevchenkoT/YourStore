export interface User {
  email: string
  password: string
  returnSecureToken?: boolean
}

export interface FbAuthResponse {
  idToken: string
  expiresIn: string
}

export interface Product {
  phoneName: string;
  memory: number;
  phoneColor: string;
  phonePriceUsd: number;
  pictureUrl: string;
  id?: number;
  numberOfProducts?: number;
}

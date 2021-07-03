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
  id: number;
  phoneName: string;
  memory: number;
  phoneColor: string;
  phonePriceUsd: number;
  pictureUrl: string;
  numberOfProducts?: number;
}

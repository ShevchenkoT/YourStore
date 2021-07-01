export interface User {
  email: string
  password: string
  returnSecureToken?: boolean
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

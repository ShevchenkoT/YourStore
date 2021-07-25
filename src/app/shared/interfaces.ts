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
  id?: string;
  numberOfProducts?: number;
}
export interface Order {
  email: string;
  phoneNumber: string;
  fullName: string;
  sendingType: string;
  products: Product[];
  orderDate: Date;
  orderStatus: 'done' | 'cancel' | 'processing';
  address: string;
  orderPrice: number;
  id?: string;
  state?: 'start' | 'end';
}


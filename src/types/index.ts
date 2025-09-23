export interface Product {
  id: string;
  slug: string;
  title: string;
  description: string;
  pricePi: number;
  images: string[];
  category: string;
  stock: number;
  active: boolean;
  createdAt: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Order {
  id: string;
  userId: string;
  status: 'pending' | 'approved' | 'completed' | 'cancelled' | 'failed';
  amountPi: number;
  items: CartItem[];
  paymentId?: string;
  txid?: string;
  mode: 'testnet' | 'mainnet';
  createdAt: string;
  updatedAt: string;
}

export interface PiUser {
  uid: string;
  username: string;
  accessToken: string;
}

export type ProductCategory = 
  | 'Electronics'
  | 'Groceries'
  | 'Services'
  | 'Fashion'
  | 'Home & Garden'
  | 'Books & Media'
  | 'Sports & Outdoors'
  | 'Automotive';
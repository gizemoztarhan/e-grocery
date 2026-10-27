// Ürün Tipi
export interface Product {
  _id: string;
  name: string;
  category: string;
  price: number;
  unit: string;
  stock: number;
  origin: string;
  isOrganic: boolean;
  description: string;
  nutritionalValue: string;
  expiryDays: number;
  photo: string;
  __v: 0;
}

// Sepet Tipi
export interface Basket {
  _id: string;
  userId: string;
  totalAmount: number;
  createdAt: string;
  updatedAt: string;
  items: {
    grocery: Product;
    quantity: number;
    price: number;
    name: string;
    _id: string;
  }[];
  __v: 0;
}

// Sipariş Tipi
export interface Order {
  _id: string;
  product: Product;
  quantity: number;
  money_spend: number;
  currency: string;
  customer_id: string;
  customer_name: string;
  customer_phone: string;
  delivery_address: string;
  is_delivery: boolean;
  createdAt: string;
  updatedAt: string;
  __v: 0;
}

// API Response Tipleri
export type ProductsRes = Promise<{ groceries: Product[] }>;
export type ProductRes = Promise<{ grocery: Product }>;
export type BasketRes = Promise<{ cart: Basket }>;
export type UrlRes = Promise<{ url: string }>;
export type OrdersRes = Promise<{ orders: Order[] }>;

export type User = {
   id: number

   name: string
   email: string

   createdAt: Date
   updatedAt: Date

   totalCart: number
}

export type Product = {
   id: number

   name: string
   imageUrl: string
   price: number
   description: string
   stock: number

   createdAt: Date
   updatedAt: Date
}

export type Cart = {
   id: string

   userId: string | null
   status: string

   items: CartItem[]

   createdAt: Date
   updatedAt: Date

   totalAmount: number
}

export type CartItem = {
   id: string

   quantity: number

   productId: string
   product: Product

   cartId: string

   createdAt: Date
   updatedAt: Date

   totalPrice: number
}

export interface ApiResponse<T> {
   status: string;
   message: string;
   data: T;
 }

export type CartResponse = {
   totalAmount: number,
   items: CartItem[],
} 
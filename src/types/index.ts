export interface ProductProps {
  id: string | number
  name: string
  description: string
  price: number
  quantity: number
  image: string
}

export type ProductsResponse = {
  products: ProductProps[]
}

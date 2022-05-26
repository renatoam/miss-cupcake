export interface ProductDTO {
  id: string | number
  name: string
  description: string
  price: number
  quantity: number
  image: string
}

export type ProductsResponse = {
  products: ProductDTO[]
}

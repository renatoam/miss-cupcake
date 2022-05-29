import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ProductProps } from '../../../types'
import type { RootState } from '../../store'

interface CartState {
  products: ProductProps[]
  discounts?: number
  tax?: number
  shipping?: number
  subtotal?: number
  total: number
}

const initialCartState: CartState = {
  products: [],
  discounts: 0,
  tax: 0,
  shipping: 0,
  subtotal: 0,
  total: 0
}

const calculateDeductions = (subtotal?: number, discounts?: number) => {
  return (subtotal ?? 0) - (discounts ?? 0)
}

const calculateAdditions = (taxes?: number, shipping?: number) => {
  return (taxes ?? 0) + (shipping ?? 0)
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProductProps>) => {
      state.products.push(action.payload)
    },
    removeFromCart: (state, action: PayloadAction<ProductProps>) => {
      state.products = state.products.filter(product => product.id !== action.payload.id)
    },
    updateCart: (state, action: PayloadAction<ProductProps>) => {
      const productIndex = state.products.findIndex(product => product.id === action.payload.id)

      state.products[productIndex].quantity = action.payload.quantity
    },
    getSubtotal: (state) => {
      state.subtotal = state.products.reduce((acc, product) => acc + product.price, 0)
    },
    getTotal: (state) => {
      const deductions = calculateDeductions(state.subtotal, state.discounts)
      const additions = calculateAdditions(state.tax, state.shipping)

      state.total = deductions + additions
    },
  },
})

export const { addToCart, removeFromCart, updateCart, getSubtotal, getTotal } = cartSlice.actions

export const cartSelector = (state: RootState) => state.cart

export default cartSlice.reducer
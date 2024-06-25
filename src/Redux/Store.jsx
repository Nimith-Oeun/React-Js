import { configureStore } from '@reduxjs/toolkit'
import  productsSlice  from './feature/product/ProductSlice'
import CartSlice from './feature/cart/CartSlice'

export const store = configureStore({
    reducer : {
        cart : CartSlice,
        products : productsSlice
    },
}
)
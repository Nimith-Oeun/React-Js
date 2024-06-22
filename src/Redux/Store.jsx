import { configureStore } from '@reduxjs/toolkit'
import  productsSlice  from './feature/product/ProductSlice'

export const store = configureStore({
    reducer : {
        products : productsSlice
    },
}
)
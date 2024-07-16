import { configureStore } from '@reduxjs/toolkit'
import  productsSlice  from './feature/product/ProductSlice'
import CartSlice from './feature/cart/CartSlice'
import  userSlice  from './feature/user/UserSlice'

export const store = configureStore({
    reducer : {
        cart : CartSlice,
        products : productsSlice,
        user : userSlice
    },
}
)
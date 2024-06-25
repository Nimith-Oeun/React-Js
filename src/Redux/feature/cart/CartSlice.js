import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    items : [],
    total : 0,
}

export const cartSlice = createSlice(
    {
        name : "Card",
        initialState,
        reducers: {
            addToCart: (state , action)=>{
                let existingProduct = state.items.some(
                    (item)=> item.id === action.payload.id
                );
                
                console.log(existingProduct)

                if(existingProduct){
                    state.items.map((item)=>{
                        if(item.id === action.payload.id){
                            item.qty +=1
                        }else{
                            state.items.push(action.payload)
                            state.total +=1
                        }
                    })
                       
                }else{
                    state.items.push(action.payload)
                    state.total +=1
                    // state.chagePrice=action.payload.price
                }
               
            } 
           
        }
    }
);

export const {addToCart} = cartSlice.actions;

export default  cartSlice.reducer; 
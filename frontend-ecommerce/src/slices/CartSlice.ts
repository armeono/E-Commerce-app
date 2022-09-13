import {createSlice} from '@reduxjs/toolkit'

const CartSlice = createSlice({
    name: 'cart',
    initialState: {cartState: false},
    reducers: {
        changeCartState: (state, {payload}) => {
            state.cartState = payload
        }
    }
})

export const {changeCartState} = CartSlice.actions;

export default CartSlice.reducer;
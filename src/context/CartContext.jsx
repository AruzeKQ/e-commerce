import { createContext, useReducer } from "react";
import { initialState, cartReducer } from "../reducer/CartReducer";

const CartContext = createContext()

export function CartProvider({ children }) {
    const [state, dispatch] = useReducer(
        cartReducer,
        initialState
    )

    return (
        <CartContext.Provider value={
            {
                cart: state.cart,
                dispatch
            }
        }>
            {children}
        </CartContext.Provider>
    )
}
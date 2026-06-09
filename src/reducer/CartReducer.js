export const initialState = {
    cart: [],
};

export const cartReducer = (state, action) => {
    console.log(state)
    switch (action.type) {
        case "ADD_TO_CART":
            const existingItem = state.cart.find(
                item => item.id === action.payload.id
            );
            if (existingItem) {
                return {
                    ...state,
                    cart: state.cart.map(item =>
                        item.id === action.payload.id
                            ? {
                                ...item,
                                quantity: item.quantity + 1
                            } : item
                    )
                }
            } else {
                return {
                    ...state,
                    cart: [
                        ...state.cart,
                        action.payload
                    ]
                }
            }
        case "REMOVE_ITEM":
        default:
            return state
    }
}
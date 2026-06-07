import { useParams } from "react-router-dom"

import './ProductDetail.css'

import { mockData } from "../mockdata/MockData"

import { useReducer } from "react";

const initialState = {
    cart: [],
};



const countReducer = (state, action) => {
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
        default:
            return state
    }
}


export default function ProductDetail() {
    const [state, dispatch] = useReducer(countReducer, initialState)

    // console.log(state)

    const { id } = useParams()

    const product = mockData.find((item) => item.id === String(id))


    return (
        <div className="product-detail">

            <div className="detail-image">

                <img
                    src={product.img}
                    alt="product"
                />

            </div>

            <div className="detail-content">

                <h1>Product ID: {product.id}</h1>

                <p>
                    {product.name}
                </p>

                <h2>{product.price} VNĐ</h2>

                <button onClick={() => dispatch({
                    type: "ADD_TO_CART",
                    payload: product
                })}>Thêm vào giỏ hàng</button>

            </div>

        </div>
    )
}
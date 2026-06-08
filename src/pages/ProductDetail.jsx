import { useParams } from "react-router-dom"

import './ProductDetail.css'

import { mockData } from "../mockdata/MockData"

import { useReducer } from "react";

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
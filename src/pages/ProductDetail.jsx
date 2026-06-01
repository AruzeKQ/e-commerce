import { useParams } from "react-router-dom"

import './ProductDetail.css'

import { mockData } from "../mockdata/MockData"

export default function ProductDetail() {

    const { id } = useParams()

    const product = mockData.find((item) => item.id === String(id))

    // console.log(product)

    return (
        <div className="product-detail">

            <div className="detail-image">

                <img
                    src="https://m.media-amazon.com/images/I/61GXXIx+SgL._AC_UL320_.jpg"
                    alt="product"
                />

            </div>

            <div className="detail-content">

                <h1>Product ID: {product.id}</h1>

                <p>
                    {product.name}
                </p>

                <h2>{product.price} VNĐ</h2>

                <button>Thêm vào giỏ hàng</button>

            </div>

        </div>
    )
}
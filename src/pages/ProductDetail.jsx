import { useParams } from "react-router-dom"

import './ProductDetail.css'

export default function ProductDetail() {

    const { id } = useParams()

    return (
        <div className="product-detail">

            <div className="detail-image">

                <img
                    src="https://m.media-amazon.com/images/I/61GXXIx+SgL._AC_UL320_.jpg"
                    alt="product"
                />

            </div>

            <div className="detail-content">

                <h1>Product ID: {id}</h1>

                <p>
                    Trendy Queen Womens Off the Shoulder
                    Tops Oversized Summer Spring T-Shirts
                    2026
                </p>

                <h2>300.000 VNĐ</h2>

                <button>Thêm vào giỏ hàng</button>

            </div>

        </div>
    )
}
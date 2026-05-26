import './ProductCard.css'
export default function ProductCard({ product }) {
    return (
        <div className="card-container">
            <img src={product.img} alt={product.detail} />
            <div className="product-infor">
                <h2>{product.name}</h2>
                <p className='product-price'>Giá: {product.price} VNĐ</p>
                <br />
                <p className='product-quantity'>Số lượng: {product.quantity}</p>
            </div>
        </div>
    )
}
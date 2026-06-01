import './Products.css'
import { useNavigate } from 'react-router-dom'
import ProductDetail from './ProductDetail'
import { mockData } from '../mockdata/MockData'


export default function Products() {

    const navigate = useNavigate()
    const detailProduct = (product) => {
        navigate(`/products/${product.id}`)
    }

    return (
        <div className="product-list">

            {mockData.map((product) => (

                <div
                    className="card-container"
                    key={product.id}
                    onClick={() => detailProduct(product)}>



                    <img
                        src={product.img}
                        alt={product.name}
                    />

                    <div className="product-infor">

                        <h2>{product.name}</h2>

                        <p className='product-price'>
                            Giá: {product.price} VNĐ
                        </p>

                        <p className='product-quantity'>
                            Số lượng: {product.quantity}
                        </p>

                    </div>



                </div>

            ))}

        </div>
    )
}
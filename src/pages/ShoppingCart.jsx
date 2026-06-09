import './ShoppingCart.css'
import { CartContext } from '../context/CartContext'
import { useContext } from 'react'

export default function ShoppingCart() {
    const { cart } = useContext(CartContext)
    // console.log(cart)
    return (
        <div className='cart-container'>
            <div className='item-added'>
                <h2>This is Shopping Cart</h2>
                {cart.map(item =>
                    <li key={item.id}>
                        <h3>{item.name}</h3>
                        <span>Giá tiền của từng sản phẩm: <strong>{item.price}</strong></span>
                        <p>Tổng số sản phẩm: <strong>{item.quantity}</strong></p>
                    </li>
                )}
            </div>
        </div>
    )
}
import { Link, NavLink } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import logo from "./logo.jpg"
import './Header.css'
import { useContext } from 'react';


export default function Header() {
    const { cart } = useContext(CartContext)
    const totalItem = cart.reduce(
        (sum, item) => { return sum + item.quantity }
        , 0
    )
    return (
        <header className="header">

            <div className="logo">
                {/* <Link to="/"><img src="./IMG_0658.jpg" alt="Meme" /></Link> */}
                <Link to="/">
                    <img src={logo} alt="Meme" />
                </Link>
            </div>

            {/* Các Router Link nằm trong Header */}
            <nav className="navigation">
                <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Trang chủ</NavLink>
                <NavLink to="/products" className={({ isActive }) => isActive ? "active" : ""}>Sản phẩm</NavLink>
                <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>Giới thiệu</NavLink>
            </nav>

            <div className='search'>
                <input
                    type="text"
                    placeholder='Nhập sản phẩm cần tìm ...' />
                <button>Tìm kiếm</button>
            </div>

            <div className="nav-right">

                <div className="login-container">
                    <Link to="/register">Đăng kí</Link>
                    <Link to="/login">Đăng nhập</Link>
                </div>

                <div className='cart-icon'>
                    <Link to="/cart">Giỏ hàng ({totalItem})</Link>
                </div>

            </div>
        </header>
    );
}
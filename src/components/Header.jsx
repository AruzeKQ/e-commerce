import { Link, NavLink } from 'react-router-dom';
import logo from "./logo.jpg"
import './Header.css'

export default function Header() {
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
                    <Link to="/cart">Giỏ hàng (0)</Link>
                </div>

            </div>
        </header>
    );
}
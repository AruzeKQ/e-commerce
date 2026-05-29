import { Link } from "react-router-dom"

import './Footer.css'

export default function Footer() {

    return (
        <footer className="footer">

            <div className="footer-container">

                {/* Logo + About */}
                <div className="footer-section">

                    <h2>Meme Shop</h2>

                    <p>
                        Website đẳng cấp vipro của a Kếu
                    </p>

                </div>

                {/* Navigation */}
                <div className="footer-section">

                    <h3>Liên kết</h3>

                    <Link to="/">Trang chủ</Link>

                    <Link to="/products">Sản phẩm</Link>

                    <Link to="/about">Giới thiệu</Link>

                </div>

                {/* Contact */}
                <div className="footer-section">

                    <h3>Liên hệ</h3>

                    <p>Email: khaiquang0103@gmail.com</p>

                    <p>Phone: 034 685 2018</p>

                    <p>Hà Nội, Việt Nam</p>

                </div>

            </div>

            {/* Bottom */}
            <div className="footer-bottom">

                <p>
                    © 2026 Kếu-skibidi.
                    All Rights Reserved.
                </p>

            </div>

        </footer>
    )
}
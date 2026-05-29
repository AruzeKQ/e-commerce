import { Link } from "react-router-dom"

import './NotFound.css'

export default function NotFound() {

    return (
        <div className="not-found">

            <h1>404</h1>

            <p>Trang không tồn tại</p>

            <Link to="/">
                Quay về trang chủ
            </Link>

        </div>
    )
}
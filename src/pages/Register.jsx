import './Register.css'

export default function Register() {

    return (
        <div className="register-page">

            <form className="register-form">

                <h1>Đăng ký</h1>

                <input
                    type="text"
                    placeholder="Nhập họ tên"
                />

                <input
                    type="email"
                    placeholder="Nhập email"
                />

                <input
                    type="password"
                    placeholder="Nhập mật khẩu"
                />

                <input
                    type="password"
                    placeholder="Xác nhận mật khẩu"
                />

                <button type="submit">
                    Đăng ký
                </button>

            </form>

        </div>
    )
}
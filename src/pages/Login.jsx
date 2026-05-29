import './Login.css'

export default function Login() {

    return (
        <div className="login-page">

            <form className="login-form">

                <h1>Đăng nhập</h1>

                <input
                    type="email"
                    placeholder="Nhập email"
                    required
                />

                <input
                    type="password"
                    placeholder="Nhập mật khẩu"
                    required
                />

                <button type="submit">
                    Đăng nhập
                </button>

            </form>

        </div>
    )
}
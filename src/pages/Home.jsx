import './Home.css'
import { useNavigate } from 'react-router-dom'

export default function Home() {
    const navigate = useNavigate()

    const handleChangeComponent = () => {
        navigate("/products")
    }

    return (
        <div className="home-container">

            <section className="hero">

                <h1>Sàn E-Com của anh Kếu đẹp trai</h1>

                <p>
                    The worst product with high Price hehehe !!!
                </p>

                <button onClick={handleChangeComponent}>Mua ngay</button>

            </section>

        </div>
    )
}
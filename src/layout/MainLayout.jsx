import { Outlet } from "react-router-dom"

import Header from "../components/Header"
import Footer from "../components/Footer"

import './MainLayout.css'

export default function MainLayout() {

    return (
        <div className="layout-container">

            <Header />

            <main className="main-content">
                <Outlet />
            </main>

            <Footer />

        </div>
    )
}
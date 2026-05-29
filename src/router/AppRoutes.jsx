import { Routes, Route } from "react-router-dom"

import MainLayout from "../layout/MainLayout"

import Home from "../pages/Home"
import Products from "../pages/Products"
import ProductDetail from "../pages/ProductDetail"
import About from "../pages/About"
import Login from "../pages/Login"
import Register from "../pages/Register"
import NotFound from "../pages/NotFound"



export default function AppRoutes() {
    return (
        <Routes>

            <Route path="/" element={<MainLayout />}>

                <Route index element={<Home />} />

                <Route
                    path="products"
                    element={<Products />}
                />

                <Route
                    path="products/:id"
                    element={<ProductDetail />}
                />

                <Route
                    path="about"
                    element={<About />}
                />

                <Route
                    path="login"
                    element={<Login />}
                />

                <Route
                    path="register"
                    element={<Register />}
                />

            </Route>

            <Route path="*" element={<NotFound />} />

        </Routes>
    )
}
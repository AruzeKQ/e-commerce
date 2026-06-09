import AppRoutes from "./router/AppRoutes"
import { CartProvider } from "./context/CartContext"
function App() {
  return (
    <CartProvider>
      <AppRoutes />
    </CartProvider>

  )
}
export default App

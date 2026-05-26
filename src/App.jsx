import Header from './components/layout/Header'
import ProductGrid from './components/product/ProductGrid'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <ProductGrid />
    </BrowserRouter>

  )
}

export default App

import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import Franchise from './Pages/Franchise'
import Menu from './Pages/Menu'
import AboutPage from './Pages/AboutPage'
import ProductDetailPage from './Pages/ProductDetailPage'
import CartItem from './Pages/CartItem'
import CheckOutPage from './Pages/CheckOutPage'
function App() {

  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/franchice' element={<Franchise />} />
      <Route path='/menu' element={<Menu />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/product-page' element={<ProductDetailPage />} />
      <Route path='/cart' element={<CartItem />} />
      <Route path='/check-out' element={<CheckOutPage />} />

    </Routes>
  )
}

export default App

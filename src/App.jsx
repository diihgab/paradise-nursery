"use client"

import { useState } from "react"
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom"
import { Provider, useSelector } from "react-redux"
import { ShoppingCart } from "lucide-react"
import store from "./store"
import ProductList from "./components/ProductList"
import CartPage from "./components/CartPage"
import AboutUs from "./components/AboutUs"
import "./App.css"

function Navigation() {
  const cartItems = useSelector((state) => state.cart.items)
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <nav className="navigation">
      <div className="nav-container">
        <Link to="/" className="logo">
          Paradise Nursery
        </Link>
        <div className="nav-links">
          <Link to="/plants" className="nav-link">
            Plantas
          </Link>
          <Link to="/about" className="nav-link">
            Sobre Nós
          </Link>
          <Link to="/cart" className="cart-link">
            <ShoppingCart className="cart-icon" />
            {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
          </Link>
        </div>
      </div>
    </nav>
  )
}

function LandingPage() {
  const navigate = useNavigate()
  const [showProductList, setShowProductList] = useState(false)

  const handleGetStarted = () => {
    setShowProductList(true)
    navigate("/plants")
  }

  return (
    <div className="landing-page">
      <div className="landing-overlay">
        <div className="landing-content">
          <h1 className="landing-title">Paradise Nursery</h1>
          <p className="landing-subtitle">Bem-vindo ao Paraíso das Plantas</p>
          <p className="landing-description">
            Descubra nossa seleção exclusiva de plantas de interior que transformarão seu espaço em um oásis verde
          </p>
          <button className="get-started-button" onClick={handleGetStarted}>
            Get Started
          </button>
        </div>
      </div>
    </div>
  )
}

function AppContent() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/plants" element={<ProductList />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </div>
    </Router>
  )
}

function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  )
}

export default App

"use client"

import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import CartItem from "./CartItem"
import "./CartPage.css"

function CartPage() {
  const navigate = useNavigate()
  const cartItems = useSelector((state) => state.cart.items)

  const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  if (cartItems.length === 0) {
    return (
      <div className="empty-cart">
        <div className="empty-cart-content">
          <h2 className="empty-cart-title">Seu carrinho está vazio</h2>
          <p className="empty-cart-text">Adicione algumas plantas maravilhosas à sua coleção!</p>
          <button className="continue-shopping-button" onClick={() => navigate("/plants")}>
            Ver Plantas
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="cart-page">
      <div className="cart-container">
        <h1 className="cart-title">Carrinho de Compras</h1>
        <p className="cart-subtitle">
          {totalItems} {totalItems === 1 ? "item" : "itens"} no carrinho
        </p>

        <div className="cart-content">
          <div className="cart-items-section">
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          <div className="cart-summary">
            <h2 className="summary-title">Resumo do Pedido</h2>

            <div className="summary-details">
              <div className="summary-row">
                <span>Subtotal</span>
                <span>R$ {totalAmount.toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span>Frete</span>
                <span className="free-shipping">Grátis</span>
              </div>
              <div className="summary-divider"></div>
              <div className="summary-row summary-total">
                <span>Total</span>
                <span>R$ {totalAmount.toFixed(2)}</span>
              </div>
            </div>

            <button className="checkout-button">Finalizar Compra</button>
            <p className="checkout-note">Em breve</p>

            <button className="continue-shopping-link" onClick={() => navigate("/plants")}>
              Continuar Comprando
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartPage

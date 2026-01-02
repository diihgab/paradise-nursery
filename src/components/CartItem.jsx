"use client"

import { useDispatch, useSelector } from "react-redux"
import { increaseQuantity, decreaseQuantity, removeItem } from "../CartSlice"
import "./CartItem.css"

function CartItem({ item }) {
  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cart.items)

  const handleIncrease = () => {
    dispatch(increaseQuantity(item.id))
  }

  const handleDecrease = () => {
    dispatch(decreaseQuantity(item.id))
  }

  const handleRemove = () => {
    dispatch(removeItem(item.id))
  }

  const itemTotal = item.price * item.quantity

  const totalCartAmount = cartItems.reduce((sum, cartItem) => sum + cartItem.price * cartItem.quantity, 0)
  const totalCartItems = cartItems.reduce((sum, cartItem) => sum + cartItem.quantity, 0)

  return (
    <div className="cart-item">
      <div className="cart-item-image-container">
        <img src={item.image || "/placeholder.svg"} alt={item.name} className="cart-item-image" />
      </div>

      <div className="cart-item-details">
        <h3 className="cart-item-name">{item.name}</h3>
        <p className="cart-item-unit-price">R$ {item.price.toFixed(2)} por unidade</p>

        <div className="cart-item-actions">
          <div className="quantity-controls">
            <button onClick={handleDecrease} className="quantity-button" aria-label="Diminuir quantidade">
              -
            </button>
            <span className="quantity-display">{item.quantity}</span>
            <button onClick={handleIncrease} className="quantity-button" aria-label="Aumentar quantidade">
              +
            </button>
          </div>

          <div className="cart-item-footer">
            <p className="cart-item-total">Subtotal: R$ {itemTotal.toFixed(2)}</p>
            <button onClick={handleRemove} className="remove-button" aria-label="Remover item">
              Remover
            </button>
          </div>
        </div>

        <div className="cart-total-info">
          <p className="total-items-count">Total de itens no carrinho: {totalCartItems}</p>
          <p className="total-cart-amount">Total do Carrinho: R$ {totalCartAmount.toFixed(2)}</p>
        </div>
      </div>
    </div>
  )
}

export default CartItem

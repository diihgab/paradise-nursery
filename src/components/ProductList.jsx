"use client"

import { useDispatch, useSelector } from "react-redux"
import { addItem } from "../CartSlice"
import { plantsData } from "../data/plantsData"
import "./ProductList.css"

function ProductList() {
  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cart.items)

  const isInCart = (plantId) => {
    return cartItems.some((item) => item.id === plantId)
  }

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant))
  }

  const categories = [...new Set(plantsData.map((p) => p.category))]

  return (
    <div className="product-list-container">
      <div className="product-list-header">
        <h1 className="page-title">Nossa Coleção de Plantas</h1>
        <p className="page-subtitle">Escolha entre nossa seleção cuidadosamente curada de plantas de interior</p>
      </div>

      {categories.map((category) => (
        <section key={category} className="category-section">
          <h2 className="category-title">{category}</h2>
          <div className="products-grid">
            {plantsData
              .filter((plant) => plant.category === category)
              .map((plant) => (
                <div key={plant.id} className="product-card">
                  <div className="product-image-container">
                    <img src={plant.image || "/placeholder.svg"} alt={plant.name} className="product-image" />
                  </div>
                  <div className="product-info">
                    <div className="product-header">
                      <h3 className="product-name">{plant.name}</h3>
                      <span className="product-price">R$ {plant.price.toFixed(2)}</span>
                    </div>
                    <p className="product-description">{plant.description}</p>
                    <button
                      onClick={() => handleAddToCart(plant)}
                      disabled={isInCart(plant.id)}
                      className={`add-to-cart-button ${isInCart(plant.id) ? "disabled" : ""}`}
                    >
                      {isInCart(plant.id) ? "Adicionado ao Carrinho" : "Adicionar ao Carrinho"}
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </section>
      ))}
    </div>
  )
}

export default ProductList

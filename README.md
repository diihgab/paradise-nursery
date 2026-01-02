# Paradise Nursery - Shopping Cart Application

## Project Name
**Paradise Nursery - Plant Shop E-commerce Application**

## Description
Paradise Nursery is a fully functional e-commerce web application built with React and Redux Toolkit. The application allows users to browse a curated collection of houseplants, add them to a shopping cart, and manage their orders. This project demonstrates modern React development practices, state management with Redux, and responsive UI design.

## Technologies Used
- **React 19.2** - JavaScript library for building user interfaces
- **Redux Toolkit** - State management for the shopping cart
- **React Router DOM** - Client-side routing and navigation
- **CSS3** - Custom styling with CSS variables for theming
- **Lucide React** - Modern icon library

## Project Structure
```
src/
├── App.jsx                    # Main application component with routing
├── App.css                    # Main styles including landing page background
├── CartSlice.jsx              # Redux slice with cart reducers
├── store.js                   # Redux store configuration
├── components/
│   ├── AboutUs.jsx           # Company information page
│   ├── AboutUs.css           # About Us page styles
│   ├── ProductList.jsx       # Product listing component
│   ├── ProductList.css       # Product listing styles
│   ├── CartItem.jsx          # Individual cart item component
│   ├── CartItem.css          # Cart item styles
│   ├── CartPage.jsx          # Shopping cart page
│   └── CartPage.css          # Cart page styles
├── data/
│   └── plantsData.js         # Plant products data (18 unique plants)
└── public/
    └── [plant images]        # Product images
```

## Key Features

### 1. Landing Page (App.jsx)
- Beautiful background image of a botanical greenhouse
- Company name "Paradise Nursery" prominently displayed
- "Get Started" button that navigates to the product listing
- Responsive design with overlay for better text readability

### 2. Product Listing Page (ProductList.jsx)
- **18 unique plants** organized into **3 categories**:
  - Indoor Plants (6 plants)
  - Succulents (6 plants)
  - Aromatic Plants (6 plants)
- Each product card displays:
  - High-quality product image thumbnail
  - Plant name
  - Detailed description
  - Price in Brazilian Reais (R$)
  - "Add to Cart" button
- Smart cart integration:
  - Button disables after adding item to cart
  - Button text changes to "Added to Cart"
  - Navigation bar shows real-time cart item count

### 3. Shopping Cart (CartItem.jsx & CartPage.jsx)
- Complete cart functionality:
  - Display all added products with thumbnails
  - Show unit price and item name for each product
  - Quantity controls (increase/decrease buttons)
  - Calculate and display total cost per item
  - Delete button to remove items
  - Total cart value calculation
  - Total items count
- User actions:
  - "Checkout" button (displays "Coming Soon")
  - "Continue Shopping" button to return to products
- Empty cart state with friendly message

### 4. Redux Store (CartSlice.jsx)
Implementation of three main reducer functions:
- **addItem(state, action)** - Adds a product to the cart or increases quantity if already exists
- **removeItem(state, action)** - Completely removes a product from the cart
- **updateQuantity(state, action)** - Updates the quantity of a specific item
- Additional helpers:
  - increaseQuantity - Increment item quantity by 1
  - decreaseQuantity - Decrement item quantity by 1 (minimum 1)

### 5. Navigation
- Sticky navigation bar with:
  - Paradise Nursery logo/brand name
  - Links to Plants, About Us pages
  - Shopping cart icon with dynamic badge showing total items
- Consistent across all pages

### 6. About Us Page (AboutUs.jsx)
- Company history and mission
- Core values presented in feature cards:
  - Premium Quality
  - Passion for Nature
  - Safe Delivery
  - Satisfaction Guarantee
- Company vision statement
- Responsive grid layout

## Implementation Highlights

### App.css - Background Image Implementation
The landing page background is implemented in `App.css` using:
```css
.landing-page {
  background-image: url("/lush-botanical-greenhouse-with-tropical-plants.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
```
With a gradient overlay for better text contrast and visual appeal.

### CartSlice.jsx - Reducer Functions
```javascript
addItem: (state, action) => {
  const existingItem = state.items.find((item) => item.id === action.payload.id)
  if (existingItem) {
    existingItem.quantity += 1
  } else {
    state.items.push({ ...action.payload, quantity: 1 })
  }
}

removeItem: (state, action) => {
  state.items = state.items.filter((item) => item.id !== action.payload)
}

updateQuantity: (state, action) => {
  const { id, quantity } = action.payload
  const item = state.items.find((item) => item.id === id)
  if (item && quantity > 0) {
    item.quantity = quantity
  }
}
```

## How to Run

### Prerequisites
- Node.js 18 or higher
- npm or yarn package manager

### Installation
1. Clone or download the project
2. Install dependencies:
```bash
npm install
```

### Development Mode
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser

### Production Build
```bash
npm run build
npm start
```

## Product Categories

### Indoor Plants
1. Monstera Deliciosa - R$ 89.90
2. Pothos (Golden Pothos) - R$ 45.90
3. Snake Plant (Sansevieria) - R$ 55.90
4. Fiddle Leaf Fig - R$ 129.90
5. ZZ Plant - R$ 68.90
6. Calathea Ornata - R$ 75.90

### Succulents
7. Echeveria Elegans - R$ 25.90
8. Haworthia Fasciata - R$ 32.90
9. Jade Plant - R$ 42.90
10. Burro's Tail - R$ 38.90
11. Aloe Vera - R$ 35.90
12. Sempervivum Mix - R$ 29.90

### Aromatic Plants
13. Italian Basil - R$ 18.90
14. Peppermint - R$ 16.90
15. Rosemary - R$ 22.90
16. Lavender - R$ 28.90
17. Thyme - R$ 19.90
18. Sage - R$ 21.90

## Design Features
- Natural green color palette reflecting botanical theme
- Responsive design for mobile, tablet, and desktop
- Smooth transitions and hover effects
- CSS custom properties for consistent theming
- Accessible button states and interactions

## Requirements Fulfilled

### Question 1: README.md ✅
Complete project documentation with all details

### Question 2: AboutUs.jsx ✅
Comprehensive company information component

### Question 3: App.css ✅
Background image implementation for landing page

### Question 4: App.jsx ✅
Landing page with company name and "Get Started" button

### Question 5: CartSlice.jsx ✅
Redux slice with addItem(), removeItem(), and updateQuantity() reducers

### Question 6: ProductList.jsx ✅
- 18 unique plants in 3 categories
- Product thumbnails, names, and prices
- Add to cart button with disable functionality
- Cart icon with item count in navigation
- Category grouping

### Question 7: CartItem.jsx ✅
- Total cart value display
- Individual item total calculation
- Product thumbnails and unit prices
- Quantity increase/decrease controls
- Delete button for each item
- Checkout button (Coming Soon)
- Continue Shopping button

## Future Enhancements
- User authentication
- Payment gateway integration
- Order history
- Product search and filtering
- Wishlist functionality
- Customer reviews and ratings

## Author
Educational project demonstrating React and Redux skills

## License
Educational use only

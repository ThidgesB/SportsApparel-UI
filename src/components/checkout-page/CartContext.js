import React from 'react';

const CartContext = React.createContext();

function cartReducer(state, action) {
  switch (action.type) {
    case 'delete': {
      return {
        ...state,
        products: state.products.filter(
          (product) => product.title !== action.product.title
        )
      };
    }
    case 'add': {
      // Check if the product is already in the cart
      const existingProductIndex = state.products.findIndex(
        (product) => product.id === action.product.id
      );
      if (existingProductIndex !== -1) {
        // If the product is already in the cart, update its quantity
        const updatedProducts = [...state.products];
        updatedProducts[existingProductIndex].quantity += 1;
        return {
          ...state,
          products: updatedProducts
        };
      }
      return {
        ...state,
        products: [
          ...state.products,
          {
            ...action.product,
            quantity: 1
          }
        ]
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function CartProvider({ children }) {
  // changed initial products to empty defaults
  const initialProducts = {
    products: [],
    setProducts: () => {}
  };
  const [state, dispatch] = React.useReducer(cartReducer, initialProducts);

  const value = { state, dispatch };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

function useCart() {
  const context = React.useContext(CartContext);

  if (context === undefined) {
    // Return an empty cart object when the context is undefined
    return (
      <div>
        <p>Cart is empty. Please select your favorite items to get started!</p>
      </div>
    );
  }

  return context;
}

export { CartProvider, useCart };

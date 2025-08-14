import React, { createContext, useContext, useMemo } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { MAX_QTY } from "../hooks/useMaxQuantity";

const CartContext = createContext();

export function CartProvider({ children }) {
  // items: { productId: qty }
  const [items, setItems] = useLocalStorage("cart_items", {});

  function setQuantity(productId, qty) {
    setItems((prev) => {
      const copy = { ...prev };
      if (!qty || qty <= 0) {
        delete copy[productId];
      } else {
        copy[productId] = Math.min(qty, MAX_QTY);
      }
      return copy;
    });
  }

  function increment(productId, by = 1) {
    setItems((prev) => {
      const current = prev[productId] || 0;
      const next = Math.min(current + by, MAX_QTY);
      return { ...prev, [productId]: next };
    });
  }

  function decrement(productId, by = 1) {
    setItems((prev) => {
      const current = prev[productId] || 0;
      const next = current - by;
      const copy = { ...prev };
      if (next <= 0) {
        delete copy[productId];
      } else {
        copy[productId] = next;
      }
      return copy;
    });
  }

  function clearCart() {
    setItems({});
  }

  const totalItems = useMemo(
    () => Object.values(items).reduce((s, q) => s + q, 0),
    [items]
  );

  return (
    <CartContext.Provider
      value={{
        items,
        setQuantity,
        increment,
        decrement,
        clearCart,
        totalItems,
        MAX_QTY
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}

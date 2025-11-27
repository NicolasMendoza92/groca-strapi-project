"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

export interface CartItem {
  id: string
  title: string
  price: number
  image: string
  quantity: number
}

interface CartContextType {
  items: CartItem[]
  addToCart: (item: CartItem) => void
  removeFromCart: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  getItemCount: () => number
  getTotal: () => number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])

  const addToCart = (item: CartItem) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id)

      if (existingItem) {
        return prevItems.map((i) => (i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i))
      }

      return [...prevItems, item]
    })
  }

  const removeFromCart = (id: string) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id))
  }

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id)
      return
    }

    setItems((prevItems) => prevItems.map((item) => (item.id === id ? { ...item, quantity } : item)))
  }

  const getItemCount = () => {
    return items.reduce((total, item) => total + item.quantity, 0)
  }

  const getTotal = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        getItemCount,
        getTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
//   if (context === undefined) {
//     throw new Error("useCart must be used within a CartProvider")
//   }
  return context
}

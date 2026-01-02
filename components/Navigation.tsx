"use client"

import Link from "next/link"
import { useSelector } from "react-redux"
import type { RootState } from "@/lib/store"
import { ShoppingCart, Leaf } from "lucide-react"

export default function Navigation() {
  const cartItems = useSelector((state: RootState) => state.cart.items)
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-xl font-serif font-semibold text-primary">
            <Leaf className="w-6 h-6" />
            Paradise Nursery
          </Link>

          <div className="flex items-center gap-6">
            <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
              Início
            </Link>
            <Link href="/plants" className="text-sm font-medium hover:text-primary transition-colors">
              Plantas
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
              Sobre Nós
            </Link>
            <Link
              href="/cart"
              className="relative flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
            >
              <ShoppingCart className="w-5 h-5" />
              <span className="sr-only">Carrinho</span>
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

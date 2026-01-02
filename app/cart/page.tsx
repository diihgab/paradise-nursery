"use client"

import { useSelector } from "react-redux"
import type { RootState } from "@/lib/store"
import Navigation from "@/components/Navigation"
import CartItem from "@/components/CartItem"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { ShoppingBag, ArrowLeft } from "lucide-react"

export default function CartPage() {
  const cartItems = useSelector((state: RootState) => state.cart.items)

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-5xl mx-auto">
            <h1 className="font-serif text-4xl font-bold text-primary mb-8">Carrinho de Compras</h1>

            {cartItems.length === 0 ? (
              <Card className="p-12 text-center">
                <ShoppingBag className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
                <h2 className="font-serif text-2xl font-semibold mb-2">Seu carrinho está vazio</h2>
                <p className="text-muted-foreground mb-6">Adicione algumas plantas para começar suas compras</p>
                <Link href="/plants">
                  <Button>
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Continuar Comprando
                  </Button>
                </Link>
              </Card>
            ) : (
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-4">
                  {cartItems.map((item) => (
                    <CartItem key={item.id} item={item} />
                  ))}

                  <Link href="/plants">
                    <Button variant="outline" className="w-full bg-transparent">
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Continuar Comprando
                    </Button>
                  </Link>
                </div>

                <div className="lg:col-span-1">
                  <Card className="p-6 sticky top-24">
                    <h2 className="font-serif text-2xl font-bold mb-4">Resumo do Pedido</h2>
                    <Separator className="mb-4" />

                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Itens ({totalItems})</span>
                        <span>R$ {subtotal.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Frete</span>
                        <span className="text-muted-foreground">Calculado no checkout</span>
                      </div>
                    </div>

                    <Separator className="mb-4" />

                    <div className="flex justify-between items-center mb-6">
                      <span className="font-semibold text-lg">Total</span>
                      <span className="font-bold text-2xl text-primary">R$ {subtotal.toFixed(2)}</span>
                    </div>

                    <Button className="w-full mb-3" size="lg">
                      Finalizar Compra - Em Breve
                    </Button>

                    <p className="text-xs text-center text-muted-foreground">
                      Checkout seguro e protegido disponível em breve
                    </p>
                  </Card>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  )
}

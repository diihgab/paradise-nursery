"use client"

import { useDispatch } from "react-redux"
import { increaseQuantity, decreaseQuantity, removeItem } from "@/lib/CartSlice"
import type { CartItem as CartItemType } from "@/lib/CartSlice"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Plus, Minus, Trash2 } from "lucide-react"
import Image from "next/image"

interface CartItemProps {
  item: CartItemType
}

export default function CartItem({ item }: CartItemProps) {
  const dispatch = useDispatch()

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

  return (
    <Card className="p-4">
      <div className="flex gap-4">
        <div className="relative w-24 h-24 shrink-0 rounded-md overflow-hidden bg-muted">
          <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" sizes="96px" />
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-lg mb-1">{item.name}</h3>
          <p className="text-sm text-muted-foreground mb-2">R$ {item.price.toFixed(2)} por unidade</p>

          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-2">
              <Button onClick={handleDecrease} size="icon" variant="outline" className="w-8 h-8 bg-transparent">
                <Minus className="w-4 h-4" />
                <span className="sr-only">Diminuir quantidade</span>
              </Button>
              <span className="w-12 text-center font-medium">{item.quantity}</span>
              <Button onClick={handleIncrease} size="icon" variant="outline" className="w-8 h-8 bg-transparent">
                <Plus className="w-4 h-4" />
                <span className="sr-only">Aumentar quantidade</span>
              </Button>
            </div>

            <div className="flex items-center gap-4 ml-auto">
              <p className="font-bold text-lg text-primary">R$ {itemTotal.toFixed(2)}</p>
              <Button onClick={handleRemove} size="icon" variant="destructive" className="w-8 h-8">
                <Trash2 className="w-4 h-4" />
                <span className="sr-only">Remover item</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}

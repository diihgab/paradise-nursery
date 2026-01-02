"use client"
import { useDispatch, useSelector } from "react-redux"
import { addItem } from "@/lib/CartSlice"
import type { Plant } from "@/lib/CartSlice"
import type { RootState } from "@/lib/store"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

interface ProductListProps {
  plants: Plant[]
}

export default function ProductList({ plants }: ProductListProps) {
  const dispatch = useDispatch()
  const cartItems = useSelector((state: RootState) => state.cart.items)

  const isInCart = (plantId: number) => {
    return cartItems.some((item) => item.id === plantId)
  }

  const handleAddToCart = (plant: Plant) => {
    dispatch(addItem(plant))
  }

  // Group plants by category
  const categories = Array.from(new Set(plants.map((p) => p.category)))

  return (
    <div className="container mx-auto px-4 py-12">
      {categories.map((category) => (
        <section key={category} className="mb-16">
          <h2 className="font-serif text-3xl font-bold text-primary mb-8">{category}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {plants
              .filter((plant) => plant.category === category)
              .map((plant) => (
                <Card key={plant.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-64 bg-muted">
                    <Image
                      src={plant.image || "/placeholder.svg"}
                      alt={plant.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-start justify-between gap-2">
                      <CardTitle className="text-xl">{plant.name}</CardTitle>
                      <Badge variant="secondary" className="shrink-0">
                        R$ {plant.price.toFixed(2)}
                      </Badge>
                    </div>
                    <CardDescription className="leading-relaxed">{plant.description}</CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button
                      onClick={() => handleAddToCart(plant)}
                      disabled={isInCart(plant.id)}
                      className="w-full"
                      variant={isInCart(plant.id) ? "secondary" : "default"}
                    >
                      {isInCart(plant.id) ? "Adicionado ao Carrinho" : "Adicionar ao Carrinho"}
                    </Button>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </section>
      ))}
    </div>
  )
}

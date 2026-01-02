import Navigation from "@/components/Navigation"
import ProductList from "@/components/ProductList"
import { plantsData } from "@/lib/plants-data"

export default function PlantsPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background">
        <div className="bg-secondary/30 py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">Nossa Coleção de Plantas</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              Explore nossa seleção cuidadosamente curada de plantas de interior, suculentas e ervas aromáticas
            </p>
          </div>
        </div>
        <ProductList plants={plantsData} />
      </main>
    </>
  )
}

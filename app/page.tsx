import Link from "next/link"
import { Button } from "@/components/ui/button"
import Navigation from "@/components/Navigation"

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <div
          className="relative h-[600px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/lush-botanical-greenhouse-with-tropical-plants.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-foreground/30"></div>
          <div className="relative z-10 text-center text-white px-4">
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-balance">
              Paradise Nursery
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-pretty leading-relaxed">
              Transforme seu espaço com nossas plantas de interior cuidadosamente selecionadas
            </p>
            <Link href="/plants">
              <Button size="lg" className="text-base px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground">
                Começar
              </Button>
            </Link>
          </div>
        </div>

        <section className="py-16 px-4 bg-secondary/30">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-primary">Bem-vindo ao Paraíso</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Descubra nossa coleção exclusiva de plantas de interior que trazem vida, beleza e serenidade para o seu
              lar. Cada planta é cuidadosamente cultivada e selecionada para garantir qualidade e saúde excepcionais.
            </p>
          </div>
        </section>
      </main>
    </>
  )
}

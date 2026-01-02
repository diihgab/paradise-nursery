import { Card } from "@/components/ui/card"
import { Leaf, Heart, Truck, Award } from "lucide-react"

export default function AboutUs() {
  return (
    <div className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">Sobre Nós</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Bem-vindo ao Paradise Nursery, onde a paixão por plantas encontra a qualidade excepcional
          </p>
        </div>

        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-foreground leading-relaxed mb-6">
            Desde 2020, o Paradise Nursery tem sido o destino preferido para entusiastas de plantas em busca das mais
            belas e saudáveis plantas de interior. Nossa missão é trazer a natureza para dentro de casa, oferecendo uma
            seleção cuidadosamente curada de plantas que não apenas embelezam seu espaço, mas também melhoram sua
            qualidade de vida.
          </p>

          <p className="text-foreground leading-relaxed mb-6">
            Cada planta em nossa coleção é cultivada com dedicação e expertise, garantindo que você receba apenas o
            melhor. Nossos especialistas em horticultura trabalham incansavelmente para manter os mais altos padrões de
            qualidade, desde a seleção de sementes até o cuidado diário de cada planta.
          </p>

          <p className="text-foreground leading-relaxed">
            Acreditamos que ter plantas em casa não é apenas sobre decoração - é sobre criar um ambiente mais saudável,
            tranquilo e conectado com a natureza. Por isso, oferecemos não apenas plantas excepcionais, mas também todo
            o suporte necessário para que você tenha sucesso em sua jornada de jardinagem.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card className="p-6">
            <Leaf className="w-12 h-12 text-primary mb-4" />
            <h3 className="font-serif text-xl font-bold mb-2">Qualidade Premium</h3>
            <p className="text-muted-foreground leading-relaxed">
              Todas as nossas plantas são cultivadas em condições ideais e passam por rigoroso controle de qualidade
              antes de chegarem até você.
            </p>
          </Card>

          <Card className="p-6">
            <Heart className="w-12 h-12 text-primary mb-4" />
            <h3 className="font-serif text-xl font-bold mb-2">Paixão pela Natureza</h3>
            <p className="text-muted-foreground leading-relaxed">
              Nossa equipe é formada por especialistas apaixonados que estão sempre prontos para ajudar você a escolher
              e cuidar de suas plantas.
            </p>
          </Card>

          <Card className="p-6">
            <Truck className="w-12 h-12 text-primary mb-4" />
            <h3 className="font-serif text-xl font-bold mb-2">Entrega Segura</h3>
            <p className="text-muted-foreground leading-relaxed">
              Utilizamos embalagens especiais e métodos de transporte cuidadosos para garantir que suas plantas cheguem
              em perfeitas condições.
            </p>
          </Card>

          <Card className="p-6">
            <Award className="w-12 h-12 text-primary mb-4" />
            <h3 className="font-serif text-xl font-bold mb-2">Garantia de Satisfação</h3>
            <p className="text-muted-foreground leading-relaxed">
              Sua satisfação é nossa prioridade. Oferecemos garantia em todas as nossas plantas e suporte contínuo para
              seus cuidados.
            </p>
          </Card>
        </div>

        <div className="bg-secondary/30 rounded-lg p-8 text-center">
          <h2 className="font-serif text-2xl font-bold text-primary mb-4">Nossa Visão</h2>
          <p className="text-foreground leading-relaxed max-w-2xl mx-auto">
            Queremos ser a ponte entre você e a natureza, tornando acessível e prazerosa a experiência de ter plantas em
            casa. Nosso objetivo é criar uma comunidade de amantes de plantas que compartilham dicas, experiências e o
            amor pela jardinagem urbana.
          </p>
        </div>
      </div>
    </div>
  )
}

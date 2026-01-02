import "./AboutUs.css"

function AboutUs() {
  return (
    <div className="about-us-container">
      <div className="about-page">
        <div className="about-container">
          <div className="about-header">
            <h1 className="about-title">Sobre Nós</h1>
            <p className="about-intro">
              Bem-vindo ao Paradise Nursery, onde a paixão por plantas encontra a qualidade excepcional
            </p>
          </div>

          <div className="about-content">
            <p className="about-paragraph">
              Desde 2020, o Paradise Nursery tem sido o destino preferido para entusiastas de plantas em busca das mais
              belas e saudáveis plantas de interior. Nossa missão é trazer a natureza para dentro de casa, oferecendo
              uma seleção cuidadosamente curada de plantas que não apenas embelezam seu espaço, mas também melhoram sua
              qualidade de vida.
            </p>

            <p className="about-paragraph">
              Cada planta em nossa coleção é cultivada com dedicação e expertise, garantindo que você receba apenas o
              melhor. Nossos especialistas em horticultura trabalham incansavelmente para manter os mais altos padrões
              de qualidade, desde a seleção de sementes até o cuidado diário de cada planta.
            </p>

            <p className="about-paragraph">
              Acreditamos que ter plantas em casa não é apenas sobre decoração - é sobre criar um ambiente mais
              saudável, tranquilo e conectado com a natureza. Por isso, oferecemos não apenas plantas excepcionais, mas
              também todo o suporte necessário para que você tenha sucesso em sua jornada de jardinagem.
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🌱</div>
              <h3 className="feature-title">Qualidade Premium</h3>
              <p className="feature-description">
                Todas as nossas plantas são cultivadas em condições ideais e passam por rigoroso controle de qualidade
                antes de chegarem até você.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">❤️</div>
              <h3 className="feature-title">Paixão pela Natureza</h3>
              <p className="feature-description">
                Nossa equipe é formada por especialistas apaixonados que estão sempre prontos para ajudar você a
                escolher e cuidar de suas plantas.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🚚</div>
              <h3 className="feature-title">Entrega Segura</h3>
              <p className="feature-description">
                Utilizamos embalagens especiais e métodos de transporte cuidadosos para garantir que suas plantas
                cheguem em perfeitas condições.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🏆</div>
              <h3 className="feature-title">Garantia de Satisfação</h3>
              <p className="feature-description">
                Sua satisfação é nossa prioridade. Oferecemos garantia em todas as nossas plantas e suporte contínuo
                para seus cuidados.
              </p>
            </div>
          </div>

          <div className="vision-section">
            <h2 className="vision-title">Nossa Visão</h2>
            <p className="vision-text">
              Queremos ser a ponte entre você e a natureza, tornando acessível e prazerosa a experiência de ter plantas
              em casa. Nosso objetivo é criar uma comunidade de amantes de plantas que compartilham dicas, experiências
              e o amor pela jardinagem urbana.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs

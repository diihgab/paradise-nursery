# Paradise Nursery - Shopping Cart Application

## Nome do Projeto
**Paradise Nursery - Aplicativo de Carrinho de Compras para Loja de Plantas Online**

## Descrição
Paradise Nursery é uma aplicação web de e-commerce desenvolvida com Next.js 16 e React, permitindo aos usuários navegar, selecionar e comprar plantas de interior. O projeto implementa um carrinho de compras completo com gerenciamento de estado usando Redux Toolkit.

## Tecnologias Utilizadas
- **Next.js 16** - Framework React com App Router
- **React 19.2** - Biblioteca JavaScript para interfaces de usuário
- **Redux Toolkit** - Gerenciamento de estado global
- **TypeScript** - Tipagem estática para JavaScript
- **Tailwind CSS v4** - Framework CSS utility-first
- **shadcn/ui** - Componentes de UI reutilizáveis
- **Lucide React** - Ícones modernos

## Funcionalidades Principais

### 1. Página Inicial (App.jsx)
- Imagem de fundo atraente representando um viveiro de plantas
- Nome da empresa em destaque
- Botão "Começar" que redireciona para a página de produtos
- Design responsivo e moderno

### 2. Página de Listagem de Produtos (ProductList.jsx)
- Exibição de **18 plantas únicas** organizadas em **3 categorias**:
  - Plantas de Interior (6 plantas)
  - Suculentas (6 plantas)
  - Plantas Aromáticas (6 plantas)
- Cada planta exibe:
  - Imagem em miniatura
  - Nome da planta
  - Descrição detalhada
  - Preço
  - Botão "Adicionar ao Carrinho"
- Botão desabilita após adicionar o produto ao carrinho
- Navegação integrada com ícone de carrinho mostrando contagem de itens

### 3. Carrinho de Compras (CartItem.jsx)
- Lista de todos os produtos adicionados
- Para cada item:
  - Imagem em miniatura
  - Nome e preço unitário
  - Controles de quantidade (+ e -)
  - Cálculo do custo total por item
  - Botão de exclusão
- Resumo do pedido:
  - Total de itens
  - Valor total do carrinho
  - Botão "Finalizar Compra - Em Breve"
- Botão "Continuar Comprando" para retornar à listagem
- Estado vazio do carrinho com mensagem amigável

### 4. Redux Store (CartSlice.jsx)
- Gerenciamento completo do estado do carrinho:
  - `addItem`: Adiciona produto ao carrinho
  - `removeItem`: Remove produto do carrinho
  - `increaseQuantity`: Aumenta quantidade de um item
  - `decreaseQuantity`: Diminui quantidade de um item
- Atualização dinâmica do contador do carrinho

### 5. Navegação
- Barra de navegação fixa com links para:
  - Início
  - Plantas
  - Sobre Nós
  - Carrinho (com contador de itens)
- Design consistente em todas as páginas

### 6. Página Sobre Nós (AboutUs.jsx)
- Informações sobre a empresa Paradise Nursery
- História e missão da empresa
- Valores e diferenciais
- Cards informativos sobre qualidade, paixão, entrega e garantia
- Seção de visão da empresa

## Estrutura de Arquivos
```
paradise-nursery/
├── app/
│   ├── about/
│   │   └── page.tsx          # Página Sobre Nós
│   ├── cart/
│   │   └── page.tsx          # Página do Carrinho
│   ├── plants/
│   │   └── page.tsx          # Página de Listagem de Produtos
│   ├── globals.css           # Estilos globais e tema
│   ├── layout.tsx            # Layout principal
│   └── page.tsx              # Página inicial
├── components/
│   ├── AboutUs.jsx           # Componente Sobre Nós
│   ├── CartItem.tsx          # Componente de item do carrinho
│   ├── Navigation.tsx        # Barra de navegação
│   └── ProductList.tsx       # Lista de produtos
├── lib/
│   ├── CartSlice.tsx         # Redux slice do carrinho
│   ├── store.ts              # Configuração da store Redux
│   ├── StoreProvider.tsx     # Provider Redux
│   └── plants-data.ts        # Dados das plantas
├── public/
│   └── [imagens das plantas]
└── README.md                 # Este arquivo
```

## Como Executar o Projeto

### Pré-requisitos
- Node.js 18+ instalado
- npm ou yarn

### Instalação
1. Clone o repositório ou baixe o código
2. Instale as dependências:
```bash
npm install
```

### Executar em Desenvolvimento
```bash
npm run dev
```
Acesse `http://localhost:3000` no navegador

### Build de Produção
```bash
npm run build
npm start
```

## Requisitos Atendidos

### Tarefa 1: README.md ✅
Arquivo README.md completo com detalhes do projeto

### Tarefa 2: AboutUs.jsx ✅
Componente com informações detalhadas sobre a empresa

### Tarefa 3: App.css / globals.css ✅
Estilos com tema personalizado em tons de verde natural

### Tarefa 4: App.jsx / page.tsx ✅
Página inicial com imagem de fundo e botão "Começar"

### Tarefa 5: CartSlice.jsx ✅
Redux slice implementado com todas as funcionalidades do carrinho

### Tarefa 6: ProductList.jsx ✅
- 18 plantas únicas em 3 categorias
- Miniaturas, nomes e preços
- Botão "Adicionar ao Carrinho" que desabilita
- Navegação com ícone de carrinho dinâmico
- Agrupamento por categorias

### Tarefa 7: CartItem.jsx ✅
- Exibição de valor total do carrinho
- Custo total por item
- Miniaturas, nomes e preços unitários
- Botões de aumentar/diminuir quantidade
- Botão de exclusão
- Botão "Finalizar Compra - Em Breve"
- Botão "Continuar Comprando"

## Design e UX
- Paleta de cores naturais com tons de verde
- Tipografia clara e legível
- Interface responsiva para mobile e desktop
- Feedback visual em todas as interações
- Animações suaves de hover e transições

## Autor
Projeto desenvolvido como trabalho final do curso de desenvolvimento web

## Licença
Este projeto é de uso educacional
```

```json file="" isHidden

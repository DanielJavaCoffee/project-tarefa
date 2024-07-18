# React + TypeScript + Vite

# TarefasApp

## Visão Geral

TarefasApp é uma aplicação web desenvolvida com React para ajudar você a gerenciar suas tarefas diárias. Adicione, visualize e organize suas tarefas de maneira simples e eficiente.

## Funcionalidades

- **Adicionar Tarefas:** Crie novas tarefas para organizar seu dia.
- **Visualizar Tarefas:** Veja todas as suas tarefas em uma lista.

## Tecnologias Utilizadas

- **[React](https://reactjs.org/):** Biblioteca JavaScript para construção de interfaces de usuário.
- **[TypeScript](https://www.typescriptlang.org/):** Superconjunto de JavaScript que adiciona tipagem estática ao código.
- **[SCSS](https://sass-lang.com/):** Pré-processador CSS que permite usar variáveis, aninhamento, mixins e mais.
- **[Vite](https://vitejs.dev/):** Ferramenta de construção rápida para projetos web modernos.

## Requisitos

- **[Node.js](https://nodejs.org/)** >= 12.x
- **npm** (ou **yarn**) para gerenciamento de pacotes

## Instalação

1. Clone o repositório:

    ```sh
    git clone https://github.com/seu-usuario/tarefasapp.git
    ```

2. Navegue até o diretório do projeto:

    ```sh
    cd tarefasapp
    ```

3. Instale as dependências:

    ```sh
    npm install
    # ou
    yarn install
    ```

## Uso

1. Inicie o servidor de desenvolvimento:

    ```sh
    npm run dev
    # ou
    yarn dev
    ```

2. Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver a aplicação.

## Estrutura do Projeto

```plaintext
tarefasapp/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   └── Modal/
│   │       ├── Modal.tsx
│   │       └── Modal.scss
│   ├── views/
│   │   ├── Header/
│   │   │   ├── Header.tsx
│   │   │   └── Header.scss
│   │   ├── Body/
│   │   │   ├── Body.tsx
│   │   │   └── Body.scss
│   ├── index.css
│   ├── main.tsx
│   └── ...
├── package.json
└── README.md

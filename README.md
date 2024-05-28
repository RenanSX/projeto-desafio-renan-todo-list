# Projeto Desafio Renan - Todo List Backend e Frontend

## Visão Geral do Projeto

- **Objetivo**: O Projeto Todo List é um projeto que consiste em dois ambientes Frontend e backend que serão responsáveis por Gerenciar tarefas de um usuário, permitindo que um usuário crie, atualize, liste e até complete suas tarefas diárias.
- **Estrutura**: Composto por Backend e Frontend, integrando-se para fornecer uma solução completa.

## Arquitetura e Tecnologias

#### Backend

- **Arquitetura**: Clean Architecture e DDD para modularidade e manutenção eficiente.
- **Tecnologias**: Node.js, TypeScript, Fastify, MySQL, Jest, Docker, Swagger, Winston, entre outros.

#### Frontend

- **Arquitetura**: Simples estrutura de componentes e containeres utilizando redux-saga.
- **Tecnologias**: React, Vite, Redux, Sass entre outros.

## Como Executar

### Docker Compose

1. Certifique-se de ter Docker e Docker Compose.
2. Execute `docker-compose up -d` na raiz do projeto.
3. O frontend vai estar disponivel em `http://localhost:3000` e o backend em `http://localhost:3333`. Isso vai subir tanto o backend quanto o frontend em containers Docker.

Observações:

- Lembre de deixar as portas `3000` e `3333` liberados no seu computador.
- Em caso de conflito nas etapas de instalações de dependências, não se esqueça de limpar as mesmas localmente com `npm run clean` tanto backend quanto frontend.
- O Container do backend só ficará em pé após o container de banco de dados estiver healthy, isso pode levar alguns segundos a mais.

### Makefile

Para facilitar a execução de comandos, utilize o arquivo Makefile disponível na raiz do projeto:

- **Para construir as imagens Docker:**: `make build`
- **Para executar o projetoo**: `make up`
- **Para parar os serviços**: `make down`

### Rodar localmente

## Backend

Execute o seguinte passo a passo

- Acesse a pasta do backend `cd backend`
- Instale as depêndencias `npm install`
- Crie o arquivo env `cp .env.example .env`, cole os valores das variáveis
- Rode o projeto `npm run dev`
- Importe a Collection (Desafio Renan TodoList Backend - Collection.postman_collection.json) do postman que se encontra na pasta [`postman`](./backend/docs/postman/)
- Execute o projeto através da url `http://localhost:3333`

## Frontend

Execute o seguinte passo a passo

- Acesse a pasta do frontend `cd frontend`
- Instale as depêndencias `npm install`
- Crie o arquivo env `cp .env.example .env`, cole os valores das variáveis
- Rode o projeto `npm run dev`
- Execute a página do projeto através da url `http://localhost:3000`

## Documentação

Cada parte do projeto (Backend e Frontend) possui documentação específica detalhando sua configuração, uso e características.

#### Backend

- **Documentação Interativa Swagger**: Acesse em `http://localhost:3333/documentation` após iniciar o projeto.
- **Docsify**: Para uma visão mais detalhada, a documentação completa está disponível em [Docsify backend](./backend/docs/README.md).
  Execute `npm run docs:serve` na raiz do backend para iniciar o servidor de documentação Docsify então basta acessar `http://localhost:7000`.

#### Frontend

- **Docsify**: Para uma visão mais detalhada, a documentação completa está disponível em [Docsify frontend](./frontend/docs/README.md).
  Execute `npm run docs:serve` na raiz do frontend para iniciar o servidor de documentação Docsify então basta acessar `http://localhost:8000`.

## Comandos Comuns

- `npm install`: Instala as dependências do projeto.
- `npm run dev`: Inicializa o projeto em modo de desenvolvimento.
- `npm run test`: Executa todos os testes do projeto.
- `npm run lint`: Aplica linting em todo o projeto.

## Testes

Execeute os comandos de teste em cada projeto, ambos utilizam o Jest, basta acessar a basta de cada projeto `cd /backend` ou `cd /frontend` e rodar `npm run test`

## Contribuição

Contribuições são bem-vindas para melhorar a documentação, adicionar funcionalidades ou corrigir bugs. Crie um pull request ou abra uma issue para colaborar.

## Licença

O projeto é distribuído sob a Licença MIT. Veja [`LICENSE`](https://opensource.org/licenses/MIT) para mais informações.

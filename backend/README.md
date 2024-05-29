# Projeto Desafio Renan - Task List Backend

## Descrição

**desafio-renan-task-list-backend** O backend do "desafio-renan-task-list" é responsável por gerenciar as tarefas de um usuário, permitindo operações como listagem, detalhamento, criação, atualização e remoção de tarefas.

## Stack de tecnologia

- [NodeJS](https://nodejs.org/en)
- [TypeScript](https://www.typescriptlang.org)
- [Fastify](https://www.fastify.io)
- [MySQL](https://www.mysql.com)
- [Sequelize](https://sequelize.org)
- [Jest](https://jestjs.io)
- [ESLint](https://eslint.org)
- [Prettier](https://prettier.io)
- [Lint Staged](https://github.com/okonet/lint-staged#readme)
- [Husky](https://typicode.github.io/husky)
- [Commitlint](https://commitlint.js.org)
- [Winston](https://github.com/winstonjs/winston)
- [Docsify](https://docsify.js.org)
- [Swagger](https://swagger.io)
- [Github Actions](https://docs.github.com/pt/actions)
- [Docker](https://www.docker.com)

## Documentações

**Gerando um Servidor de Documentação com Swagger**
Para visualizar a documentação Swagger:

- Inicie o projeto com `npm run dev` para levantar o servidor localmente.
- Acesse `http://localhost:3333/documentation` no navegador para ver a interface do Swagger com todas as rotas disponíveis.

**Gerando um Servidor de Documentação com Docsify**
Para visualizar a documentação no Docsify:

- Se ainda não inicializou a documentação, execute `npm run docs:init` para preparar a pasta `docs`.
- Em seguida, execute `npm run docs:serve` para levantar um servidor local na porta `7000`.
- Acesse `http://localhost:7000` no navegador, você deverá ver uma interface amigável para navegar entre os documentos README.md do projeto.

## Comandos

Os comandos abaixo serão executados no nível monorepo - nos aplicativos e pacotes onde existe o script npm.

| Comando             | Descrição                                    |
| ------------------- | -------------------------------------------- |
| build               | Gera a versão de produção do projeto         |
| dev                 | Inicializa o projeto em modo desenvolvimento |
| start               | Inicializa o projeto em modo produção        |
| lint                | Aplica lint no projeto inteiro               |
| format              | Aplica prettier no projeto inteiro           |
| test                | Executa os testes do projeto                 |
| clean               | Remove a pasta node_modules,coverage e dist  |
| update-dependencies | Atualiza as dependências do projeto          |
| docs:init           | Inicializa a documentação                    |
| docs:serve          | Inicializa o servidor de documentação        |
| db:create           | Cria o banco de dados                        |
| migration:up        | Cria as migrações do banco de dados          |
| migration:down      | Exclui as migrações do banco de dados        |

## Sobre o projeto:

### Estrutura

- [`data`](./src/data) - Orquestra o fluxo de dados entre o domínio e as interfaces, contendo a lógica de aplicação e casos de uso.
- [`domain`](./src/domain) - O núcleo do sistema, com regras e lógicas de negócio, entidades, e interfaces de repositórios.
- [`infra`](./src/infra) - Implementa detalhes técnicos como bancos de dados e comunicação com serviços externos.
- [`main`](./src/main) - Ponto de entrada da aplicação, responsável pela inicialização e configuração.
- [`presentation`](./src/presentation) - Interage com o usuário ou sistemas externos, tratando de requisições e respostas.

### Arquitetura e padrões

O projeto segue a arquitetura:

- [Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)
- [Domain Driven Design](https://en.wikipedia.org/wiki/Domain-driven_design)
- [S.O.L.I.D](https://en.wikipedia.org/wiki/SOLID)
- [Dependency Injection](https://en.wikipedia.org/wiki/Dependency_injection)

### Documentações

O projeto é documentado usando:

- [Swagger](https://swagger.io/docs/specification/about/)
- [Docsify](https://docsify.js.org/)

## Banco de dados

Primeiro precisamos criar o banco de dados através do comando
`npm run db:create`

Agora vamos criar as migrações
`npm run migration:up`

## Rodando o projeto

- Instale as dependências do projeto executando o comando
  `npm install`
- Para Inicializar o projeto execute o comando
  `npm run dev`
- Para executar os testes, execute o comando
  `npm run test`
- Para aplicar lint no projeto, execute o comando
  `npm run lint`

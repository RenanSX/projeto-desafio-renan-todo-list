# Projeto Desafio Renan - Task List Frontend

## Descrição

**desafio-renan-task-list-front** O front do "desafio-renan-task-list" é responsável por gerenciar as tarefas de um usuário, permitindo operações como listagem, detalhamento, criação, atualização e remoção de tarefas.

## 🍂 Pilha de tecnologia

- [TypeScript](https://www.typescriptlang.org)
- [React](https://reactjs.org)
- [Redux Toolkit](https://redux-toolkit.js.org)
- [Redux Saga](https://redux-saga.js.org/)
- [Axios](https://axios-http.com/ptbr/docs/intro)
- [Sass](https://sass-lang.com/)
- [Jest](https://jestjs.io)
- [ESLint](https://eslint.org)
- [Prettier](https://prettier.io)
- [Lint Staged](https://github.com/okonet/lint-staged#readme)
- [Husky](https://typicode.github.io/husky)
- [Commitlint](https://commitlint.js.org)
- [Comitizen](https://commitizen-tools.github.io/commitizen)
- [Vite](https://vitejs.dev)
- [Docsify](https://docsify.js.org)
- [Github Actions](https://docs.github.com/pt/actions)
- [Docker](https://www.docker.com)

## Documentações

**Gerando um Servidor de Documentação com Docsify**
Para visualizar a documentação no Docsify:

- Se ainda não inicializou a documentação, execute `npm run docs:init` para preparar a pasta `docs`.
- Em seguida, execute `npm run docs:serve` para levantar um servidor local na porta `7000`.
- Acesse `http://localhost:7000` no navegador, você deverá ver uma interface amigável para navegar entre os documentos README.md do projeto.

## 🎯 Comandos

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

## Sobre o projeto:

### Estrutura

- [`components`](./src/components) - Agrupa os componentes da aplicação.
- [`containers`](./src/containers) - Agrupa conteiners no codigo afim de aumentar eficiência, escalabilidade e modularidade.
- [`services`](./src/services) - Agrupa serviços para comunicação com APIs externas e outras operações de IO.
- [`store`](./src/store) - Configura e gerencia o estado global com Redux Toolkit, facilitando o gerenciamento de estado em lugares mais complexos.

### Documentações

O projeto é documentado usando:

- [Docsify](https://docsify.js.org/)

## Rodando o projeto

- Instale as dependências do projeto executando o comando
  `npm install`
- Para Inicializar o projeto execute o comando
  `npm run dev`
- Para executar os testes, execute o comando
  `npm run test`
- Para aplicar lint no projeto, execute o comando
  `npm run lint`

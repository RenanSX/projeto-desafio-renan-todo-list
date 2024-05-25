# Bibliotecas do Backend do Todo List

## Visão Geral

Este documento detalha as bibliotecas que escolhi para o backend do Todo List, com foco em otimizar o desempenho, a segurança e a eficiência do desenvolvimento. Abaixo estão detalhes sobre cada pacote, suas funções e as razões por trás da minha escolha.

### Fastify

**Função:** Framework para criar servidores HTTP no Node.js de maneira eficiente e rápida.

**Por Que Escolhi:**
Optei pelo Fastify por sua velocidade e baixa sobrecarga, além do suporte a plugins e uma arquitetura altamente modular. Ele proporciona um ecossistema rico para construir aplicações web e APIs rapidamente, mantendo a flexibilidade para extensões e personalizações. Sua capacidade de lidar com a serialização JSON de maneira otimizada e o sistema de roteamento eficiente são vantagens claras para o desempenho do aplicativo.

### Sequelize (Mysql)

**Função:** Foi utilizado nesse projeto o ORM Sequelize

**Por Que Escolhi:**
O Sequelize junto ao drivce mysql2 para Node é uma excelente escolha pois é utilizado em diversos projeto,s já é bem famoso no mercado, simples implementação, documentação robusta e fácil pesquisa na internet para tirar dúvidas.

### Winston

**Função:** Biblioteca de logging para Node.js.

**Por Que Escolhi:**
Escolhi Winston por sua flexibilidade e suporte a múltiplos transports de log, permitindo a criação de logs no console, arquivos ou serviços remotos. A capacidade de criar logs estruturados e personalizados facilita muito o monitoramento e análise do comportamento do aplicativo, sendo crucial para a manutenção e diagnóstico de problemas.

### Outros Pacotes e Bibliotecas

**Swagger-UI (com Fastify-Swagger):**

**Função:** Interface de usuário para visualizar e interagir com a documentação da API Swagger.

**Por Que Escolhi:**
Integrando Swagger-UI através do plugin Fastify-Swagger, consegui proporcionar uma documentação interativa da API. Isso facilita o entendimento e a utilização da API.

## Conclusão

A escolha de cada uma dessas bibliotecas foi feita com o intuito de montar um backend eficiente, seguro e fácil de manter para o Todo List.

# Perguntas sobre Node.js e Desenvolvimento Web

## O que é Node.js e qual é sua principal vantagem em relação a outras plataformas de desenvolvimento?

Resposta:

Node.js é um ambiente de execução JavaScript baseado no motor V8 do Chrome para desenvolver aplicativos do lado do servidor.
Sua principal vantagem é a capacidade de lidar com operações de Entrada e Saída de dados de maneira não bloqueante,
permitindo alta eficiência e escalabilidade em aplicações com muitas conexões simultâneas.

## Explique o que é o Fastify e como ele é usado em aplicações Node.js.

Resposta:

Fastify é um framework web para Node.js focado em desempenho e eficiência.
Ele é usado para construir servidores e APIs rápidos e leves, fornece validação baseada em esquema,
Sistema modular de plugins, suporte assíncrono/aguardado completo,
e sobrecarga mínima, facilitando o desenvolvimento de aplicativos escalonáveis ​​e de alto desempenho.

## Qual é a diferença entre os métodos HTTP GET e POST e quando cada um deve ser usado?

Resposta:

Diferença entre GET e POST:

O método GET é usado para recuperar dados do servidor, pode ser armazenado em cache e tem um limite no tamanho dos dados que podem ser enviados, limitado pelo comprimento da URL.
O método POST é usado para enviar dados ao servidor para criar ou atualizar recursos. Ele envia dados no corpo da solicitação, não pode ser armazenado em cache e não tem limite definido para o tamanho dos dados que podem ser enviados.

Quando usar cada:

O método GET deve ser usado quando você deseja recuperar dados do servidor sem efeitos colaterais. Funciona quando a solicitação é armazenável em cache, registrada no histórico do navegador, e quando a quantidade de dados a serem enviados é pequena e pode ser incluída na URL.
Os dados que criam ou atualizam recursos no servidor devem ser enviados usando o método POST. É apropriado quando os dados são sensíveis e não devem ser expostos na URL, ou quando a quantidade de dados a serem enviados é grande ou complexa.

## Quais são algumas das melhores práticas de segurança para desenvolvimento de aplicações web?

Resposta:

Algumas das principais práticas de segurança que considero importantes para aplicações web são:

- Autenticar e autorizar usuários: sempre autentique e autorize os usuários antes de permitir que eles acessem recursos protegidos.
- Validação de entrada de dados: sempre valide os dados de entrada para evitar ataques de injeção de código, como injeção de SQL e XSS.
- Use HTTPS: Sempre use HTTPS para proteger as comunicações entre cliente e servidor.
- Implementar cabeçalhos de segurança: sempre implemente cabeçalhos de segurança como Content-Security-Policy, X-Content-Type-Options, X-Frame-Options, etc.
- Cuidado ao instalar libs: Sempre ter cuidado ao instalar biblioteca de fontes externas, para evitar vulnerabilidades
- Utilizar proxy: Utilizar um proxy reverso para proteger o servidor de ataques diretos e para adicionar uma camada extra de segurança.
- Implementar rate limit: Implementar limites de taxa para proteger contra ataques de negação de serviço (DDoS).
- CORS: Configurar o CORS para permitir apenas origens confiáveis.
- Cuidado com logs: Sempre ter cuidado com o que é logado, para evitar vazamento de informações sensíveis, principalmente nos catchs de erros.

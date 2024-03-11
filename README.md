<div align="center">

# Next.js
</div>

### 1. Next.js vs React
**React(Vite/CRA):**
* Executa no navegador (client)
* Serve páginas que são populadas pelo JavaScript
* Pode impactar negativamente o SEO
* Depende de plugins (react-router)
* Deploy pode ser feito em qualquer hospedagem

**Next.js:**
* Executa no navegador (client) e no servidor (server)
* Serve páginas já renderizadas no servidor (SSR)
* Pode melhorar o SEO e o carregamento inicial
* Tenta ser uma solução completa (rotas, API, etc)
* É um framework, logo te dá mais regras
* Deploy deve ser feito em um servidor Node.js (ex: Vercel)
* Bugs, mudanças e atualizações

Fetch React 18 (Vite/CRA):

![alt text](readme-images/fetchReact.png)

Fetch Next.js 14:

![alt text](readme-images/fetchNext.png)
_No Next, o componente de RTeact pode ser assíncrono, com isso, pode-se utilizar diretamente o await_

#### 1.1. Renderizações:

No _Next.js_, a renderização pode ocorrer no lado do servidor (Server Side Rendering - SSR), onde o HTML é gerado no servidor e enviado para o cliente, resultando em tempos de carregamento mais rápidos e melhorando o SEO. Além disso, o Next.js oferece suporte para geração estática (Static Site Generation - SSG) e pré-renderização no momento da construção (build time), o que permite que páginas sejam geradas antecipadamente e armazenadas em cache, reduzindo a necessidade de gerar a página a cada requisição.

Por outro lado, no _React_ puro, geralmente é adotada a renderização no lado do cliente (Client Side Rendering - CSR) por padrão. Nesse caso, o JavaScript é executado no navegador do cliente, e as mudanças de estado são aplicadas diretamente no DOM. Embora isso não exija uma requisição ao servidor para renderizar a página inicialmente, interações posteriores podem exigir comunicação com o servidor para buscar ou enviar dados. Essa abordagem pode resultar em uma experiência mais interativa para o usuário, mas pode ter um impacto inicial no tempo de carregamento da página, especialmente em aplicações grandes.

### 2. App Router
**Arquivos = Rotas**

No Next.js, cada arquivo _page.tsx_ dentro da pasta app é uma rota. O arquivo _app/page.tsx_ é a rota _/_ e o arquivo _app/sobre/page.tsx_ é a rota _/sobre_.

#### 2.1. layout.tsx
O arquivo _layout.tsx_ é o layout padrão de todas as páginas. Ele é importado automaticamente pelo Next.js e pode ser usado para adicionar elementos que se repetem em todas as páginas, como a navegação.

Na raiz ele é necessário para adicionar o html e o body. Porém nas demais rotas ele é opcional.

#### 2.1.1 metadata
Exportar um objeto const metadata, irá adicionar as meta tags na página. Pode ser exportado de qualquer arquivo de rota, como page.tsx ou layout.tsx.

![alt text](readme-images/layout.png)

#### 2.2. App Router e Pages Router
Existe também um sistema de rotas chamado Pages Router, que era o padrão do Next.js antes da versão 13. Hoje em dia é recomendado usar o **App Router**.

### 3. Componentes
Componentes podem ser criados e importados da mesma forma que usamos no React. No next podemos utilizar o _@_ como atalho para a pasta _src_.
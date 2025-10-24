---
title: 'A variável __RUNTIME__.route.queryString é armazenada em cache em diferentes sessões de usuário'
slug: a-variavel-runtimeroutequerystring-e-armazenada-em-cache-em-diferentes-sessoes-de-usuario
status: PUBLISHED
createdAt: 2025-08-13T14:36:03.973Z
updatedAt: 2025-08-13T14:36:03.973Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: variable-runtimeroutequerystring-is-cached-across-different-user-sessions
locale: pt
kiStatus: Backlog
internalReference: 1275673
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


O servidor armazena em cache os parâmetros da string de consulta do objeto __RUNTIME__.route.queryString em diferentes sessões de usuário. Isso pode fazer com que a sessão de um usuário herde incorretamente os dados da string de consulta da sessão de um usuário anterior.
## Simulação


Esse comportamento pode ser reproduzido em aplicativos que leem parâmetros de string de consulta da variável `__RUNTIME__`.

1. Acesse uma página da loja com uma string de consulta específica na máquina A. Por exemplo: `https://www.examplestore.com/sale?targeting=affiliate_A`
2. O aplicativo executado na página lê o parâmetro `targeting` de `__RUNTIME__.route.queryString` e identifica corretamente `affiliate_A`.
3. Em uma máquina B completamente diferente (e em uma sessão nova e limpa), acesse a página da loja _mesma_, mas **sem** a string de consulta. Por exemplo: `https://www.examplestore.com/sale`
4. O aplicativo no computador B lê o parâmetro `targeting` de `__RUNTIME__.route.queryString`.
5. **Comportamento esperado: O objeto `__RUNTIME__.route.queryString` deve estar vazio ou não conter o parâmetro `targeting`, pois ele não estava presente no URL dessa sessão.
6. **Comportamento real: Devido ao armazenamento em cache no lado do servidor, o objeto `__RUNTIME__.route.queryString` ainda contém `targeting=affiliate_A` da sessão da máquina A. O aplicativo atribui incorretamente a sessão na máquina B a `affiliate_A`
## Workaround



Não use o objeto `__RUNTIME__.route.queryString` para ler parâmetros dinâmicos de string de consulta que devem variar entre usuários ou sessões (como afiliado, campanha ou identificadores de usuário). Essa variável está sujeita ao armazenamento em cache da página no lado do servidor e não é específica da sessão.
A abordagem correta e recomendada é ler os parâmetros diretamente do URL.

- Para componentes do lado do cliente (React):** Use APIs do navegador como `window.location.search` para obter a string de consulta do URL atual e analisá-la.
- Para renderização no lado do servidor (Node.js):** Acesse a string de consulta do contexto da solicitação (por exemplo, `ctx.query`) em vez do objeto `__RUNTIME__`.
Isso garante que os dados sejam sempre específicos da solicitação atual do usuário e não sejam afetados pelo cache de uma sessão anterior.



%0A
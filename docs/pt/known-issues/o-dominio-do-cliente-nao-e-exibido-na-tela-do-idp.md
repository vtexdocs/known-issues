---
title: O domínio do cliente não é exibido na tela do IdP
slug: o-dominio-do-cliente-nao-e-exibido-na-tela-do-idp
status: PUBLISHED
createdAt: 
updatedAt: 
contentType: knownIssue
productTeam: Identity
author: 2mXZkbi0oi061KicTExNjo
tag: Identity
slugEN: customer-domain-not-displayed-on-the-idp-screen
locale: pt
kiStatus: Backlog
internalReference: 1250421
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Na autenticação OAuth, o usuário é redirecionado para um URL pelo IdP após o login. Alguns provedores mostram o domínio desse URL na página de login e, às vezes, os clientes preferem exibir seu próprio domínio nessa página (especialmente a mensagem do Google "to continue to {domain}"). Se o domínio tiver um caminho de raiz, como "domain.com/pt", por exemplo, como esse caminho de raiz é diferente de `/`, o domínio do cliente não será exibido, mas sim um domínio da VTEX, como vtexcommercestable.com.br, por exemplo.
## Simulação


Veja a seguir as etapas para simular o problema:

- Escolha uma conta com um caminho de raiz de domínio diferente de `/` (`/en`, `/es`, `/pt` são bons exemplos);
- Defina o atributo `usesOwnDomain` como true para a conta;
- O domínio precisa ser incluído nos URIs confiáveis do provedor;
- Acesse a loja on-line e escolha fazer login com esse provedor (Google, por exemplo); você verá que o domínio não será exibido na página de login do provedor.


## Workaround


Não há nenhuma solução alternativa disponível.




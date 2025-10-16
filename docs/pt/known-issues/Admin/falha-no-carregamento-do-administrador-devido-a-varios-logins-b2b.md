---
title: Falha no carregamento do administrador devido a vários logins B2B
slug: falha-no-carregamento-do-administrador-devido-a-varios-logins-b2b
status: PUBLISHED
createdAt: 2025-10-16T20:51:36.273Z
updatedAt: 2025-10-16T20:51:36.273Z
contentType: knownIssue
productTeam: Admin
author: 2mXZkbi0oi061KicTExNjo
tag: Admin
slugEN: admin-loading-failure-due-to-multiple-b2b-logins
locale: pt
kiStatus: Backlog
internalReference: 1221787
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário



Esse problema ocorre em contas configuradas para fluxo B2B, quando o mesmo usuário acessa a loja virtual e o administrador usando endereços de e-mail diferentes (ou até os mesmos, em sessões diferentes).
Como ambas as interfaces compartilham o mesmo domínio base (`*.myvtex.com`), os cookies de autenticação salvos pelo navegador - especialmente o `VtexIdClientAutCookie` - entram em conflito.
Durante o carregamento de algumas telas de administração, como o módulo Orders (Pedidos), o sistema usa tokens de sessão com base nesses cookies para validar as permissões. Quando vários logins estão ativos no mesmo domínio, o token pode não corresponder à sessão esperada, resultando em um erro 500 nas chamadas de interface.
Esse cenário é comum, por exemplo, quando um usuário B2B faz login na loja com um e-mail pessoal e simultaneamente acessa o administrador com um e-mail corporativo, a sobreposição de cookies causa falhas de autenticação e bloqueia o carregamento de partes da interface do usuário.
## Simulação




- Acesse a loja on-line fazendo login com o e-mail `xxxx@example.com`,


- em outra guia, acesse o administrador fazendo login com um e-mail diferente, como `xxxx@othereExample.com`


- Navegue até o módulo Orders no painel de administração.

- Observe que o carregamento de pedidos pode falhar, resultando no erro 500 devido a um conflito de cookie de sessão.
## Workaround



Para corrigir isso, faça logout dos dois ambientes (webstore e admin) e faça login novamente usando o mesmo endereço de e-mail em ambos. Isso garante que os cookies sejam sincronizados corretamente, eliminando o conflito.




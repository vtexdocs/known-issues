---
title: 'Loop infinito de login ao abrir um link privado do GraphiQL no terminal'
slug: loop-infinito-de-login-ao-abrir-um-link-privado-do-graphiql-no-terminal
status: PUBLISHED
createdAt: 2026-06-09T22:02:59.000Z
updatedAt: 2026-06-09T22:02:59.000Z
contentType: knownIssue
productTeam: Apps
author: 2mXZkbi0oi061KicTExNjo
tag: Apps
slugEN: infinite-login-loop-when-opening-private-graphiql-link-from-terminal
locale: pt
kiStatus: Backlog
internalReference: 1418910
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Os desenvolvedores não conseguem abrir o IDE GraphiQL privado gerado pelo link vtex nos espaços de trabalho de desenvolvimento do VTEX IO. Em vez de carregar o IDE, o navegador entra em um loop infinito de login com o VTEX ID e nunca conclui a autenticação. Isso afeta as rotas GraphiQL privadas para aplicativos vinculados em várias contas/espaços de trabalho usados pelos desenvolvedores para testar consultas.

## Simulação

1) Vincule um aplicativo GraphQL a um espaço de trabalho de desenvolvimento (por exemplo, vendor-invite-graphql ou instore-chk-graphql).
2) Abra a URL privada do GraphiQL a partir da saída do terminal.
3) Observe que a página redireciona para o endpoint de login (/_v/auth-server/v1/login?ReturnUrl=...) e, após o login (por exemplo, com o Google), retorna a uma página que solicita o login novamente, resultando em um loop infinito.

## Workaround

Use o Admin GraphQL IDE para o aplicativo vinculado em vez da rota privada do GraphiQL.
Acesse a URL do Admin GraphQL IDE e selecione seu aplicativo vinculado no menu suspenso.
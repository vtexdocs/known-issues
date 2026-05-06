---
title: 'A interface do usuário fica travada se ocorrer um erro no processo interno de realização do pedido'
slug: a-interface-do-usuario-fica-travada-se-ocorrer-um-erro-no-processo-interno-de-realizacao-do-pedido
status: PUBLISHED
createdAt: 2023-11-28T18:55:39.000Z
updatedAt: 2023-11-28T18:55:39.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: ui-gets-frozen-if-an-error-occurs-in-the-place-order-internal-process
locale: pt
kiStatus: Backlog
internalReference: 943771
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Quando ocorre um erro durante o processo interno de realização do pedido, a interface do usuário fica travada na tela de carregamento, sem exibir nenhuma mensagem de erro ou aviso.

## Simulação

Esse comportamento foi observado quando o Serviço Fiscal expira durante a solicitação de realização do pedido, mas não se limita a essa situação.

## Workaround

Atualize a página.
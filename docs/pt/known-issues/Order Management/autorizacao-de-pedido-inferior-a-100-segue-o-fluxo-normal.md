---
title: 'Autorização de pedido inferior a 100 segue o fluxo normal.'
slug: autorizacao-de-pedido-inferior-a-100-segue-o-fluxo-normal
status: PUBLISHED
createdAt: 2024-02-16T16:43:49.000Z
updatedAt: 2026-09-14T22:48:29.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: order-authorization-lessthan-100-goes-with-the-flow
locale: pt
kiStatus: Fixed
internalReference: 983031
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Identificamos que, quando o sistema de Autorização de Pedido (OrderAuth) é configurado com o valor "lessThan: 100" em "Rules-list.CreateDoEffect", ele não consegue entender que o desconto é menor ou igual a 100%, apenas que é menor que 100%. Quando o pedido tem um desconto de 100%, o sistema autoriza o pedido a seguir o fluxo normal.

## Simulação

Para simular, é necessário configurar a autenticação de pedidos (orderAuth):
Acesso: https://.myvtex.com/admin/order-auth
Configurar divergência de preço > inserir os seguintes valores na regra:
Rules-list.denyEffect: 0 a 60%

Rules-list.CreateDoEffect: 61 a 100%

Ao configurar a regra "Rules-list.CreateDoEffect" para 100%, o sistema não reconhece que o valor é menor ou igual a 100%, apenas que é menor. Portanto, ele autoriza a solicitação a seguir o fluxo normal quando o valor for igual a 100%.

## Workaround

N/A.
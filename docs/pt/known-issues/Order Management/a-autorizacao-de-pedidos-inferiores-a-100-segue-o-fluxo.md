---
title: 'A autorização de pedidos inferiores a 100 segue o fluxo'
slug: a-autorizacao-de-pedidos-inferiores-a-100-segue-o-fluxo
status: PUBLISHED
createdAt: 2024-02-16T13:43:49.000Z
updatedAt: 2024-02-16T13:43:48.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: order-authorization-lessthan-100-goes-with-the-flow
locale: pt
kiStatus: Backlog
internalReference: 983031
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Identificamos que, quando o sistema de autorização de pedidos (OrderAuth) é configurado com o valor "lessThan: 100" na regra "Rules-list.CreateDoEffect", ele não consegue interpretar que o valor é menor ou igual a 100%, mas apenas que é menor que 100%. Assim, quando o pedido tem um desconto de 100%, o sistema autoriza o pedido a seguir o fluxo normal.

## Simulação

Para simular, é necessário configurar o orderAuth:
Acesso: https://.myvtex.com/admin/order-auth
Configurar divergência de preço > inserir os seguintes valores na regra:
Rules-list.denyEffect :0 a 60%

Rules-list.CreateDoEffect: 61 a 100%

Ao configurar a regra "Rules-list.CreateDoEffect" para 100%, o sistema não consegue interpretar que o valor é menor ou igual, apenas que é menor; portanto, autoriza a solicitação a seguir o fluxo normal quando o valor é igual a 100%.

## Workaround

N/A.
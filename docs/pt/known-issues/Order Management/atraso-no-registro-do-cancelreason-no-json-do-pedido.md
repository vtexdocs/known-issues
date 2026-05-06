---
title: 'Atraso no registro do CancelReason no JSON do pedido'
slug: atraso-no-registro-do-cancelreason-no-json-do-pedido
status: PUBLISHED
createdAt: 2023-04-18T17:20:09.000Z
updatedAt: 2023-04-18T17:27:21.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: delay-to-register-cancelreason-in-the-order-json
locale: pt
kiStatus: Backlog
internalReference: 792650
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Devido à forma como o fluxo de atualização do pedido é executado a partir de qualquer status até o status “cancelado”, é possível que o sistema de pedidos demore algum tempo para registrar o `CancelReason` no JSON do pedido, causando uma breve inconsistência caso o JSON seja consultado ou utilizado alguns segundos após a ação de cancelamento;

Um exemplo prático é o uso desse campo no modelo `vtexcommerce-order-cancelled`, pois, como o processo de salvamento pode demorar um pouco, é possível que o envio do e-mail não entregue esses dados ao usuário final, já que o envio do e-mail é assíncrono em relação ao fluxo de cancelamento;

## Simulação

Não é possível simular isso.
Mas isso pode ser observado na linha do tempo de um pedido cancelado, uma vez que a propriedade `cancellationReason` é usada no modelo da loja.

## Workaround

Caso a falha afete o processo de obtenção do pedido, recomendamos que seja feita uma nova obtenção;
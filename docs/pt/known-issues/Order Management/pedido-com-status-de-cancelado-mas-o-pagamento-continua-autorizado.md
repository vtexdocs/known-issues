---
title: 'Pedido com status de cancelado, mas o pagamento continua autorizado'
slug: pedido-com-status-de-cancelado-mas-o-pagamento-continua-autorizado
status: PUBLISHED
createdAt: 2021-08-26T15:39:43.000Z
updatedAt: 2024-06-28T17:45:42.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: order-with-status-of-canceled-but-the-payment-remains-authorized
locale: pt
kiStatus: Fixed
internalReference: 420019
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Em alguns casos em que o pedido fica incompleto ou é cancelado devido a uma falha de comunicação com o Gateway, o pagamento permanece autorizado e/ou aprovado, não entrando no fluxo de cancelamento, e o valor pago não é reembolsado automaticamente. Além disso, e-mails transacionais podem ser enviados acidentalmente, o que também permite o pagamento de boletos bancários, já que o URL será incluído neles.

## Simulação

Não há como simular. Mas temos alguns casos em que isso já aconteceu anteriormente.

## Workaround

N/A
---
title: 'Impossibilidade de realizar cancelamento parcial com o MercadoPagoV1'
slug: impossibilidade-de-realizar-cancelamento-parcial-com-o-mercadopagov1
status: PUBLISHED
createdAt: 2020-09-11T15:36:02.000Z
updatedAt: 2026-06-05T20:52:09.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: inability-to-make-partial-cancellation-with-mercadopagov1
locale: pt
kiStatus: No Fix
internalReference: 286738
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Quando é realizado um cancelamento parcial em um pagamento com cartão de débito, o gateway não enviou uma solicitação ao Mercado Pago e, consequentemente, a solicitação de captura não é feita, pois o status indicava que o pagamento já havia sido capturado, o que significa que o dinheiro do cliente não é reembolsado

## Simulação

1. Faça uma compra com cartão de débito usando o conector MercadoPagoV1.
2. Faça um cancelamento parcial

## Workaround

Não há solução alternativa, trata-se de uma limitação do sistema.
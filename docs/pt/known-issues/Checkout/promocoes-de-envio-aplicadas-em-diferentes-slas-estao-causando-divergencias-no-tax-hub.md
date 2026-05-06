---
title: 'Promoções de envio aplicadas em diferentes SLAs estão causando divergências no Tax Hub'
slug: promocoes-de-envio-aplicadas-em-diferentes-slas-estao-causando-divergencias-no-tax-hub
status: PUBLISHED
createdAt: 2023-10-09T13:41:50.000Z
updatedAt: 2023-10-23T11:58:56.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: shipping-promotions-applying-in-different-slas-causing-divergence-in-tax-hub
locale: pt
kiStatus: Fixed
internalReference: 916423
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Quando promoções de frete se aplicam a diferentes SLAs e uma delas é frete grátis, isso causa uma discrepância na solicitação enviada pelo Tax Hub, impedindo que o pedido seja realizado.

## Simulação

- Crie uma promoção de frete grátis para um SLA específico;
- Crie qualquer outra promoção de frete para outro SLA;
- Tente fazer um pedido; a mensagem “Não foi possível criar o pedido solicitado. Tente novamente” será exibida.

## Workaround

N/A
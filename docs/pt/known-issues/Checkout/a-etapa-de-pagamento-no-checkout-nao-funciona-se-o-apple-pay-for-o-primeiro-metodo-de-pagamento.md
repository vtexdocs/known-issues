---
title: 'A etapa de pagamento no checkout não funciona se o Apple Pay for o primeiro método de pagamento.'
slug: a-etapa-de-pagamento-no-checkout-nao-funciona-se-o-apple-pay-for-o-primeiro-metodo-de-pagamento
status: PUBLISHED
createdAt: 2022-11-24T21:50:52.000Z
updatedAt: 2026-11-09T20:56:55.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: checkout-payment-step-doesnt-work-if-apple-pay-is-the-first-payment-method
locale: pt
kiStatus: Backlog
internalReference: 704699
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Quando o método de pagamento Apple Pay é retornado como o primeiro na lista de gateways e o usuário está finalizando uma compra em um navegador diferente do Safari, ao chegar à página de pagamento, ocorre um loop e o usuário não consegue concluir a compra devido ao carregamento infinito.

## Simulação

Se você estiver fazendo uma compra em um navegador diferente do Safari, e o Apple Pay for o primeiro método de pagamento na lista retornada pelo gateway, ao chegar à página de pagamento, a página ficará travada em um estado de carregamento.

## Workaround

Desative e reative este método de pagamento para que ele possa ir para o final da lista.
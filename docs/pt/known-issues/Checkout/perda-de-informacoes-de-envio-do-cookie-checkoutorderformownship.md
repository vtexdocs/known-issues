---
title: 'Perda de informações de envio do cookie CheckoutOrderFormOwnship'
slug: perda-de-informacoes-de-envio-do-cookie-checkoutorderformownship
status: PUBLISHED
createdAt: 2026-08-25T23:44:17.000Z
updatedAt: 2026-08-25T23:44:17.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: checkoutorderformownership-cookie-shipping-information-loss
locale: pt
kiStatus: Backlog
internalReference: 1452215
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Em alguns casos, ao avançar da etapa de "envio" para a etapa de "pagamento" no checkout, o cookie `CheckoutOrderFormOwnership` perde as informações de endereço, resultando no mascaramento dos dados de envio.

## Simulação

A simulação neste caso não é totalmente simples, o problema pode ou não ocorrer.

- Em uma loja com a validação do cookie `CheckoutOrderFormOwnership` ativa;

- Preencha as informações de envio e prossiga para a etapa de pagamento;

- Os dados de envio/endereço serão mascarados.

## Workaround

N/A. Entre em contato com o Suporte ao Produto solicitando a desativação e informe em qual dos casos o problema se aplica.
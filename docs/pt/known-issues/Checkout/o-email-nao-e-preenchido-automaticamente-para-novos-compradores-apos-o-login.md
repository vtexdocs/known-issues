---
title: 'O e-mail não é preenchido automaticamente para novos compradores após o login'
slug: o-email-nao-e-preenchido-automaticamente-para-novos-compradores-apos-o-login
status: PUBLISHED
createdAt: 2023-10-17T16:22:04.000Z
updatedAt: 2023-11-03T17:16:54.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: email-not-autofilling-for-new-buyers-after-logging-in
locale: pt
kiStatus: Fixed
internalReference: 920634
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Quando um novo comprador faz login e prossegue para o checkout, o campo de e-mail não é preenchido automaticamente, exigindo que o cliente digite novamente seu endereço de e-mail. Isso também ocorre ao usar APIs e ao enviar cabeçalhos com os cookies do comprador.

## Simulação

- Faça login com um e-mail nunca usado antes na loja;
- Adicione produtos ao carrinho;
- Vá para o checkout;
- O e-mail não será preenchido e deverá ser digitado novamente.

## Workaround

N/A
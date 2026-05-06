---
title: 'Mensagem de erro incorreta na API de realização de pedidos quando a solicitação de carga útil é inválida'
slug: mensagem-de-erro-incorreta-na-api-de-realizacao-de-pedidos-quando-a-solicitacao-de-carga-util-e-invalida
status: PUBLISHED
createdAt: 2022-12-01T22:22:32.000Z
updatedAt: 2022-12-01T22:22:40.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: wrong-error-message-for-place-order-api-when-the-payload-request-is-invalid
locale: pt
kiStatus: Backlog
internalReference: 709180
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Solicitações inválidas à API "place order" retornam uma mensagem de erro incorreta, informando "ID inválido para o item" em vez de indicar qual informação está incorreta.

## Simulação

Um cenário conhecido é quando a propriedade “installments” não é enviada dentro da seção “paymentData.payments[]”.

## Workaround

Corrigir a solicitação de payload é suficiente para evitar o problema.
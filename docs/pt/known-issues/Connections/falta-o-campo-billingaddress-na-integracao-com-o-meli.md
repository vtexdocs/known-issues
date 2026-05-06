---
title: 'Falta o campo BillingAddress na integração com o MELI'
slug: falta-o-campo-billingaddress-na-integracao-com-o-meli
status: PUBLISHED
createdAt: 2023-03-15T13:06:28.000Z
updatedAt: 2023-03-15T13:06:28.000Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: meli-integration-missing-billingaddress
locale: pt
kiStatus: Backlog
internalReference: 771418
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Atualmente, em nossa integração nativa com o Mercado Livre, não estamos trazendo o endereço de cobrança (BillingAddress) fornecido pelo MELI. Alguns vendedores precisam dessa informação na API GET Order do OMS para enviar os valores corretos ao MELI no fluxo de faturamento.

## Simulação

No OMS GET Order, atualmente estamos trazendo apenas o shippingAddress, e não o BillingAddress; isso pode ser visto na API GET Order

## Workaround

n/a
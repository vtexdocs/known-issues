---
title: 'O campo "disponibilidade" está incorreto na simulação de atendimento para produtos sem estoque ou sem preço'
slug: o-campo-disponibilidade-esta-incorreto-na-simulacao-de-atendimento-para-produtos-sem-estoque-ou-sem-preco
status: PUBLISHED
createdAt: 2023-03-17T17:46:52.000Z
updatedAt: 2023-10-04T14:22:33.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: availability-field-is-incorrect-in-fulfillment-simulation-for-no-stock-or-price-products
locale: pt
kiStatus: Backlog
internalReference: 773537
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Quando um produto está em falta ou não tem preço, a

## Simulação

de atendimento indica incorretamente o campo `availability` como `available`.
Esse comportamento também se aplica ao contexto de seleção de presentes, onde o campo `selectableGifts` é igualmente afetado por esse problema.


1. Se o item tiver preço, mas não tiver estoque, a simulação de atendimento retornará `"availability": "nullPrice"` quando não houver endereço;
2. Se o item tiver preço, mas não tiver estoque, a simulação de atendimento retornará `"availability": "available"` quando houver um endereço.


## **Simulação**

- Tenha um produto sem estoque ou preço em um vendedor
- Faça uma simulação de atendimento

## Workaround

N/A
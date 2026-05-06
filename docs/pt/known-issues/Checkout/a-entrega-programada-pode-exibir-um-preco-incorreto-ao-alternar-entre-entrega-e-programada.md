---
title: 'A entrega programada pode exibir um preço incorreto ao alternar entre entrega e programada'
slug: a-entrega-programada-pode-exibir-um-preco-incorreto-ao-alternar-entre-entrega-e-programada
status: PUBLISHED
createdAt: 2023-03-13T20:36:16.000Z
updatedAt: 2023-03-13T20:36:16.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: scheduled-delivery-may-show-incorrect-price-when-switching-between-delivery-and-scheduled
locale: pt
kiStatus: Backlog
internalReference: 770250
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Quando há uma promoção de valor máximo de frete configurada, se você alternar várias vezes entre a entrega padrão e a entrega agendada, pode ocorrer uma diferença no preço da entrega agendada exibido na interface do usuário

## Simulação

- Crie uma promoção de valor máximo de frete;
- Monte um carrinho que inclua entrega padrão e entrega agendada;
- Selecione a entrega padrão;
- Selecione a entrega agendada;
- Continue alternando entre as opções e, em algum momento, o preço da entrega agendada poderá ser diferente do valor da API

## Workaround

N/A
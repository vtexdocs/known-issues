---
title: 'As opções de retirada no ponto de retirada e entrega programada no mesmo carrinho não estão funcionando corretamente'
slug: as-opcoes-de-retirada-no-ponto-de-retirada-e-entrega-programada-no-mesmo-carrinho-nao-estao-funcionando-corretamente
status: PUBLISHED
createdAt: 2021-12-06T19:35:32.000Z
updatedAt: 2023-06-16T21:13:58.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: pickuppoint-and-schedule-delivery-in-the-same-cart-are-not-working-correctly
locale: pt
kiStatus: Backlog
internalReference: 482256
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

A interface do usuário não funciona corretamente em um carrinho com mais de um item e entrega dividida, em que um dos itens está disponível para retirada e os demais apenas para entrega agendada.

A data para a retirada dos itens é definida sem problemas. No entanto, as datas para a entrega agendada não funcionam como esperado.

## Simulação

- Monte um carrinho com pelo menos dois itens, sendo que um deles está disponível para retirada e os outros apenas para entrega agendada;
- Na etapa de envio, selecione Retirada na loja e escolha um horário de entrega;
- Tente selecionar um horário de entrega para a entrega agendada.

## Workaround

N/A
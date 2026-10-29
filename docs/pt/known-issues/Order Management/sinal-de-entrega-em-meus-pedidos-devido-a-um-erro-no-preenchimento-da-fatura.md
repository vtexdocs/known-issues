---
title: 'Sinal de entrega em Meus Pedidos. Devido a um erro no preenchimento da fatura.'
slug: sinal-de-entrega-em-meus-pedidos-devido-a-um-erro-no-preenchimento-da-fatura
status: PUBLISHED
createdAt: 2022-03-21T22:58:11.000Z
updatedAt: 2026-10-29T21:20:17.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: delivery-flag-in-my-orders-due-to-an-error-in-filling-the-invoice
locale: pt
kiStatus: Fixed
internalReference: 547053
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Se a fatura do pedido não contiver as informações corretas sobre a quantidade de itens e os IDs SKU do pedido, não será possível inserir o indicador "Entregue" em "Meus Pedidos".

## Simulação

Para simular esse comportamento, faça um pedido com apenas um item.

Ao faturar o pedido, insira o ID de outro item na fatura e/ou insira a quantidade de mais itens.

Após faturar o pedido, atualize o rastreamento e insira a informação "isDelivered: true".

A interface do usuário exibirá a informação "Entregue" no pedido, porém, em "Meus Pedidos", a informação continuará como "Enviando Pedido".

## Workaround

Tenha cuidado para não inserir mais itens na fatura e/ou itens com IDs de pedido diferentes. Nesses casos, o pedido não terá o indicador "Entregue" em "Meus Pedidos".
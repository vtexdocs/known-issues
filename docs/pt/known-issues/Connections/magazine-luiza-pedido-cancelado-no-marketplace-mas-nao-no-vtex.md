---
title: 'Magazine Luiza Pedido cancelado no Marketplace, mas não no VTEX'
slug: magazine-luiza-pedido-cancelado-no-marketplace-mas-nao-no-vtex
status: PUBLISHED
createdAt: 2023-04-18T16:52:57.000Z
updatedAt: 2023-04-18T16:52:57.000Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: magazine-luiza-order-canceled-on-marketplace-didnt-cancel-on-vtex
locale: pt
kiStatus: Backlog
internalReference: 792618
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

O pedido foi cancelado no marketplace, mas no OMS ele foi cancelado e ainda está no status "Aguardando autorização para envio"

## Simulação

- Pedido cancelado no marketplace;
- O status do pedido não foi atualizado para "Cancelado" no OMS;
- O log não mostra nenhum erro no fluxo;
- A ponte não mostra nenhum erro;

Precisamos revisar o fluxo para pedidos cancelados e o worker que busca o status desses pedidos no marketplace.

## Workaround

É possível cancelar o pedido usando uma rota interna?
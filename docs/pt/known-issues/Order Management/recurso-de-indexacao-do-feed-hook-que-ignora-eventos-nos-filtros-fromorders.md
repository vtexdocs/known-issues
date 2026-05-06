---
title: 'Recurso de indexação do Feed Hook que ignora eventos nos filtros FromOrders'
slug: recurso-de-indexacao-do-feed-hook-que-ignora-eventos-nos-filtros-fromorders
status: PUBLISHED
createdAt: 2023-05-25T20:20:03.000Z
updatedAt: 2023-05-25T20:23:08.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: feed-hook-indexing-feature-skipping-events-in-fromorders-filters
locale: pt
kiStatus: Backlog
internalReference: 832400
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Ao configurar o filtro do Feed/Hook, você define quais atualizações de pedidos devem ser exibidas no feed. Dois tipos de filtros podem ser usados no feed: FromWorkflow e FromOrders.

Usando a configuração FromWorkflow, você só pode filtrar as atualizações de pedidos por status.
Já o FromOrders permite filtrar as atualizações no seu feed por qualquer propriedade do documento JSON do pedido.

Mas na expressão FromOrders, quando há uma propriedade dinâmica no filtro, como o status, por exemplo, isso faz com que a indexação de Pedidos ignore algumas versões do pedido.
E isso pode resultar na ausência de notificações para o feed/hook quando elas deveriam ocorrer.

## Simulação

Defina uma expressão de FromOrders com o status do pedido e várias possibilidades, como canal de vendas, número de sequência e outras condições.

Pode não haver notificação devido a informações dinâmicas, como o status do pedido.

## Workaround

A recomendação para casos como este é remover essa parte dinâmica do filtro e lidar com isso externamente.
Se a informação dinâmica for o ponto principal, como o status do pedido, deve-se usar a opção FromWorkflow.
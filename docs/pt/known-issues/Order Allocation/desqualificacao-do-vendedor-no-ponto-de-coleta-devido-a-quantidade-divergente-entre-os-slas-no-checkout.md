---
title: Desqualificação do vendedor no Ponto de Coleta devido à quantidade divergente entre os SLAs no Checkout
slug: desqualificacao-do-vendedor-no-ponto-de-coleta-devido-a-quantidade-divergente-entre-os-slas-no-checkout
status: PUBLISHED
createdAt: 2025-10-16T20:53:24.435Z
updatedAt: 2025-10-16T20:53:24.435Z
contentType: knownIssue
productTeam: Order Allocation
author: 2mXZkbi0oi061KicTExNjo
tag: Order Allocation
slugEN: disqualification-of-seller-at-pickup-point-due-to-divergent-quantity-between-slas-at-checkout
locale: pt
kiStatus: Backlog
internalReference: 1228333
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Quando o carrinho contém mais de uma unidade da mesma SKU e o comprador escolhe o canal de entrega "pick-up", pode haver uma alteração inesperada no ponto de retirada selecionado ou até mesmo a impossibilidade de escolher uma das opções listadas.

Esse comportamento geralmente ocorre quando o mesmo vendedor responde com mais de um SLA do mesmo tipo, por exemplo, "pick-up", e esses SLAs têm rotas logísticas diferentes, cada uma com disponibilidade diferente para a SKU em questão.
O motivo é que o checkout tenta priorizar o SLA com a menor disponibilidade durante a simulação, com base no endereço de retirada escolhido. Isso pode levar a desconsiderar o SLA (e o vendedor) que, na prática, poderia ter estoque suficiente para atender ao pedido naquele ponto de coleta.
## Simulação


Esse tipo de cenário requer uma gama muito ampla de configurações de disponibilidade, e simulá-lo não é trivial.

OBSERVAÇÃO:Quando você insere o CEP do comprador, o Fulfillment retorna os SLAs disponíveis com uma quantidade total (por exemplo, 4 unidades).
Quando você muda para o endereço de retirada, é feita uma nova simulação que, ao retornar SLAs do mesmo tipo com quantidades diferentes, acaba limitando a disponibilidade ao menor valor disponível nos SLAs oferecidos, o que significa que o vendedor em questão não poderá mais atender ao carrinho com o número total de unidades solicitadas pelo comprador
## Workaround



Não há nenhuma solução alternativa disponível para esse cenário.



---
title: 'Os pedidos da MELI não estão sendo cancelados no VTEX OMS em um cenário com várias contas'
slug: os-pedidos-da-meli-nao-estao-sendo-cancelados-no-vtex-oms-em-um-cenario-com-varias-contas
status: PUBLISHED
createdAt: 2024-02-06T11:04:34.000Z
updatedAt: 2024-02-06T11:04:34.000Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: meli-orders-not-being-cancelled-in-vtex-oms-for-multiples-accounts-scenario
locale: pt
kiStatus: Backlog
internalReference: 977453
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Atualmente, nossa integração com o MELI apresenta um problema relacionado ao processo de cancelamento de pedidos. Quando o MELI cancela um pedido e o vendedor possui mais de quatro contas no VTEX, existe a possibilidade de o pedido não ser cancelado na quinta conta

## Simulação

Se o cancelamento do pedido não puder ser concluído, o vendedor poderá ver o pedido como não cancelado no VTEX, mas cancelado no MELI; nesse caso, é necessário um cancelamento manual diretamente no OMS.
Isso se aplica apenas aos casos em que o vendedor possui mais de 4 contas no VTEX, utilizando o mesmo ID de usuário do MELI.

## Workaround

n/a
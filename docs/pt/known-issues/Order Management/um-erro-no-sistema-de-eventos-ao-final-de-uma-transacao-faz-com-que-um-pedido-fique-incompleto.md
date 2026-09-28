---
title: 'Um erro no sistema de eventos ao final de uma transação faz com que um pedido fique incompleto.'
slug: um-erro-no-sistema-de-eventos-ao-final-de-uma-transacao-faz-com-que-um-pedido-fique-incompleto
status: PUBLISHED
createdAt: 2021-08-27T23:54:04.000Z
updatedAt: 2026-09-28T22:53:24.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: error-with-event-system-at-the-end-of-a-transaction-causes-an-order-to-be-incomplete
locale: pt
kiStatus: Fixed
internalReference: 421137
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Quando ocorre um erro no sistema de eventos ao final de uma transação, o pedido que o cliente estava tentando comprar não é finalizado e permanece incompleto. A ação "RaiseEvent" é uma ação interna acionada nas últimas etapas da criação do pedido, sempre após a transação/pagamento ser concluído (não necessariamente aprovado ou analisado; eles podem ter seus próprios fluxos e tempos). Quando ocorre um erro nesta etapa, seja ao final de uma compra, por exemplo, no GatewayCallback, o usuário não consegue concluir sua compra, cancelando assim a transação devido à falha deste evento.

## Simulação

Não há como simular, mas podemos ver os logs:

RaiseEventyAsync falhou nos últimos 30 dias, contabilizados por tipo de fluxo de trabalho

RaiseEventAsync e RaiseEventAsyncV2 no tipo de fluxo de trabalho PlaceOrder e NewGatewayCallback

## Workaround

N/A
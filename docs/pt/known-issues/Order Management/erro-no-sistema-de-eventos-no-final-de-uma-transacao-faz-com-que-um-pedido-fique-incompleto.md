---
title: 'Erro no sistema de eventos no final de uma transação faz com que um pedido fique incompleto'
slug: erro-no-sistema-de-eventos-no-final-de-uma-transacao-faz-com-que-um-pedido-fique-incompleto
status: PUBLISHED
createdAt: 2025-10-16T20:35:57.585Z
updatedAt: 2025-10-16T20:35:57.585Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: error-with-event-system-at-the-end-of-a-transaction-causes-an-order-to-be-incomplete
locale: pt
kiStatus: Backlog
internalReference: 421137
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Quando ocorre um erro com o sistema de eventos no final de uma transação, o pedido que o cliente estava tentando comprar não é finalizado e permanece incompleto. A ação "RaiseEvent" é uma ação interna acionada nas últimas etapas da criação do pedido, sempre após a transação/pagamento ser efetuado (não necessariamente aprovado ou analisado; eles podem ter seus próprios fluxos e timings), quando ocorre um erro nessa etapa, sendo ele no final de uma compra, por exemplo GatewayCallback, o usuário não consegue concluir sua compra, cancelando assim a transação devido à falha desse evento.
## Simulação


Não há como simular, mas podemos ver os registros:

RaiseEventyAsync falhou nos últimos 30 dias, contados por tipo de fluxo de trabalho

RaiseEventAsync & RaiseEventAsyncV2 no tipo de fluxo de trabalho PlaceOrder & NewGatewayCallbac
## Workaround


N/A




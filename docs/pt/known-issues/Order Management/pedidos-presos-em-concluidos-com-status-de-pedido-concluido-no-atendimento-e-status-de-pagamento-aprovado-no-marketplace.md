---
title: Pedidos presos em concluídos com status de pedido concluído no atendimento e status de pagamento aprovado no Marketplace
slug: pedidos-presos-em-concluidos-com-status-de-pedido-concluido-no-atendimento-e-status-de-pagamento-aprovado-no-marketplace
status: PUBLISHED
createdAt: 2025-08-07T21:10:34.602Z
updatedAt: 2025-08-07T21:10:34.602Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: orders-stuck-in-completed-with-onordercompleted-status-in-fulfillment-and-approved-payment-status-in-marketplace
locale: pt
kiStatus: Backlog
internalReference: 1218615
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Em alguns casos, um pedido pode ficar preso em seus status iniciais (`on-order-completed-ffm`, `on-order-completed`), mesmo depois de ter sido aparentemente criado com sucesso. Isso acontece quando uma das etapas internas no fluxo de criação do pedido falha silenciosamente, causando uma **desincronização do fluxo de trabalho** que impede que o pedido progrida normalmente.


## Simulação


No momento, esse cenário não pode ser simulado de forma confiável, pois depende de falhas intermitentes ou específicas em partes isoladas do processo de criação de pedidos.

## Workaround


No momento, não há como evitar esse tipo de cenário, mas a equipe técnica pode aplicar manualmente ações corretivas aos pedidos afetados, permitindo que eles prossigam normalmente pelo fluxo de trabalho.





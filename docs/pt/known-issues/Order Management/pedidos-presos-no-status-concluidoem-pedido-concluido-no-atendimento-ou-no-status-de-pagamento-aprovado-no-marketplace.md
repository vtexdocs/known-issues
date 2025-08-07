---
title: Pedidos presos no status concluído/em pedido concluído no atendimento ou no status de pagamento aprovado no Marketplace
slug: pedidos-presos-no-status-concluidoem-pedido-concluido-no-atendimento-ou-no-status-de-pagamento-aprovado-no-marketplace
status: PUBLISHED
createdAt: 2025-08-07T20:26:19.839Z
updatedAt: 2025-08-07T20:26:19.839Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: orders-stuck-in-completedonordercompleted-status-in-fulfillment-or-approved-payment-status-in-marketplace
locale: pt
kiStatus: Backlog
internalReference: 1218615
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Em alguns casos, um pedido pode ficar preso em seus status iniciais (`approve-payment`, `on-order-completed-ffm`, `on-order-completed` ou `processing`), mesmo depois de ter sido aparentemente criado com sucesso. Isso acontece quando uma das etapas internas no fluxo de criação do pedido falha silenciosamente, causando uma ** dessincronização do fluxo de trabalho** que impede que o pedido progrida normalmente.

## Simulação


No momento, esse cenário não pode ser simulado de forma confiável, pois depende de falhas intermitentes ou específicas em partes isoladas do processo de criação de pedidos.



## Workaround


No momento, não há como evitar esse tipo de cenário, mas a equipe técnica pode aplicar manualmente ações corretivas aos pedidos afetados, permitindo que eles prossigam normalmente pelo fluxo de trabalho.




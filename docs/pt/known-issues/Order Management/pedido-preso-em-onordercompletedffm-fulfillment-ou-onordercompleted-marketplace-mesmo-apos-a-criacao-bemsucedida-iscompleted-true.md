---
title: Pedido preso em on-order-completed-ffm (Fulfillment) ou on-order-completed (Marketplace) mesmo após a criação bem-sucedida (isCompleted: true)
slug: pedido-preso-em-onordercompletedffm-fulfillment-ou-onordercompleted-marketplace-mesmo-apos-a-criacao-bemsucedida-iscompleted-true
status: PUBLISHED
createdAt: 2025-10-13T13:13:20.694Z
updatedAt: 2025-10-13T13:13:20.694Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: order-stuck-in-onordercompletedffm-fulfillment-or-onordercompleted-marketplace-even-after-successful-creation-iscompleted-true
locale: pt
kiStatus: Fixed
internalReference: 1218615
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Em alguns casos, um pedido pode ficar preso em seus status iniciais (`on-order-completed-ffm`, `on-order-completed`), mesmo depois de ter sido aparentemente criado com sucesso. Isso acontece quando uma das etapas internas no fluxo de criação do pedido falha silenciosamente, causando uma **desincronização do fluxo de trabalho** que impede que o pedido progrida normalmente.


## Simulação


No momento, esse cenário não pode ser simulado de forma confiável, pois depende de falhas intermitentes ou específicas em partes isoladas do processo de criação de pedidos.

## Workaround


No momento, não há como evitar esse tipo de cenário, mas a equipe técnica pode aplicar manualmente ações corretivas aos pedidos afetados, permitindo que eles prossigam normalmente pelo fluxo de trabalho.
Observação: nos casos em que a reserva expirou (status=4), não é possível fazer o ajuste manual!!!




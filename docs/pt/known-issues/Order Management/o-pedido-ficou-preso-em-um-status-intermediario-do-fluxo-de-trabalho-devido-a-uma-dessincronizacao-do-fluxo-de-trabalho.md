---
title: 'O pedido ficou preso em um status intermediário do fluxo de trabalho devido a uma dessincronização do fluxo de trabalho.'
slug: o-pedido-ficou-preso-em-um-status-intermediario-do-fluxo-de-trabalho-devido-a-uma-dessincronizacao-do-fluxo-de-trabalho
status: PUBLISHED
createdAt: 2026-09-23T23:44:50.000Z
updatedAt: 2026-09-23T23:44:50.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: order-stuck-in-an-intermediate-workflow-status-due-to-a-workflow-desynchronization
locale: pt
kiStatus: Backlog
internalReference: 1465447
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Existem cenários em que um pedido pode ficar preso em um status intermediário do seu fluxo de trabalho — por exemplo (lista não exaustiva) aprovar pagamento, em pedido concluído, em processamento ou autorizar atendimento — mesmo que o pedido aparentemente tenha sido criado/processado com sucesso até aquele ponto. Isso acontece quando uma das etapas internas do fluxo de trabalho do pedido falha silenciosamente ou encontra uma inconsistência, causando uma dessincronização que impede o pedido de progredir automaticamente para o próximo status. Isso não se limita a um único status ou a uma única instância (Marketplace ou Atendimento/Vendedor) — pode ocorrer em diferentes pontos do ciclo de vida do pedido.

## Simulação

Não há uma maneira fácil de reproduzir o cenário, já que ele depende de falhas intermitentes ou específicas em pontos isolados da execução do fluxo de trabalho do pedido.

## Workaround

"N/A" Se um pedido ficar preso em um status intermediário do fluxo de trabalho sem progredir por um período incomum, abra um chamado com a equipe de Produto da VTEX (Gerenciamento de Pedidos) para que eles possam inspecionar o pedido e, se necessário, ressincronizar manualmente o fluxo de trabalho.
---
title: 'Pedidos ficam presos no status “solicitação de cancelamento” no marketplace quando o vendedor emite a fatura ao mesmo tempo (condição de corrida entre cancelamento e faturamento)'
slug: pedidos-ficam-presos-no-status-solicitacao-de-cancelamento-no-marketplace-quando-o-vendedor-emite-a-fatura-ao-mesmo-tempo-condicao-de-corrida-entre-cancelamento-e-faturamento
status: PUBLISHED
createdAt: 2026-04-30T21:32:02.678Z
updatedAt: 2026-04-30T21:32:02.678Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: orders-stuck-in-requestcancel-on-marketplace-when-seller-invoices-at-the-same-time-cancel-vs-invoice-race-condition
locale: pt
kiStatus: Backlog
internalReference: 1400005
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Os pedidos podem ficar permanentemente bloqueados no marketplace com o status “request-cancel” e workflowIsInError: true quando uma solicitação de cancelamento do marketplace ocorre simultaneamente com o evento de faturamento do vendedor, com uma diferença de algumas centenas de milissegundos. O sintoma visível é que o pedido do marketplace não passa para o status “Cancelado” ou “Faturado”, enquanto o pedido do vendedor permanece como “Faturado”; as tentativas de ajustar o status via API/IU falham. Isso afeta cenários entre o marketplace e o vendedor em todos os tipos de entrega e pagamentos (não se limitando a retirada/Pix), conforme confirmado em outros exemplos. A equipe de engenharia identificou isso como uma condição de corrida arquitetônica e está planejando uma correção.

## Simulação

Não há uma maneira fácil de reproduzir o cenário.

## Workaround

Processe/reembolse a transação para compensar o cliente, conforme foi feito para os pedidos afetados.
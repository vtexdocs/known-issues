---
title: 'As transações ficam presas em "Cancelando" e os pagamentos permanecem em "Autorizados"'
slug: as-transacoes-ficam-presas-em-cancelando-e-os-pagamentos-permanecem-em-autorizados
status: PUBLISHED
createdAt: 2025-10-17T12:43:13.214Z
updatedAt: 2025-10-17T12:43:13.214Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transactions-stuck-in-canceling-and-payments-remain-in-authorized
locale: pt
kiStatus: Backlog
internalReference: 1309418
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Algumas transações permanecem no status Cancelando enquanto seus pagamentos correspondentes permanecem em Autorizado, sem progredir para o estado Finalizado ou Cancelado. O problema ocorre quando o processador de pagamentos não consegue atualizar o status do pagamento após receber a solicitação de cancelamento.
## Simulação


Não é possível simular
## Workaround


Cancele o pedido manualmente no OMS para evitar problemas com o gerenciamento de estoque.



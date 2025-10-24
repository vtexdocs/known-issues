---
title: 'Pedido preso em pagamento pendente devido a status de transação desatualizado'
slug: pedido-preso-em-pagamento-pendente-devido-a-status-de-transacao-desatualizado
status: PUBLISHED
createdAt: 2025-10-01T12:55:40.209Z
updatedAt: 2025-10-01T12:55:40.209Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: order-stuck-in-payment-pending-due-to-outdated-transaction-status
locale: pt
kiStatus: Fixed
internalReference: 1195265
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Às vezes, quando o OMS verifica o gateway quanto ao status da transação antes de alterar o pedido para Pagamento aprovado, o status é anterior ao esperado, que deve ser **Aprovado**, fazendo com que o pedido permaneça preso no status Pagamento pendente.
## Simulação


O erro é intermitente e não pode ser simulado.


## Workaround


Abra um tíquete com a VTEX solicitando que a notificação de pagamento aprovado seja reenviada ao OMS.




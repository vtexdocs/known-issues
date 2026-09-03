---
title: 'Pedido travado em "Pagamento pendente" apesar da transação ter sido aprovada (OMS lê status obsoleto ao processar pagamento aprovado)'
slug: pedido-travado-em-pagamento-pendente-apesar-da-transacao-ter-sido-aprovada-oms-le-status-obsoleto-ao-processar-pagamento-aprovado
status: PUBLISHED
createdAt: 2026-09-03T16:57:14.000Z
updatedAt: 2026-09-03T16:57:14.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: order-stuck-in-payment-pending-despite-approved-transaction-oms-reads-stale-status-when-processing-paymentapproved
locale: pt
kiStatus: Backlog
internalReference: 1456295
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Um pedido pode permanecer preso em "Pagamento Pendente" mesmo que a transação tenha realmente atingido o status **"Aprovado"** em Pagamentos (sem reversão, conforme confirmado pelos registros de transação) e o postback `pagamento-aprovado` tenha sido recebido corretamente pelo OMS sem atraso.

**A falha ocorre em uma etapa subsequente separada:** durante o processamento da notificação, o OMS (`SalesOrderSystem::CreateAuthorization`, estado `aprovar-pagamento`) realiza uma verificação de status independente no Gateway. Nos casos afetados, essa verificação retorna **"Autorizado"** (uma leitura desatualizada), mesmo que a transação já tenha atingido o status **"Aprovado"** em Pagamentos. Isso impede que a transição para `aprovar-pagamento` seja concluída e nenhuma nova tentativa automática foi observada posteriormente, o que significa que o pedido pode permanecer preso indefinidamente.

## Simulação

Não é possível simular.

## Workaround

Abra um chamado com a VTEX solicitando que a notificação de pagamento aprovado seja reenviada para a OMS.
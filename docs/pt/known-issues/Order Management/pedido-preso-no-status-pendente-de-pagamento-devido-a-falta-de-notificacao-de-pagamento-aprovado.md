---
title: 'Pedido preso no status Pendente de pagamento devido à falta de notificação de pagamento aprovado'
slug: pedido-preso-no-status-pendente-de-pagamento-devido-a-falta-de-notificacao-de-pagamento-aprovado
status: PUBLISHED
createdAt: 2025-09-05T12:09:34.919Z
updatedAt: 2025-09-05T12:09:34.919Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: order-stuck-in-payment-pending-status-due-to-missing-payment-approved-notification
locale: pt
kiStatus: Backlog
internalReference: 1031035
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário



Quando um pedido está no status "Payment Pending" (Pagamento pendente), espera-se que uma notificação de pagamento seja registrada no módulo Orders (Pedidos). Durante esse estágio, podem ocorrer problemas no processamento de eventos.
O OMS é notificado por meio de um ponto de extremidade de retorno de chamada acionado quando o gateway recebe uma mensagem de postback. Essa mensagem é gerada sempre que uma transação atinge estados específicos (como _Approved_) e, em seguida, é processada por um funcionário que instrui o Gateway a chamar o ponto de extremidade de retorno de chamada, atualizando o OMS sobre o novo estado da transação.
Nesses casos, o postback é enviado com êxito, o OMS o recebe e responde com êxito, mas o pedido permanece preso devido a um erro não registrado no OMS.
Em outras palavras, o Gateway conclui sua função corretamente, mas algum erro no processamento do OMS impede o andamento do pedido.
## Simulação



Não há como simular esse comportamento.


## Workaround



Entre em contato com nossa equipe de suporte para que eles possam usar a ferramenta interna de solução de problemas




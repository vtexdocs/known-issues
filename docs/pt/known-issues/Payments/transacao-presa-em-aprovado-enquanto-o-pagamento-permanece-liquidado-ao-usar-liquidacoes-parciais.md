---
title: 'Transação presa em Aprovado enquanto o pagamento permanece Liquidado ao usar liquidações parciais'
slug: transacao-presa-em-aprovado-enquanto-o-pagamento-permanece-liquidado-ao-usar-liquidacoes-parciais
status: PUBLISHED
createdAt: 2025-11-14T19:32:28.516Z
updatedAt: 2025-11-14T19:32:28.516Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transaction-stuck-in-approved-while-payment-remains-settling-when-using-partial-settlements
locale: pt
kiStatus: Backlog
internalReference: 1319395
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


As transações ficam presas no status Aprovado quando o pagamento correspondente permanece em Liquidação, impedindo que as transações avancem pelo fluxo esperado.
O sintoma visível é que as solicitações de captura são enviadas, mas as solicitações e as ações não se alinham e o status do pedido não avança, mesmo que a transação seja forçada a ser liquidada.

No OMS, é possível observar uma mensagem que mostra "Ocorreu um erro com o Gateway".
## Simulação


Não é possível reproduzir o erro


## Workaround


Não há nenhuma solução alternativa disponível.




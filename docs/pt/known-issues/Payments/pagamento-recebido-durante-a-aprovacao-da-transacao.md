---
title: 'Pagamento recebido durante a aprovação da transação'
slug: pagamento-recebido-durante-a-aprovacao-da-transacao
status: PUBLISHED
createdAt: 2025-10-16T20:34:46.367Z
updatedAt: 2025-10-16T20:34:46.367Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: payment-received-while-transaction-approved
locale: pt
kiStatus: Backlog
internalReference: 1174379
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Em alguns casos, mesmo que o conector (**pagelofacil**) retorne a resposta correta, os pagamentos permanecem presos no status `recebido` depois que a transação é `aprovada`.

Para verificar o status do pagamento, você pode usar a API GET Payment details, que deve retornar `received` nesse caso.

Além disso, é possível verificar alguns registros que indicam a mudança de status de Received para Authorizing, mas não há efeito sobre o status do pagamento.
## Simulação


Não é possível simular.


## Workaround


Não há solução alternativa.




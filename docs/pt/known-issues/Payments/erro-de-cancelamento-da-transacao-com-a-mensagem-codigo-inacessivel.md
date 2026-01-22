---
title: 'Erro de cancelamento da transação com a mensagem “Código inacessível”'
slug: erro-de-cancelamento-da-transacao-com-a-mensagem-codigo-inacessivel
status: PUBLISHED
createdAt: 2026-01-22T20:15:40.352Z
updatedAt: 2026-01-22T20:15:40.352Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transaction-cancellation-error-with-unreachable-code-message
locale: pt
kiStatus: Backlog
internalReference: 998435
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

 As solicitações de cancelamento de transações podem falhar com a mensagem “Código inacessível” (visível apenas por meio da API) quando um cancelamento é enviado ao gateway de pagamentos. O erro pode ocorrer em diferentes fluxos de cancelamento, total ou parcial, e pode acontecer antes da captura da transação, independentemente de uma divisão de pagamento já ter sido criada. Cenário 1 – Cancelamento total da transação (API de pagamentos)

Um cancelamento total da transação pode falhar, retornando a mensagem “Código inacessível” (visível apenas via API). Esse erro ocorre no cenário de divisão de pagamento. Na interface do usuário, você pode ver os registros da tentativa de cancelamento, mas nenhuma resposta. Cenário 2 – Cancelamento parcial acionado pelo OMS (antes da captura)

Um cancelamento parcial iniciado pelo OMS (por exemplo, durante uma ordem de alteração) pode falhar com “Código inacessível”, mesmo antes da transação ser capturada. No momento do erro: A transação não é capturada; Ainda não existe nenhuma divisão de pagamento.
## Simulação


## Workaround


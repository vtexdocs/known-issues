---
title: 'Transação travada em "Aprovada" com pagamentos liquidados - bloqueando a emissão de faturas.'
slug: transacao-travada-em-aprovada-com-pagamentos-liquidados-bloqueando-a-emissao-de-faturas
status: PUBLISHED
createdAt: 2026-09-15T13:38:03.000Z
updatedAt: 2026-09-15T13:38:03.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transaction-stuck-in-approved-with-settled-payments-blocking-invoicing
locale: pt
kiStatus: Backlog
internalReference: 1461229
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Uma transação cujos pagamentos foram liquidados permanece em "Aprovado" e nunca chega a "Concluído", deixando o pedido preso em "verificando o status da fatura". A liquidação é registrada e o conector responde com sucesso, mas o pagamento nunca sai de "Autorizado" ou "Liquidando". Como um registro de liquidação já consome o valor total do pagamento, todas as faturas posteriores não encontram saldo disponível e falham.

Sintomas visíveis:

- Pedido travado em "verificando o status da fatura" / "verificando a fatura"
- Transação em `Aprovado`, pagamento em `Autorizado` ou `Liquidando` em `/pagamentos`, apesar de uma liquidação já ter sido registrada
- Resposta do Gateway de Liquidação: `O pagamento com Id = {paymentId} não foi liquidado porque o valor da liquidação foi 0,00` (`HTTP 500`)
- OMS: `{"error":{"code":"001","message":"Ocorreu um erro com o Gateway"}}`

Em pedidos com pagamento único, o defeito é silencioso — a transação simplesmente fica em `Aprovado`. Ele só se torna bloqueador quando o pedido gera mais de uma fatura.

## Simulação

Não reproduzível sob demanda.

Para confirmar se um caso é este bug, verifique os três:

1. `GET /api/pvt/transactions/{transactionId}/settlements` → `actions` soma o valor autorizado completo, `requests` é `[]`
2. `GET /api/pvt/transactions/{transactionId}/payments` → um pagamento ainda está em `"status": "Authorized"` ou `"Settling"` enquanto seu campo `settlement` já está preenchido
3. `GET /api/pvt/transactions/{transactionId}/capabilities` → `"minimumValue": 0.01` mesmo que existam liquidações

## Workaround

Não há solução alternativa disponível.
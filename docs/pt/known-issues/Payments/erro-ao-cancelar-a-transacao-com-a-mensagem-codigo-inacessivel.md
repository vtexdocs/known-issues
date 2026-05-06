---
title: 'Erro ao cancelar a transação com a mensagem "Código inacessível"'
slug: erro-ao-cancelar-a-transacao-com-a-mensagem-codigo-inacessivel
status: PUBLISHED
createdAt: 2024-03-12T19:33:54.000Z
updatedAt: 2026-01-22T23:15:11.000Z
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

As solicitações de cancelamento de transações podem falhar com a mensagem “Código inacessível” (visível apenas via API) quando um cancelamento é enviado ao gateway de pagamentos.

O erro pode ocorrer em diferentes fluxos de cancelamento, total ou parcial, e pode acontecer antes da captura da transação, independentemente de já ter sido criada uma divisão de pagamento.

Cenário 1 – Cancelamento total da transação (API de pagamentos)

Um cancelamento total da transação pode falhar, retornando a mensagem `Código inacessível` (visível apenas via API).

Esse erro ocorre no cenário de divisão de pagamento; na interface do usuário, é possível ver os registros da tentativa de cancelamento, mas não há resposta.

Cenário 2 – Cancelamento parcial acionado pelo OMS (antes da captura)

Um cancelamento parcial iniciado pelo OMS (por exemplo, durante uma ordem de alteração) pode falhar com “Código inacessível”, mesmo antes da captura da transação.

No momento do erro:

A transação não é capturada;

Ainda não existe nenhuma divisão de pagamento.

## Simulação

Não foi possível simular este erro.

## Workaround

Cenário 1
Cancele os pagamentos separadamente, começando pelo valor mais baixo.

Cenário 2
Abra um ticket com a equipe de Produto/Pagamentos solicitando que a transação seja finalizada (capturada).
Assim que a transação for finalizada, prossiga com o reembolso do valor necessário.
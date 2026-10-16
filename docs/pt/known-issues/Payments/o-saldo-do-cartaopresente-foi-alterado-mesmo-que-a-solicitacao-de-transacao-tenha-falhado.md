---
title: 'O saldo do cartão-presente foi alterado mesmo que a solicitação de transação tenha falhado.'
slug: o-saldo-do-cartaopresente-foi-alterado-mesmo-que-a-solicitacao-de-transacao-tenha-falhado
status: PUBLISHED
createdAt: 2021-12-20T21:59:01.000Z
updatedAt: 2026-10-17T00:48:20.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: gift-card-balance-changed-even-though-the-transaction-request-failed
locale: pt
kiStatus: Backlog
internalReference: 491195
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Ao criar uma transação usando um cartão-presente (débito ou crédito), a API pode retornar um erro mesmo que o saldo do cartão já tenha sido alterado.

Isso ocorre porque a transação é registrada em duas etapas:

1. O saldo do cartão-presente é atualizado (débito ou crédito).

2. O registro da transação é salvo.

Se a segunda etapa falhar, a API retorna um erro (geralmente HTTP 400 com a mensagem "Uma tarefa foi cancelada."), mas a alteração de saldo da primeira etapa não é revertida.

- **Conclusão do pedido:** o cartão-presente é debitado, o pagamento falha e o pedido permanece incompleto, mas o saldo não é reembolsado após o cancelamento da transação.

- **Repetição da transação:** Quando a transação é repetida após esse erro, mesmo com o mesmo `requestId`, ela é processada novamente e o cartão-presente é creditado ou debitado mais de uma vez.

- **Lista de transações:** as transações afetadas por este problema impactam o saldo do cartão-presente, mas não são retornadas por `GET /api/giftcards/{giftCardId}/transactions`.

## Simulação

Não é possível simular.

## Workaround

- **Débito:** o reembolso deve ser feito manualmente pela interface do usuário do Cartão-Presente. Se o cartão-presente tiver a opção `Recarregável: Não`, o reembolso deverá ser feito pela API de Transações do Cartão-Presente.

- **Crédito:** não tente novamente automaticamente quando uma solicitação de transação retornar um erro ou expirar. Verifique o saldo do cartão-presente antes de tentar novamente e reverta os créditos duplicados que já foram aplicados.
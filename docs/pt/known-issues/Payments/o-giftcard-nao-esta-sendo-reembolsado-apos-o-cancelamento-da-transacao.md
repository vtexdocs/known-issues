---
title: 'O Giftcard não está sendo reembolsado após o cancelamento da transação'
slug: o-giftcard-nao-esta-sendo-reembolsado-apos-o-cancelamento-da-transacao
status: PUBLISHED
createdAt: 2025-11-14T19:28:19.364Z
updatedAt: 2025-11-14T19:28:19.364Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: giftcard-not-getting-refund-after-transaction-cancellation
locale: pt
kiStatus: Backlog
internalReference: 491195
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Quando o método de pagamento é um cartão-presente e ocorre um erro durante o processo de colocação do pedido, fazendo com que o pedido permaneça incompleto, o saldo do cartão-presente não é reembolsado depois que a transação é cancelada.

Isso faz com que o saldo do cartão-presente seja deduzido, embora a operação de débito tenha falhado tecnicamente. Como o cartão-presente não pôde ser debitado corretamente, a transação permanece incompleta. Entretanto, ao revisar o extrato do cartão-presente, é possível ver que o débito foi processado com êxito, apesar da mensagem de erro exibida nas interações.

Isso ocorre porque o sistema utiliza vários bancos de dados para registrar transações com cartões-presente, o que pode resultar em inconsistências entre o extrato do usuário e os dados retornados pela API.
O cenário mais comum é que o cartão-presente é debitado primeiro e, em seguida, a transação é salva. Se ocorrer uma falha durante essa segunda etapa, o débito não é revertido, o que resulta na inconsistência

## Simulação


Não é possível simula
## Workaround


Reembolsar manualmente por meio da interface do usuário do cartão-presente.



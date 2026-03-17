---
title: 'O vale-presente não está sendo reembolsado após o cancelamento da transação'
slug: o-valepresente-nao-esta-sendo-reembolsado-apos-o-cancelamento-da-transacao
status: PUBLISHED
createdAt: 2026-03-17T20:51:58.904Z
updatedAt: 2026-03-17T20:51:58.904Z
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

Quando a forma de pagamento é um cartão-presente e ocorre um erro durante o processo de realização do pedido, fazendo com que o pedido permaneça incompleto, o saldo do cartão-presente não é reembolsado após o cancelamento da transação.

Isso faz com que o saldo do cartão-presente seja deduzido, mesmo que a operação de débito tenha tecnicamente falhado. Como o cartão-presente não pôde ser debitado corretamente, a transação permanece incompleta. No entanto, ao verificar o extrato do cartão-presente, é possível ver que o débito foi processado com sucesso, apesar da mensagem de erro exibida nas interações.

Isso ocorre porque o sistema utiliza vários bancos de dados para registrar transações de cartões-presente, o que pode resultar em inconsistências entre o extrato do usuário e os dados retornados pela API.
O cenário mais comum é que o cartão-presente seja debitado primeiro e, em seguida, a transação seja salva. Se ocorrer uma falha durante essa segunda etapa, o débito não é revertido, resultando na inconsistência

## Simulação

Não é possível simular

## Workaround

Faça o reembolso manualmente pela interface do cartão-presente.
Nos casos em que o cartão-presente tem a configuração `Reloadable: No`, o saldo não pode ser alterado pela interface. Portanto, o reembolso deve ser feito usando a API de transações de cartão-presente.
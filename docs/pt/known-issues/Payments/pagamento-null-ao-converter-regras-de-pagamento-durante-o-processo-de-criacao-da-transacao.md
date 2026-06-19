---
title: 'Pagamento NULL ao converter regras de pagamento durante o processo de criação da transação'
slug: pagamento-null-ao-converter-regras-de-pagamento-durante-o-processo-de-criacao-da-transacao
status: PUBLISHED
createdAt: 2026-06-19T17:42:12.000Z
updatedAt: 2026-06-19T17:42:12.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: null-payment-when-converting-payment-rules-during-the-transaction-creation-process
locale: pt
kiStatus: Backlog
internalReference: 1424049
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Ocasionalmente, o sistema responsável por retornar os _paymentSystems_ disponíveis para o comerciante pode omitir uma ou mais opções e registrar um erro “Conversão de regras do sistema de pagamento: pagamento NULL” durante a criação do pagamento, fazendo com que as transações falhem com mensagens como `“A configuração do conector é inválida… O PaymentSystemId encontrado na melhor opção da configuração da regra não foi encontrado no paymentSystem do comerciante.”`

O sintoma visível é que os pedidos ficam incompletos e os erros se concentram em intervalos curtos de tempo.

## Simulação

Não é possível simular.

## Workaround

Não há solução alternativa disponível.
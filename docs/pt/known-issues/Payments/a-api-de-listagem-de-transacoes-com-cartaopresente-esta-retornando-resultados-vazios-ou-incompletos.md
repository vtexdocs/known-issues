---
title: 'A API de listagem de transações com cartão-presente está retornando resultados vazios ou incompletos'
slug: a-api-de-listagem-de-transacoes-com-cartaopresente-esta-retornando-resultados-vazios-ou-incompletos
status: PUBLISHED
createdAt: 2021-06-21T17:37:01.000Z
updatedAt: 2025-12-09T17:44:16.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: list-giftcard-transactions-api-returning-empty-or-incomplete
locale: pt
kiStatus: Backlog
internalReference: 384430
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Os pontos de extremidade da API “Get Giftcard Transaction” e “Get GiftCard from GiftCard Provider” podem retornar uma resposta vazia ou omitir algumas operações, como crédito ou débito, na lista.

## Simulação

1. Em uma conta com cartões-presente nativos, escolha uma transação já paga com um cartão-presente
2. Copie o giftcardId e chame o endpoint “Get Giftcard Transaction” ou “Get GiftCard from GiftCard Provider”
3. A resposta estará vazia ou incompleta

## Workaround

N/A
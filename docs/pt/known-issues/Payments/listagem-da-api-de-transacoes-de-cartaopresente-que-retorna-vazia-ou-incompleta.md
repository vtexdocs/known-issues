---
title: 'Listagem da API de transações de cartão-presente que retorna vazia ou incompleta'
slug: listagem-da-api-de-transacoes-de-cartaopresente-que-retorna-vazia-ou-incompleta
status: PUBLISHED
createdAt: 2025-12-09T14:44:52.077Z
updatedAt: 2025-12-09T14:44:52.077Z
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


Os pontos de extremidade da API Get Giftcard Transaction e Get GiftCard do provedor de GiftCard podem retornar uma resposta vazia ou perder algumas operações, como crédito ou débito, na lista.
## Simulação



1. Em uma conta com Giftcards nativos, selecione uma transação já paga com um gift card
2. Copie o giftcardId e chame o endpoint Get Giftcard Transaction ou Get GiftCard from GiftCard Provider
3. A resposta estará vazia ou incomplet
## Workaround


N/A




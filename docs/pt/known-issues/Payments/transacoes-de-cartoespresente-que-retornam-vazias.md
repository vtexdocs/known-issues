---
title: 'Transações de cartões-presente que retornam vazias'
slug: transacoes-de-cartoespresente-que-retornam-vazias
status: PUBLISHED
createdAt: 2025-11-25T11:09:40.944Z
updatedAt: 2025-11-25T11:09:40.944Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: giftcard-transactions-returning-empty
locale: pt
kiStatus: Backlog
internalReference: 384430
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Os pontos de extremidade da API Get Giftcard Transaction e Get GiftCard do provedor de GiftCard sempre retornam uma resposta vazia
## Simulação



1. Em uma conta com Giftcards nativos, selecione uma transação já paga com um gift card
2. Copie o giftcardId e chame o endpoint Get Giftcard Transaction ou Get GiftCard from GiftCard Provider
3. A resposta estará vazi
## Workaround


N/A




---
title: 'A transação DecidirV1 foi "reprocessada" após algumas tentativas de autorização'
slug: a-transacao-decidirv1-foi-reprocessada-apos-algumas-tentativas-de-autorizacao
status: PUBLISHED
createdAt: 2021-06-18T21:35:54.000Z
updatedAt: 2026-06-05T20:41:09.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: decidirv1-transaction-got-reprocessed-after-some-retries-to-authorization
locale: pt
kiStatus: No Fix
internalReference: 384009
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Isso ocorre quando uma transação recebe o status 480, que significa "REVISÃO", e começa a tentar novamente até receber uma carga nula. Assim, depois disso, "reprocessamos" a transação, o que causa uma falha e o cancelamento.

## Simulação

Não há como simular isso.

## Workaround

Não há solução alternativa disponível no momento
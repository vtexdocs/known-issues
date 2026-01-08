---
title: 'Tempo limite de 504 ao criar cartões-presente em massa através do Admin (lote de grande tamanho)'
slug: tempo-limite-de-504-ao-criar-cartoespresente-em-massa-atraves-do-admin-lote-de-grande-tamanho
status: PUBLISHED
createdAt: 2026-01-08T12:39:36.986Z
updatedAt: 2026-01-08T12:39:36.986Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: 504-timeout-when-creating-gift-cards-in-bulk-via-admin-large-batch-size
locale: pt
kiStatus: Backlog
internalReference: 1348204
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

 Ao criar cartões-presente em lotes a partir do Admin, a solicitação pode expirar e retornar HTTP 504 durante lotes grandes. O sintoma visível é um erro 504 após o envio do formulário de criação em massa; alguns ou nenhum dos cartões-presente ainda podem ser criados em segundo plano. Isso afeta os comerciantes que usam o fluxo de criação em massa do Admin para cartões-presente, especialmente com volumes elevados.
## Simulação


## Workaround


---
title: 'Problemas de concorrência no aplicativo Quickorder ao adicionar itens.'
slug: problemas-de-concorrencia-no-aplicativo-quickorder-ao-adicionar-itens
status: PUBLISHED
createdAt: 2026-08-21T22:16:42.000Z
updatedAt: 2026-08-21T22:16:42.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: quickorder-app-concurrency-issues-when-adding-items
locale: pt
kiStatus: Backlog
internalReference: 1450887
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

O aplicativo Quickorder divide a adição de itens ao carrinho em lotes de 10 itens e chama as APIs de finalização de compra em paralelo.

Isso pode levar a problemas de concorrência para grandes lotes de itens.

## Simulação

Este problema não é facilmente reproduzível; a concorrência pode ou não ocorrer.

## Workaround

N/A
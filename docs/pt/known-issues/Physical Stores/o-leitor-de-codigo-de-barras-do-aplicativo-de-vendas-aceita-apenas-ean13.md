---
title: O leitor de código de barras do aplicativo de vendas aceita apenas EAN-13
slug: o-leitor-de-codigo-de-barras-do-aplicativo-de-vendas-aceita-apenas-ean13
status: PUBLISHED
createdAt: 2025-10-16T20:47:37.625Z
updatedAt: 2025-10-16T20:47:37.625Z
contentType: knownIssue
productTeam: Physical Stores
author: 2mXZkbi0oi061KicTExNjo
tag: Physical Stores
slugEN: sales-app-barcode-scanner-accepts-only-ean13
locale: pt
kiStatus: Backlog
internalReference: 1211334
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


O leitor de código de barras no aplicativo de vendas aceita apenas EAN-13.

Se um produto tiver registrado um UPC-A (12 dígitos), o leitor de código de barras adicionará um 0 ao código de barras, resultando em uma busca vazia.
## Simulação



- Acesse o aplicativo nativo Sales App;
- Use o leitor de código de barras e leia um UPC-12;
- Um zero à esquerda é adicionado e uma busca vazia é exibida
## Workaround


Adicione um zero à esquerda ao código de barras no registro da SKU.



---
title: 'XML - A moeda da prestação não se aplica'
slug: xml-a-moeda-da-prestacao-nao-se-aplica
status: PUBLISHED
createdAt: 2025-11-14T19:15:31.204Z
updatedAt: 2025-11-14T19:15:31.204Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: xml-installment-currency-does-not-apply
locale: pt
kiStatus: Backlog
internalReference: 976295
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Ao configurar uma moeda em um XML, ela se aplica a todos os campos, exceto o campo "Parcela".

O campo "Prestação" sempre exibe a moeda como "R$", independentemente da moeda configurada.
## Simulação



1. Crie/atualize um XML com uma moeda diferente de "R$" e ative o campo Parcela.
2. Verifique se todos os campos de preço no XML estão retornando corretamente a moeda, exceto o campo Parcela
## Workaround


N/A




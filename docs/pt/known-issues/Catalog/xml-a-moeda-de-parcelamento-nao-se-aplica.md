---
title: 'XML - A moeda de parcelamento não se aplica'
slug: xml-a-moeda-de-parcelamento-nao-se-aplica
status: PUBLISHED
createdAt: 2024-02-02T19:16:24.000Z
updatedAt: 2024-02-02T19:16:24.000Z
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

Ao configurar uma moeda em um XML, ela se aplica a todos os campos, exceto ao campo “Parcelamento”.

O campo “Parcelamento” sempre exibe a moeda como “R$”, independentemente da moeda configurada.

## Simulação

1. Crie/atualize um XML com uma moeda diferente de “R$” e habilite o campo Parcelamento.
2. Verifique se todos os campos de preço no XML estão retornando a moeda corretamente, exceto o campo Parcelamento.

## Workaround

N/A
---
title: 'Facebook Hoje, o Facebook analisa os campos `sellingPrice` e `listPrice` para atualizar o preço no catálogo do Facebook'
slug: facebook-hoje-o-facebook-analisa-os-campos-sellingprice-e-listprice-para-atualizar-o-preco-no-catalogo-do-facebook
status: PUBLISHED
createdAt: 2023-10-24T13:15:07.000Z
updatedAt: 2024-04-03T12:40:57.000Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: facebook-today-facebook-looks-at-sellingprice-and-listprice-to-update-the-price-in-the-facebook-catalog
locale: pt
kiStatus: Backlog
internalReference: 924411
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Atualmente, o Facebook considera o sellingPrice e o listPrice para atualizar o preço no catálogo do Facebook.

## Simulação

O vendedor está usando unitMultiplier = 0,5

O checkout faz o seguinte cálculo quando o item tem um multiplicador de unidade: sellingPrice = preço * unitMultiplier = 3999 * 0,5 = 1999,5. O arredondamento do checkout ignora a casa decimal e considera 1999

Qual é o problema com esse cálculo?
Quando o vendedor usa 0,5, por exemplo, no Facebook estamos atualizando esse valor como o preço de liquidação no Facebook.
2. Quando o vendedor usa um multiplicador maior que 1,39, o valor fica dentro do preço promocional, mesmo sendo maior que o preço de tabela

## Workaround

o vendedor usa unitMultiplier = 10000
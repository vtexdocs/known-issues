---
title: 'O Matcher não funciona como esperado quando o nome do produto/SKU contém caracteres especiais'
slug: o-matcher-nao-funciona-como-esperado-quando-o-nome-do-produtosku-contem-caracteres-especiais
status: PUBLISHED
createdAt: 2023-01-18T18:57:19.000Z
updatedAt: 2023-10-19T15:36:57.000Z
contentType: knownIssue
productTeam: Marketplace
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace
slugEN: matcher-does-not-work-as-expected-when-the-productsku-name-contains-special-characters
locale: pt
kiStatus: Fixed
internalReference: 736164
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Ao integrar produtos cujos nomes contêm caracteres especiais, como `. - + # /`, o Matcher atribui uma pontuação de 50% e mantém os produtos no status “Pendente”. Com isso, os produtos dependem de aprovação manual ou via API.

## Simulação

1. Por meio de um vendedor VTEX, envie um SKU que contenha caracteres especiais no nome
2. Na página SKUs Recebidos, observe que o SKU em questão terá uma pontuação de 50%, na aba Pendente

## Workaround

Para resolver o cenário, é recomendável que o vendedor altere o SKU/nome do produto, removendo os caracteres especiais. Se isso não for possível, o marketplace pode usar a API https://developers.vtex.com/docs/api-reference/marketplace-apis#put-/api.vtex.com/-accountName-/suggestions/matches/action/-actionName- para fazer a correspondência dos produtos
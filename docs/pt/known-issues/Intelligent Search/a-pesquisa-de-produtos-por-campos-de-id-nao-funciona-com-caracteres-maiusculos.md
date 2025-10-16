---
title: A pesquisa de produtos por campos de ID não funciona com caracteres maiúsculos
slug: a-pesquisa-de-produtos-por-campos-de-id-nao-funciona-com-caracteres-maiusculos
status: PUBLISHED
createdAt: 2025-10-16T20:45:08.515Z
updatedAt: 2025-10-16T20:45:08.515Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: product-search-by-id-fields-not-working-for-uppercase-characters
locale: pt
kiStatus: Backlog
internalReference: 1205216
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


A pesquisa por um ID, como o "refId" de um produto ou SKU, não funciona corretamente ao inserir caracteres maiúsculos.

A pesquisa não encontrará nenhum resultado pelo ID, mas poderá encontrar produtos se o ID corresponder a algum campo pesquisável do produto, o que pode vir do comportamento de autocorreção (_fuzzy_).
## Simulação



- Registre um produto com "refId" como "ABC123".
- Pesquise por "abc123", e o produto será encontrado.
- Pesquise "ABC123", e o produto não será encontrado
## Workaround


Crie um atributo de especificação para espelhar o valor desse ID e defina-o como um campo pesquisável. Ele não poderá aplicar a classificação mais alta para correspondências de ID nem funcionar para correspondências parciais de ID, mas ajudará o produto a ser encontrado.
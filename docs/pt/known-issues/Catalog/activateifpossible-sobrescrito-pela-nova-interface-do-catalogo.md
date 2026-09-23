---
title: 'ActivateIfPossible Sobrescrito pela nova interface do catálogo'
slug: activateifpossible-sobrescrito-pela-nova-interface-do-catalogo
status: PUBLISHED
createdAt: 2026-06-15T18:04:30.000Z
updatedAt: 2026-09-23T16:41:47.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: activateifpossible-overwritten-by-new-catalog-ui
locale: pt
kiStatus: Backlog
internalReference: 1420981
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Atualmente, se um SKU for alterado para `ActivateIfPossible = true` diretamente via API e, em seguida, uma alteração for realizada via interface do catálogo no mesmo SKU enquanto ele ainda não tiver todos os requisitos necessários para estar ativo, o campo é alterado de volta para `false`.

O comportamento correto seria que ele permanecesse `true` e apenas o valor ativo fosse alterado.

## Simulação

1 - Crie um SKU
2 - Nele, altere o campo `activateIfPossible` para `true`
3 - Acesse a interface do usuário e altere quaisquer valores sem preencher todos os campos necessários para que ele esteja ativo
4 - Recupere os dados do SKU novamente https://developers.vtex.com/docs/api-reference/catalog-api#get-/api/catalog/pvt/stockkeepingunit/-skuId- e o campo `activateIfPossible` estará como `false`

## Workaround

-

-
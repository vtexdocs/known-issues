---
title: 'ActivateIfPossible substituído pela nova interface do usuário do catálogo'
slug: activateifpossible-substituido-pela-nova-interface-do-usuario-do-catalogo
status: PUBLISHED
createdAt: 2026-06-15T18:04:30.000Z
updatedAt: 2026-06-15T18:04:30.000Z
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

Atualmente, se um SKU for alterado para ActivateIfPossible = true diretamente via API e, em seguida, for realizada uma alteração na interface do usuário do catálogo nesse mesmo SKU enquanto ele ainda não preencher todos os requisitos necessários para ficar ativo, o campo volta a ser definido como = false.

O comportamento correto seria que ele permanecesse = true e apenas o valor ativo fosse alterado.

## Simulação

1 - crie um SKU
2 - nele, altere o campo activateIfPossible para true
3 - acesse a interface do usuário e altere quaisquer valores sem preencher todos os campos necessários para que ele fique ativo
4 - recupere os dados do SKU novamente https://developers.vtex.com/docs/api-reference/catalog-api#get-/api/catalog/pvt/stockkeepingunit/-skuId- e o campo activateIfPossible estará = false

## Workaround

-
---
title: 'A lista de anexos na interface do usuário da SKU pode levar a tempos limite'
slug: a-lista-de-anexos-na-interface-do-usuario-da-sku-pode-levar-a-tempos-limite
status: PUBLISHED
createdAt: 2025-11-17T17:30:53.279Z
updatedAt: 2025-11-17T17:30:53.279Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: attachment-list-on-sku-ui-can-lead-to-timeouts
locale: pt
kiStatus: Backlog
internalReference: 1133468
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Atualmente, se um usuário registrar muitos anexos na interface do usuário do SKU, por exemplo, mais de 5.000 anexos, isso pode levar a um tempo limite ao tentar salvar outros dados do SKU na interface do usuário do skuform.aspx.
## Simulação


1 - Criar uma enorme quantidade de anexos no catálogo de uma loja.

2 - tentar salvar esses dados

3 - A interface do usuário continuará carregando por cerca de 50 segundos e, por fim, falhará com uma resposta 500 - tempo limite
## Workaround


Salve esses dados por meio da atualização da API SKU https://developers.vtex.com/docs/api-reference/catalog-api#put-/api/catalog/pvt/stockkeepingunit/-skuId-?endpoint=put-/api/catalog/pvt/stockkeepingunit/-skuId-




---
title: 'Algumas especificações não são exibidas no Admin, mas podem ser visualizadas por meio da API'
slug: algumas-especificacoes-nao-sao-exibidas-no-admin-mas-podem-ser-visualizadas-por-meio-da-api
status: PUBLISHED
createdAt: 2021-08-24T15:25:32.000Z
updatedAt: 2023-05-12T19:29:13.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: some-specs-are-not-displayed-in-admin-but-are-visible-via-api
locale: pt
kiStatus: Backlog
internalReference: 418348
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Algumas especificações não são exibidas no painel de administração, mas podem ser visualizadas por meio da API.

## Simulação

Visualize as especificações de um produto no painel de administração e por meio da API.

## Workaround

Exclua as especificações de API com erros para cada SKU do produto

- Especificação do produto: https://developers.vtex.com/docs/api-reference/catalog-api#delete-/api/catalog/pvt/product/-productId-/specification/-specificationId-
- Especificação do SKU: https://developers.vtex.com/docs/api-reference/catalog-api#delete-/api/catalog/pvt/stockkeepingunit/-skuId-/specification/-specificationId-
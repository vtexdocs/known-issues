---
title: 'A ordem de SKUs na Search API não segue a posição do SKU do Admin'
id: 6onugQyL4odM0jExTsMqnZ
status: PUBLISHED
createdAt: 2022-02-01T15:33:37.326Z
updatedAt: 2022-11-25T21:48:56.005Z
publishedAt: 2022-11-25T21:48:56.005Z
firstPublishedAt: 2022-02-01T15:33:37.776Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: sku-ordering-in-the-search-api-does-not-follow-the-sku-position-of-the-admin
locale: pt
kiStatus: Backlog
internalReference: 515042
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Atualmente, a resposta da API de pesquisa não respeita o posicionamento de SKUs dentro do produto em Admin. Na resposta, as SKUs estão sendo classificadas em ordem ascendente de SkuId.



## Simulação


- Utilize a API de pesquisa `/api/catalog_system/pub/products/search/?fq=productId:`
- Note que as SKUs são classificadas por SKU Id, em ordem ascendente



## Workaround


N/A


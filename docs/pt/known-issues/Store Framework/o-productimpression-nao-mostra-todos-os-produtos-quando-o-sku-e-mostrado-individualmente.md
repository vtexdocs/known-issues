---
title: 'O ProductImpression não mostra todos os produtos quando o SKU é mostrado individualmente'
slug: o-productimpression-nao-mostra-todos-os-produtos-quando-o-sku-e-mostrado-individualmente
status: PUBLISHED
createdAt: 2026-01-06T12:59:43.048Z
updatedAt: 2026-01-06T12:59:43.048Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: productimpression-doesnt-show-all-the-products-when-the-sku-is-individually-showed
locale: pt
kiStatus: Backlog
internalReference: 717617
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Quando a loja "desvincula" o SKU de um produto para ser exibido individualmente na vitrine, a ProductImpression do GTM só vê os produtos por seu productID, não por cada SKUId. Portanto, se o produto tiver 3 SKUs diferentes na página de pesquisa, a ProductImpression o mostrará apenas como um produto.
## Simulação


Vá para qualquer loja que "separe" o SKU de um produto em produtos individuais e tente ver o ProductImpression da camada de dados no GTM
## Workaround



N/A
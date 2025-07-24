---
title: Catalog Inativar o producttid usando a API não está inativando o SKU
slug: catalog-inativar-o-producttid-usando-a-api-nao-esta-inativando-o-sku
status: PUBLISHED
createdAt: 2025-07-24T17:43:09.996Z
updatedAt: 2025-07-24T17:43:09.996Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: catalog-inactivating-productid-using-api-isnt-inactivating-sku
locale: pt
kiStatus: Backlog
internalReference: 1157944
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


A inativação do producttid usando a API não está inativando a SKU
O produto continua disponível no PDP
## Simulação



✅️ Produto inativo
❌️ SKU UI ativo
❌️ Sku disponível no PDP

PUT - https://VTEX.vtexcommercestable.com.br/api/catalog/pvt/product/

 ![](https://vtexhelp.zendesk.com/attachments/token/FVMLGum8BwYRG5crfDPmb0Gef/?name=image.png
## Workaround


Sempre que o produto inteiro, incluindo seus SKUs, quiser ser inativado, o comerciante precisará inativar os SKUs



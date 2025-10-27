---
title: 'A exportação de estoque não funciona para uma base de sku muito grande (StatusCode: 429)'
slug: a-exportacao-de-estoque-nao-funciona-para-uma-base-de-sku-muito-grande-statuscode-429
status: PUBLISHED
createdAt: 2025-10-16T20:36:10.184Z
updatedAt: 2025-10-16T20:36:10.184Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slugEN: stock-export-does-not-work-for-a-very-large-sku-base-statuscode-429
locale: pt
kiStatus: Backlog
internalReference: 1178575
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário



Para clientes que têm uma base enorme de SKUs, igual a mais de 500 mil, a exportação do inventário não funcionará. Durante o processo de exportação, ele começará a gerar `StatusCode: 429 Message: Too Many Requests" em nossos logs internos, e o e-mail com a planilha nunca chegará.

## Simulação


Em qualquer conta que tenha mais de 500 mil SKUs, a planilha de inventário nunca chegará ao e-mail.



## Workaround



Uma alternativa possível para contornar esse problema é usar nossas APIs de inventário para configurar um executor:

Por depósito:
https://developers.vtex.com/docs/api-reference/logistics-api#get-/api/logistics/pvt/inventory/items/-skuId-/warehouses/-warehouseId-

Por SKU (com todos os depósitos):
https://developers.vtex.com/docs/api-reference/logistics-api#get-/api/logistics/pvt/inventory/skus/-skuId-

Esteja ciente de que esse processo via API é demorado e provavelmente gerará um relatório de inventário desatualizado.



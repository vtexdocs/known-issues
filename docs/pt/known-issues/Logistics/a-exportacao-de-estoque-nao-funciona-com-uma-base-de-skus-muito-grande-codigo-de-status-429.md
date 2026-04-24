---
title: 'A exportação de estoque não funciona com uma base de SKUs muito grande (Código de status: 429)'
slug: a-exportacao-de-estoque-nao-funciona-com-uma-base-de-skus-muito-grande-codigo-de-status-429
status: PUBLISHED
createdAt: 2026-04-24T18:26:41.114Z
updatedAt: 2026-04-24T18:26:41.114Z
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

Para clientes com uma base enorme de SKUs, ou seja, mais de 500 mil, a exportação de estoque não funcionará. Em alguns casos, durante o processo de exportação, começará a gerar `StatusCode: 429 Message: Too Many Requests` em nossos logs internos, e o e-mail com a planilha nunca será enviado.

## Simulação

Em qualquer conta que tenha mais de 500 mil SKUs, a planilha de estoque nunca chegará ao e-mail.

## Workaround

**Evite exportar todos os armazéns de uma só vez. **

Ou tente outra alternativa para contornar esse problema usando nossas APIs de estoque para configurar um executor:

Por armazém:
https://developers.vtex.com/docs/api-reference/logistics-api#get-/api/logistics/pvt/inventory/items/-skuId-/warehouses/-warehouseId-

Por SKU (com todos os armazéns):
https://developers.vtex.com/docs/api-reference/logistics-api#get-/api/logistics/pvt/inventory/skus/-skuId-

Esteja ciente de que esse processo via API é demorado e provavelmente gerará um relatório de estoque desatualizado.
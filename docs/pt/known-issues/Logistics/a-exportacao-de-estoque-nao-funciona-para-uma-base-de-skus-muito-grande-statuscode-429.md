---
title: 'A exportação de estoque não funciona para uma base de SKUs muito grande (StatusCode: 429)'
slug: a-exportacao-de-estoque-nao-funciona-para-uma-base-de-skus-muito-grande-statuscode-429
status: PUBLISHED
createdAt: 2025-02-12T21:05:36.000Z
updatedAt: 2026-08-12T20:47:08.000Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slugEN: stock-export-does-not-work-for-a-very-large-sku-base-statuscode-429
locale: pt
kiStatus: Scheduled
internalReference: 1178575
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Para clientes com uma base enorme de SKUs, igual ou superior a 500 mil, a exportação de estoque não funcionará. Em alguns casos, durante o processo de exportação, o sistema começará a gerar o código de status `429 Message: Too Many Requests` em nossos registros internos, e o e-mail com a planilha nunca será enviado.

## Simulação

Em qualquer conta com mais de 500 mil SKUs, a planilha de estoque nunca será enviada por e-mail.

## Workaround

**Evite exportar todos os armazéns de uma só vez.** **

Ou tente outra alternativa para contornar esse problema usando nossas APIs de inventário para configurar um executor:

Por armazém:
https://developers.vtex.com/docs/api-reference/logistics-api#get-/api/logistics/pvt/inventory/items/-skuId-/warehouses/-warehouseId-

Por SKU (Com todos os armazéns):
https://developers.vtex.com/docs/api-reference/logistics-api#get-/api/logistics/pvt/inventory/skus/-skuId-

Observe que esse processo via API é demorado e provavelmente gerará um relatório de inventário desatualizado.
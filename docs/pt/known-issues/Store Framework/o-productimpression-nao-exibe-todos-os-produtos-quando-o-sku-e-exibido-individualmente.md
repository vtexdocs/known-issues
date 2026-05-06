---
title: 'O ProductImpression não exibe todos os produtos quando o SKU é exibido individualmente'
slug: o-productimpression-nao-exibe-todos-os-produtos-quando-o-sku-e-exibido-individualmente
status: PUBLISHED
createdAt: 2022-12-15T22:30:41.000Z
updatedAt: 2026-01-06T15:59:19.000Z
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

Quando a loja "separa" o SKU de um produto para exibi-lo individualmente na vitrine, o ProductImpression do GTM identifica os produtos apenas pelo productID, e não pelo SKUId de cada um. Portanto, se o produto tiver três SKUs diferentes na página de pesquisa, o ProductImpression o exibirá apenas como um único produto.

## Simulação

Acesse qualquer loja que "separe" o SKU de um produto em produtos individuais e tente visualizar o ProductImpression a partir da Camada de Dados no GTM.

## Workaround

N/A
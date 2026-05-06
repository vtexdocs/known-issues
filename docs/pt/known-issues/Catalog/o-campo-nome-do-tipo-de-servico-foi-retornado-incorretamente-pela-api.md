---
title: 'O campo "Nome do tipo de serviço" foi retornado incorretamente pela API'
slug: o-campo-nome-do-tipo-de-servico-foi-retornado-incorretamente-pela-api
status: PUBLISHED
createdAt: 2024-01-04T16:35:59.000Z
updatedAt: 2024-01-04T16:35:59.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: service-type-name-field-wrongly-returned-via-api
locale: pt
kiStatus: Backlog
internalReference: 961278
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Atualmente, as APIs do Catálogo de SKUs não estão retornando corretamente o nome de um tipo de serviço. Em vez disso, está sendo retornado o nome do valor do serviço.

## Simulação

1. Faça uma solicitação GET SKU em um SKU associado a um serviço: https://developers.vtex.com/docs/api-reference/catalog-api#get-/api/catalog/pvt/stockkeepingunit/-skuId-
2. Observe que o objeto services retorna um campo serviceTypeId e um Name; no entanto, o campo Name não está exibindo o nome do tipo de serviço propriamente dito.

## Workaround

N/A
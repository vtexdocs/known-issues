---
title: 'Product Specification Export Index Out of Range'
slug: product-specification-export-index-out-of-range
status: PUBLISHED
createdAt: 2021-12-03T17:27:30.000Z
updatedAt: 2024-01-10T20:25:15.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: product-specification-export-index-out-of-range
locale: en
kiStatus: Backlog
internalReference: 481095
---

## Summary

When attempting to export Product Specifications from the "Import and Export" UI, if there is any null value or null relation on the category to be exported, the process will fail with an "Index out of Range" message. In other words, the category must have registered directly at its level a product field, products, and products with values associated.

## Simulation

1) Go to the Product Specification export UI: ProdutoExportacaoImportacaoEspecificacaoV2.aspx

2) Right-click a category in which there's no product specification field registered

3) An error message of "Index out of bonds" will be prompted.

## Workaround

Either export the desired category's parent or child

or

Use the get product specifications API to fetch data: https://developers.vtex.com/vtex-rest-api/reference/catalog-api-product-specification
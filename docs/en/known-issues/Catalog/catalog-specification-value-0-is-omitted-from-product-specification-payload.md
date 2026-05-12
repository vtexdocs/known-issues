---
title: 'Catalog specification value 0 is omitted from product specification payload'
slug: catalog-specification-value-0-is-omitted-from-product-specification-payload
status: PUBLISHED
createdAt: 2026-05-12T17:13:15.000Z
updatedAt: 2026-05-12T17:13:15.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: catalog-specification-value-0-is-omitted-from-product-specification-payload
locale: en
kiStatus: Backlog
internalReference: 1405238
---

## Summary

When a numeric type specification contains the number "0" within it as its sole value, this data is not correctly returned via API.

## Simulation

1 - create a number specification in the VTEX catalog

2 - insert the sole value 0 within it

3 - fetch this data for theproduct in which this specification value was inserted via GET /api/catalog_system/pvt/products//specification

4 - the 0 value will NOT be returned

## Workaround

fetch the data by other menas (ex: sheets)
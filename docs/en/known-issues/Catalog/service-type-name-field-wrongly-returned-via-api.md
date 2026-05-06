---
title: 'Service type name field wrongly returned via API'
slug: service-type-name-field-wrongly-returned-via-api
status: PUBLISHED
createdAt: 2024-01-04T16:35:59.000Z
updatedAt: 2024-01-04T16:35:59.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: service-type-name-field-wrongly-returned-via-api
locale: en
kiStatus: Backlog
internalReference: 961278
---

## Summary

Currently the SKU Catalog APIs are not returning correctly the name of a service type. Instead is being returned the name of the service value.

## Simulation

1. Make a GET SKU request on a sku associated with a service: https://developers.vtex.com/docs/api-reference/catalog-api#get-/api/catalog/pvt/stockkeepingunit/-skuId-
2. Note that the services object returns a serviceTypeId field and a Name, however the Name field is not showing the service type name itself.

## Workaround

N/A
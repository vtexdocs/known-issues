---
title: 'stockkeepingunit catalog API allows invalid commercial condition values'
slug: stockkeepingunit-catalog-api-allows-invalid-commercial-condition-values
status: PUBLISHED
createdAt: 2025-11-14T19:14:37.932Z
updatedAt: 2025-11-14T19:14:37.932Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: stockkeepingunit-catalog-api-allows-invalid-commercial-condition-values
locale: en
kiStatus: Backlog
internalReference: 769053
---

## Summary


Currently, the stockkeepingunit API https://catalog.vtexcommercestable.com.br/api/catalog/pvt/stockkeepingunit/{skuid} does not perform any checks for the field "CommercialConditionId".

This allows the user to input invalid data, such as an Id that doesn't exist on a given store and then, when trying to access this sku's form, an error is thrown.


#### Simulation


On the payload of the insert SKU API https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/stockkeepingunit, use a commercialcondition id that isn't present on the store.

Then, access this created sku's UI and you should face an error message.


#### Workaround


n/a




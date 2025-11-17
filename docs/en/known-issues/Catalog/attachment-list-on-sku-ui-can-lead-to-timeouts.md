---
title: 'Attachment list on SKU UI can lead to timeouts'
slug: attachment-list-on-sku-ui-can-lead-to-timeouts
status: PUBLISHED
createdAt: 2025-11-17T17:30:56.192Z
updatedAt: 2025-11-17T17:30:56.192Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: attachment-list-on-sku-ui-can-lead-to-timeouts
locale: en
kiStatus: Backlog
internalReference: 1133468
---

## Summary


Currently, if an user registers a lot of attachments on the SKU UI, for instance, 5000+ attachments, this can lead to a timeout upon attempting to save other SKU data on the skuform.aspx UI.


#### Simulation


1 - create an enormous amount of attachments in a store's catalog.

2 - attempt saving this data

3 - The UI will keep loading for ~50ish seconds and eventually fail with a 500 response - timeout.


#### Workaround


Save this data via update SKU API https://developers.vtex.com/docs/api-reference/catalog-api#put-/api/catalog/pvt/stockkeepingunit/-skuId-?endpoint=put-/api/catalog/pvt/stockkeepingunit/-skuId-




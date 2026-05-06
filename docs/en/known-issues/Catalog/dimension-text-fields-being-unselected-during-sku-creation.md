---
title: 'Dimension text fields being unselected during SKU creation'
slug: dimension-text-fields-being-unselected-during-sku-creation
status: PUBLISHED
createdAt: 2023-04-06T17:29:15.000Z
updatedAt: 2023-04-06T17:29:15.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: dimension-text-fields-being-unselected-during-sku-creation
locale: en
kiStatus: Backlog
internalReference: 786048
---

## Summary

When creating an SKU from Admin, it is necessary to register the dimensions for shipping and real dimensions. However, when you fill in one of the text fields and click (or use the tab key) to fill in another, this field is unselected and you need to click on the text field again to be able to insert/edit the value.

## Simulation

- Go to Catalog and create a new SKU in a product
- Fill in the first field "Shipment weight"
- Click on the next field or use the tab key
- Watch that after a short moment, the field is unselected so is not possible to edit

## Workaround

Click again on the text field
---
title: 'ActivateIfPossible Overwritten by New Catalog UI'
slug: activateifpossible-overwritten-by-new-catalog-ui
status: PUBLISHED
createdAt: 2026-06-15T18:04:30.000Z
updatedAt: 2026-06-15T18:04:30.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: activateifpossible-overwritten-by-new-catalog-ui
locale: en
kiStatus: Backlog
internalReference: 1420981
---

## Summary

Currently, if an sku is switched to ActivateIfPossible = true directly via API and then a change is performed via catalog UI in the same sku while it still didn't have all the necessary requirements to be active, the fieldis switched back to = false.

The correct bevahiour would be for it to remain = true and only the active value to be switched.

## Simulation

1 - create an sku
2 - in it, change the activateIfPossible field to true
3 - access the UI and change any values without filling in all necessary fields for it to be active
4 - fetch the SKU data again https://developers.vtex.com/docs/api-reference/catalog-api#get-/api/catalog/pvt/stockkeepingunit/-skuId- and the activateIfPossible field will be = false

## Workaround

-
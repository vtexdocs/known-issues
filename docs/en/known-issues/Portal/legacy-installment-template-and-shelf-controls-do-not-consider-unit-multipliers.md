---
title: 'Legacy installment template and shelf controls do not consider unit multipliers'
slug: legacy-installment-template-and-shelf-controls-do-not-consider-unit-multipliers
status: PUBLISHED
createdAt: 2024-02-08T13:39:16.000Z
updatedAt: 2024-02-08T13:48:14.000Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slugEN: legacy-installment-template-and-shelf-controls-do-not-consider-unit-multipliers
locale: en
kiStatus: Backlog
internalReference: 979205
---

## Summary

Currently, for store using the legacy CMS, legacy template and shelf controls are not adjusted if the SKU has a unit multiplier.

For instance, if you have an item with an unit multiplier of 2 and a installment controller, the data displayed on shelves will only show the installment options of a single unit, instead of adjusting for this configuration.

## Simulation

1 - create a sku with an unit multiplier
2 - set up installment options for it
3 - set up a installment related controller, such as $product.InstallmentValue
4 - the displayed data will be relative to a single unit, only.

## Workaround

implement a front-end customization to overwrite the original data being shown.
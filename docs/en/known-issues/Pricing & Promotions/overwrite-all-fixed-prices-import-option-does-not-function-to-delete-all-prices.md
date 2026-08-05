---
title: '"Overwrite All Fixed Prices" import option does not function to delete all prices'
slug: overwrite-all-fixed-prices-import-option-does-not-function-to-delete-all-prices
status: PUBLISHED
createdAt: 2026-07-29T22:31:52.000Z
updatedAt: 2026-08-05T16:42:39.000Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: overwrite-all-fixed-prices-import-option-does-not-function-to-delete-all-prices
locale: en
kiStatus: No Fix
internalReference: 1441146
---

## Summary

Currently, in the pricing import, the "Overwrite All Fixed Prices" import option does not function to delete all prices - at least one line of fixed price per sku must be informed so it can recognize the sku and delete all other prices, for this sku, aside from the informed price.

## Simulation

Try importing a fixed price table with overwrite fixed pices and only 1 sku. No otehr sku will have its prices deleted with this, hence, it doesnt work as a "massive fixed price deletion usability".

instead, the deletion functions as below:

 ![](https://vtexhelp.zendesk.com/attachments/token/Z6DNEJ5tdFTb3eLBfcEoBsnJq/?name=image.png)

## Workaround

create a "trash" price table to set mock fixed prices, this way, a line per sku will be informed and all other  valid price tables will be deleted instead.
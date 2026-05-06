---
title: 'Max Shipping Discount not updating priceTags'
slug: max-shipping-discount-not-updating-pricetags
status: PUBLISHED
createdAt: 2023-09-20T17:54:46.000Z
updatedAt: 2023-10-02T18:20:32.000Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: max-shipping-discount-not-updating-pricetags
locale: en
kiStatus: Backlog
internalReference: 904190
---

## Summary

##
Maximum shipping discount not returning price tags, when the seller tries to calculate the tax, the chk doesn't have the value to consider and consider the discount in the tax final value.

## Simulation

Create a maximum shipping discount and a tax
simulate a cart with both, you'll see that the price tag is not populated.

## Workaround

N/A
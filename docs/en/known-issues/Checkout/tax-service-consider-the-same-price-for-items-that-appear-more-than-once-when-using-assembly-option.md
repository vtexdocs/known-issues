---
title: 'Tax Service consider the same price for items that appear more than once when using Assembly Option'
slug: tax-service-consider-the-same-price-for-items-that-appear-more-than-once-when-using-assembly-option
status: PUBLISHED
createdAt: 2023-09-25T13:27:03.000Z
updatedAt: 2023-09-27T12:47:34.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: tax-service-consider-the-same-price-for-items-that-appear-more-than-once-when-using-assembly-option
locale: en
kiStatus: Fixed
internalReference: 906518
---

## Summary

When using Assembly Options, if the item is added again to the cart, it will appear twice and the Tax Service will consider only the price for that item that is first in the cart, causing tax divergence values when placing an order.

## Simulation

- Configure Tax Hub in an account;
- Configure Assembly Options;
- Add an item that was included in the Assembly Option to the cart;

## Workaround

N/A
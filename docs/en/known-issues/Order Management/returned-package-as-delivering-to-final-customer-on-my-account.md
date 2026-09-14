---
title: 'Returned package as delivering to final customer on my account'
slug: returned-package-as-delivering-to-final-customer-on-my-account
status: PUBLISHED
createdAt: 2021-08-18T22:25:39.000Z
updatedAt: 2026-09-14T22:56:04.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: returned-package-as-delivering-to-final-customer-on-my-account
locale: en
kiStatus: Fixed
internalReference: 415482
---

## Summary

There is a scenario where the returned package shows as delivering on **My Account > My Orders** page. It looks like more than one package is going to be delivered to the customer instead of showing that the package was already delivered to the customer and that a new package was generated symbolizing the return.

It can create some confusion for the final client because it looks like receiving more products and doesn’t show as fully delivered in the **My Orders** flow.

## Simulation

- Make an order with one product/package.
- Complete the order flow and mark as delivered.
- Try to return that item.
- It will generate a new package that represents the product return.
- So on My Orders page shows that returned package as a one more.
- The customer and the store admin user can be confused with the order status and flow detail.

## Workaround

There is no workaround available.
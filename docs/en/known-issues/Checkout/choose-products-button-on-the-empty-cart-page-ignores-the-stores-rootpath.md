---
title: "\"Choose products\" button on the empty cart page ignores the store's rootPath"
slug: choose-products-button-on-the-empty-cart-page-ignores-the-stores-rootpath
status: PUBLISHED
createdAt: 2021-01-12T18:39:44.000Z
updatedAt: 2026-09-17T16:17:53.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: choose-products-button-on-the-empty-cart-page-ignores-the-stores-rootpath
locale: en
kiStatus: No Fix
internalReference: 323515
---

## Summary

On stores that use rootPath, the "choose products" button on the empty cart page sends the buyer to the root domain instead of the path configured for that store, taking them out of the correct storefront.

## Simulation

1. On a store that uses rootPath, open the checkout with an empty cart.
2. Look at the "choose products" button on the empty cart page.
3. The button points to the root domain (e.g. www.store.com) instead of the store path (e.g. www.store.com/nl).

## Workaround

Customize that button on the front-end to correct its URL.
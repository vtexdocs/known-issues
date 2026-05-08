---
title: 'Attachments lost after item split when using checkout-graphql addToCart'
slug: attachments-lost-after-item-split-when-using-checkoutgraphql-addtocart
status: PUBLISHED
createdAt: 2026-05-08T21:48:53.000Z
updatedAt: 2026-05-08T21:48:53.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: attachments-lost-after-item-split-when-using-checkoutgraphql-addtocart
locale: en
kiStatus: Backlog
internalReference: 1404093
---

## Summary

Attachments applied via checkout-graphql’s addToCart may not persist on all item lines when the Checkout splits an item (e.g., due to promotions) after the initial add.

The visible symptom is that only one of the split sku keeps the attachment while the others lose it. This affects stores using GraphQL addToCart with item attachments and promotions that trigger a split.

## Simulation

- Create a promotion that can cause item split for the same SKU (for example, More for Less);
- Use GraphQL addToCart to add an SKU with required attachments/options and with a quantity that will split items in the cart (for example, 4 units and one of them receives a discount)

## Workaround

N/A
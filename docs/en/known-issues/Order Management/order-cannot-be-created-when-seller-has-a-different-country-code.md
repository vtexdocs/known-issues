---
title: 'Order cannot be created when seller has a different Country Code'
slug: order-cannot-be-created-when-seller-has-a-different-country-code
status: PUBLISHED
createdAt: 2023-03-03T16:02:05.000Z
updatedAt: 2026-09-14T22:50:19.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: order-cannot-be-created-when-seller-has-a-different-country-code
locale: en
kiStatus: Backlog
internalReference: 763955
---

## Summary

In a marketplace, when there is a seller configured with a different Country Code, the fulfillment service will consider the seller's Country Code when placing the order. It may generate an error if the seller's Country Code defines different mandatory fields than the marketplace's.

## Simulation

- Have a seller with a different Country Code;
- Assemble a cart with items from the seller;
- Finish the purchase; you will get an error message, and the order will not be placed.

## Workaround

Configure the same Country Code in the seller.
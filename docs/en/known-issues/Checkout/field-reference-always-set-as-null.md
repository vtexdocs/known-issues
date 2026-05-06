---
title: 'Field "reference" always set as null'
slug: field-reference-always-set-as-null
status: PUBLISHED
createdAt: 2023-04-26T22:31:26.000Z
updatedAt: 2023-04-26T22:32:52.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: field-reference-always-set-as-null
locale: en
kiStatus: Backlog
internalReference: 797989
---

## Summary

The field `reference` from the pickup point's address is always set as null even though it's registered in the pickup point API.

## Simulation

- Register a pickup point via API, including the field `address.reference`;
- Add an item to the cart;
- Perform a Get Order and check the field `pickupPoints.reference`, it's null.

## Workaround

N/A
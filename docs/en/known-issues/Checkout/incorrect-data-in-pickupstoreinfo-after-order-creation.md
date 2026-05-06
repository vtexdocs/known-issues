---
title: 'Incorrect data in pickupStoreInfo after order creation'
slug: incorrect-data-in-pickupstoreinfo-after-order-creation
status: PUBLISHED
createdAt: 2021-03-22T15:28:14.000Z
updatedAt: 2023-03-31T14:08:12.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: incorrect-data-in-pickupstoreinfo-after-order-creation
locale: en
kiStatus: Fixed
internalReference: 347155
---

## Summary

In some occasions, where we have 1 item with delivery option and the other item with pickup option. The `pickupStoreInfo` data is incorrectly filled after finishing the order.

Remembering that this occurrence is a little unusual, given that we have no more details, logs or other occurrences. Therefore getting to be inconclusive.

## Simulation

Inside the order information, the pick up store info it's incomplete with null information.

## Workaround

N/A
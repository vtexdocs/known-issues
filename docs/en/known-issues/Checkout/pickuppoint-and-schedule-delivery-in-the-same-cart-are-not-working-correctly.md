---
title: 'Pick-up-point and schedule delivery in the same cart are not working correctly'
slug: pickuppoint-and-schedule-delivery-in-the-same-cart-are-not-working-correctly
status: PUBLISHED
createdAt: 2021-12-06T19:35:32.000Z
updatedAt: 2023-06-16T21:13:58.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: pickuppoint-and-schedule-delivery-in-the-same-cart-are-not-working-correctly
locale: en
kiStatus: Backlog
internalReference: 482256
---

## Summary

The UI does not work correctly in a cart with more than one item with a delivery split in which one of the items is available for pick up and the others only for scheduled delivery.

The date for choosing pick-up items is set without problems. But the dates for the scheduled delivery do not behave as expected.

## Simulation

- Assemble a cart with at least two items where one of the items is available for pick up and the others only for scheduled delivery;
- In the shipping step, select Pick up in store and select a delivery window ;
- Try to select a delivery window for the schedule delivery.

## Workaround

N/A
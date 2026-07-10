---
title: 'Wrong warehouse assigned to item added via ChangeOrderV2 (FFM/SOS ShippingEnricher ignores Logistics’ DeliveryIds)'
slug: wrong-warehouse-assigned-to-item-added-via-changeorderv2-ffmsos-shippingenricher-ignores-logistics-deliveryids
status: PUBLISHED
createdAt: 2026-07-10T23:45:23.000Z
updatedAt: 2026-07-10T23:45:23.000Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slugEN: wrong-warehouse-assigned-to-item-added-via-changeorderv2-ffmsos-shippingenricher-ignores-logistics-deliveryids
locale: en
kiStatus: Backlog
internalReference: 1433311
---

## Summary

When a new item is added to an existing order through the post-purchase change flow, the system may save the item with the wrong warehouse assignment. The visible symptom is that the item is allocated to a warehouse that does not match the expected logistics response for that product. This affects scenarios with multi-warehouse fulfillment, especially when the added item should be routed differently from the items already present in the order.

## Simulation

There's no easy way to reproduce the scenario.

## Workaround

1. Avoid using the post-purchase change flow to add items that depend on a different warehouse routing than the items already present in the order.
2. If the item must be sold separately, create a new order instead of adding it to the existing one.
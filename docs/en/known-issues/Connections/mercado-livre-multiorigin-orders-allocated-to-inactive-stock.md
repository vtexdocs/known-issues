---
title: 'Mercado Livre Multi-Origin - orders allocated to inactive stock'
slug: mercado-livre-multiorigin-orders-allocated-to-inactive-stock
status: PUBLISHED
createdAt: 2026-05-07T22:32:34.000Z
updatedAt: 2026-05-07T22:32:34.000Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: mercado-livre-multiorigin-orders-allocated-to-inactive-stock
locale: en
kiStatus: Backlog
internalReference: 1403557
---

## Summary

Orders from Mercado Livre were created in VTEX allocated to a stock location that was disabled in the Multi-Origin mapping for the account.

## Simulation

VTEX account integrated with Mercado Livre using Multi-Origin.

1. The stock assignment was not configured in Multi-Origin.
The order was created in OMS using stock from a warehouse that is not properly assigned in Multi-Origin.

## Workaround

One alternative would be to remove the Mercado Livre trade policy from the docks that are not active in Multi-Origin.
This way, the checkout will not select them, preventing orders from being created with the incorrect warehouse.
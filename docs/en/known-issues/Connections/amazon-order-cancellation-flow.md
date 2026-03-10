---
title: 'Amazon Order cancellation flow'
slug: amazon-order-cancellation-flow
status: PUBLISHED
createdAt: 2026-03-10T20:11:06.794Z
updatedAt: 2026-03-10T20:11:06.794Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: amazon-order-cancellation-flow
locale: en
kiStatus: Backlog
internalReference: 588456
---

## Summary

1. When the order is canceled in Amazon we are not canceling in VTEX OMS.
Bridge logs “Order status is canceled on marketplace” but does not trigger a VTEX cancellation; if the VTEX order does not exist yet, only the reservation is canceled
2. When an order is canceled in the OMS, the order is not canceled in the marketplace.

## Simulation

1. In bridge orders menu, you will see the information that order was created, but when cancelled in Amazon is not reflecting in VTEX.
2. In the OMS, the order is canceled, but this cancellation isan't reflected in the marketplace.

## Workaround

1. Manually cancel the order in VTEX OMS when Amazon reports it as canceled.
2. Cancellation must be done in the marketplace.
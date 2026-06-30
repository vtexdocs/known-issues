---
title: 'Amazon Order cancellation flow'
slug: amazon-order-cancellation-flow
status: PUBLISHED
createdAt: 2022-05-30T22:12:14.000Z
updatedAt: 2026-06-30T21:04:57.000Z
contentType: knownIssue
productTeam: Marketplace Out
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace Out
slugEN: amazon-order-cancellation-flow
locale: en
kiStatus: Fixed
internalReference: 588456
---

## Summary

1. When the order is canceled in Amazon we aren't canceling in VTEX OMS. Bridge logs "Order status is canceled on marketplace" but doesn't trigger a VTEX cancellation; if the VTEX order doesn't exist yet, only the reservation is canceled.
2. When an order is canceled in the OMS, the order is not canceled in the marketplace.

## Simulation

1. In bridge orders menu, you will see the information that order was created, but when cancelled in Amazon isn't reflecting in VTEX.
2. In the OMS, the order is canceled, but this cancellation isn't reflected in the marketplace.

## Workaround

1. Manually cancel the order in VTEX OMS when Amazon reports it as canceled.
2. Cancellation must be done in the marketplace.



## **Internal Notes**
This card consolidates the work to align order cancellation between Amazon and VTEX OMS in both directions, as described in the Known Issue.
Scope (breakdown):


- Subtask Amazon → VTEX (OMS): cancellation originated on the marketplace must correctly reflect in VTEX (includes Bridge, OMS, and edge cases described in the subtask). **Completed.**
- Subtask OMS → Amazon: cancellation made in the OMS must reflect on the marketplace (Amazon). **Completed.**
---
title: 'Orders stuck in “Verifying Invoice”'
slug: orders-stuck-in-verifying-invoice
status: PUBLISHED
createdAt: 2026-09-23T17:44:32.000Z
updatedAt: 2026-09-23T17:45:50.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: orders-stuck-in-verifying-invoice
locale: en
kiStatus: No Fix
internalReference: 1465086
---

## Summary

In scenarios where the seller submits the invoice, the seller's order moves directly to the "Invoiced" status, while the marketplace order remains in the "Verifying Invoice" status. This happens because the marketplace needs to receive confirmation from the gateway that the order has been settled; if a gateway error prevents invoicing, the marketplace order gets stuck in "Verifying Invoice" while the seller's order remains "Invoiced." This makes it impossible to adjust the orders, as we are unable to either cancel or invoice the marketplace order in this situation.

## Simulation

There is not an easy way to reproduce the scenario.

## Workaround

We don't have a workaround for this scenario!
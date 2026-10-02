---
title: 'Native split with asymmetric financial charge across suborders settles less than the invoiced amount'
slug: native-split-with-asymmetric-financial-charge-across-suborders-settles-less-than-the-invoiced-amount
status: PUBLISHED
createdAt: 2026-10-02T20:46:00.000Z
updatedAt: 2026-10-02T20:46:00.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: native-split-with-asymmetric-financial-charge-across-suborders-settles-less-than-the-invoiced-amount
locale: en
kiStatus: Backlog
internalReference: 1469699
---

## Summary

In natively split orders (multiple suborders sharing a single payment transaction) paid in installments with a financial charge (interest), the charge can be applied through separate ChangeOrderV2 operations, one per suborder. When the resulting charge is **asymmetric** between suborders, the amount settled when the first suborder is invoiced can be **lower than the invoiced amount**. The remaining balance of the transaction may then fail to auto-settle repeatedly, leaving the transaction in `Settling`.

The settlement value is calculated by the Sales Order System (SOS), not by the payment provider. The calculation is expected to be correct only when the charge is symmetric across suborders.

Engineering confirmed this is a bug. The fix requires a significant refactor of the proportional-value calculation, and there is no ETA at the moment.

## Simulation

There's no easy way to reproduce the scenario.

## Workaround

There is no workaround available.
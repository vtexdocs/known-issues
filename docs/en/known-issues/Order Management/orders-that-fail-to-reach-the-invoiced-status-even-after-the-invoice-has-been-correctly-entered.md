---
title: 'Orders that fail to reach the "invoiced" status even after the invoice has been correctly entered.'
slug: orders-that-fail-to-reach-the-invoiced-status-even-after-the-invoice-has-been-correctly-entered
status: PUBLISHED
createdAt: 2026-03-03T19:43:59.866Z
updatedAt: 2026-03-03T19:43:59.866Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: orders-that-fail-to-reach-the-invoiced-status-even-after-the-invoice-has-been-correctly-entered
locale: en
kiStatus: Backlog
internalReference: 1372902
---

## Summary

We've identified that in some scenarios, the Marketplace order doesn't reach the "invoiced" status, remaining in "payment approved" or another status that isn't invoiced, even though the invoice is correctly filled out and the value matches the total order amount. The seller's order correctly progresses to the invoiced status.

We've seen that this scenario occurs due to contention when saving the invoice in SNO, requiring us to reindex the invoice in SNO, which then causes the order to reach the correct invoiced status.

## Simulation

We have no way to simulate this scenario!

## Workaround

We'll manually reindex the invoice in the SNO!
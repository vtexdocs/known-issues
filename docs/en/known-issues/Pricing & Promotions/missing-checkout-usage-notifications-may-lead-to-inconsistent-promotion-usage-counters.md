---
title: 'Missing Checkout usage notifications may lead to inconsistent promotion usage counters'
slug: missing-checkout-usage-notifications-may-lead-to-inconsistent-promotion-usage-counters
status: PUBLISHED
createdAt: 2026-07-16T05:03:17.000Z
updatedAt: 2026-07-16T05:03:17.000Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: missing-checkout-usage-notifications-may-lead-to-inconsistent-promotion-usage-counters
locale: en
kiStatus: Backlog
internalReference: 1435307
---

## Summary

The promotion usage counter may become inconsistent when promotion usage and cancellation notifications are not processed symmetrically. The promotion counter relies on two notifications:

- Checkout notifies when a promotion is used.
- OMS notifies when that usage must be reverted (for example, when an order is cancelled).

In some cases, cancellation notifications are processed even though no corresponding usage notification was previously registered. This causes the counter to be decremented without a matching increment, allowing the promotion to be applied more times than its configured usage limit.

The exact condition that leads to the missing usage notification is still under investigation.

## Simulation

Currently, it may not always be possible to reproduce this issue consistently:

1. Create a promotion with a limited number of uses.
2. Create orders that use the promotion and generate scenarios involving incomplete or cancelled orders.
3. Depending on whether the usage notification is successfully registered before the cancellation notification is processed, the promotion counter may become lower than the actual number of valid usages, allowing additional orders to use the promotion beyond its configured limit.

## Workaround

N/A
---
title: 'Promotion subscription with week, month and day frequency not working on recurring cycles'
slug: promotion-subscription-with-week-month-and-day-frequency-not-working-on-recurring-cycles
status: PUBLISHED
createdAt: 2024-01-12T17:00:28.000Z
updatedAt: 2024-06-20T14:26:21.000Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: promotion-subscription-with-week-month-and-day-frequency-not-working-on-recurring-cycles
locale: en
kiStatus: Backlog
internalReference: 965484
---

## Summary

When a subscription promotion is set in the subscription module, the merchant has the possibility of choosing the frequency this promo will apply on the subscription.

If the frequency chosen is "week" or "day" or "month" the promotion will not apply on the recurring cycles, despite the setup.

## Simulation

1. Create a subscription promotion that applies on the first and recurring cycles;
2. Select the week/day/month frequency
3. Check that the recurring orders do not have the subscription applied.

## Workaround

-
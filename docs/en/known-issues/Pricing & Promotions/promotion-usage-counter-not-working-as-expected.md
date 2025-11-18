---
title: 'Promotion usage counter not working as expected'
slug: promotion-usage-counter-not-working-as-expected
status: PUBLISHED
createdAt: 2025-11-18T22:18:56.047Z
updatedAt: 2025-11-18T22:18:56.047Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: promotion-usage-counter-not-working-as-expected
locale: en
kiStatus: Fixed
internalReference: 1090367
---

## Summary


The promotion usage counter is not working as expected due to a validation problem in the notifications of use. The Checkout is responsible for notifying the use of a promotion, while OMS is responsible for notifying cancellations (which should decrease the usage count). Duplicated notifications can occur in either scenario, and since these notifications are not properly validated, discrepancies arise and the counters can become inconsistent.
This issue impacts three different counters that must be fixed: (1) total promotion usage count, (2) promotion usage count per profile, and (3) total coupon usage count. The team has already released a fix for the first case (total promotion usage count), but the other two still require a fix.


#### Simulation



1. Create a promotion with a specific usage limit.
2. Apply the promotion to multiple orders via the Checkout system.
3. Cancel some of these orders through the OMS.
4.

Observe that the promotion usage counter may allow more orders to be created than intended.



Currently, it may not always be possible to reproduce this issue consistently, as the exact root cause of the duplicated notifications has not been determined.


#### Workaround


N/A



---
title: Promotion alerts missing in new Promotions UI
slug: promotion-alerts-missing-in-new-promotions-ui
status: PUBLISHED
createdAt: 2025-10-13T15:25:03.640Z
updatedAt: 2025-10-13T15:25:03.640Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: promotion-alerts-missing-in-new-promotions-ui
locale: en
kiStatus: Backlog
internalReference: 1306763
---

## Summary


In the new Promotions UI, merchants no longer receive the legacy “promotion alerts” that warned about high-impact actions (e.g., applying a promotion to the entire catalog).
As a result, users lack a confirmation or warning step and risk unintentionally applying promotions too broadly.
Accounts that rely on these alerts for operational safety are affected.
Engineering confirmed that a redesigned alert experience is being developed and will be added to the new UI, but its rollout depends on multiple teams and is not yet available.


#### Simulation



- Create or edit a promotion that should apply to the whole catalog.
- Attempt to save the configuration.
- Observe that there is only a data confirmation for saving, but no legacy-like “promotion alert” prompt that explicitly warns about broad scope changes.


#### Workaround



- Manually review the promotion scope before saving: double-check audience, products/categories, and conditions to avoid unintentionally applying global discounts.
- Coordinate high-impact changes during low-traffic or low-risk windows.



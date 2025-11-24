---
title: 'Formula promotions use incorrect freight value when shipping discounts are applied'
slug: formula-promotions-use-incorrect-freight-value-when-shipping-discounts-are-applied
status: PUBLISHED
createdAt: 2025-11-24T17:10:56.014Z
updatedAt: 2025-11-24T17:10:56.014Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: formula-promotions-use-incorrect-freight-value-when-shipping-discounts-are-applied
locale: en
kiStatus: Backlog
internalReference: 1329431
---

## Summary


When a cart contains both a shipping discount promotion (e.g. percentage off freight) and a formula-based promotion, the freight value used by the RnB to evaluate the formula is incorrect.
Internally, the shipping discount is applied twice during RnB’s freight normalization step, causing the formula to calculate the discount based on a freight value lower than it should be.
As a result:

- The formula promotion returns an incorrect value (typically lower).
- The discount appears inconsistent with any SLA returned by Logistics.
- This only affects promotions evaluated after freight discounts:  Formula, Tax (percentage based on freight), and Reward.


#### Simulation



1. Create a **shipping discount promotion** (e.g. 10% off freight).
2. Create a **formula-based promotion** using a freight expression, for example: `freight - floor(freight)`
3. Generate a cart that has more than one SLA, ensuring a shipping discount applies.
4. Observe that the calculated discount value from the formula promotion is incorrect.


#### Workaround


N/A




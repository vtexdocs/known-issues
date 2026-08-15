---
title: 'RoundingMode changes do not work for percentual discounts'
slug: roundingmode-changes-do-not-work-for-percentual-discounts
status: PUBLISHED
createdAt: 2025-03-12T19:53:08.000Z
updatedAt: 2026-08-15T23:19:03.000Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: roundingmode-changes-do-not-work-for-percentual-discounts
locale: en
kiStatus: Backlog
internalReference: 1192809
---

## Summary

Currently, when a user wants to control how a promotion rounds discounts, VTEX offers four rounding modes:

- `none` → default rounding
- `ceiling` → rounds discounts up (e.g., 14.56 → 14.6)
- `floor` → rounds discounts down (e.g., 14.56 → 14.5)
- `precise` → skips rounding of intermediate values and rounds only the final result

For **percentage discounts**, `ceiling` and `floor` do not work as expected. Both produce the same result as `none`. `precise` is not affected and works correctly for both **nominal and percentage discounts**.

This behavior is related to the calculation flow:

- `none`, `ceiling`, and `floor` round the unit discount first and then multiply it by the quantity. The `ceiling` and `floor` rounding logic is only triggered for nominal discounts. For percentage discounts, it is not triggered, so the calculation falls back to the default `none` behavior.
- `precise` multiplies the full, unrounded value first and rounds only the final result. This calculation path is independent of the discount type, so it works correctly for both nominal and percentage discounts.


Therefore, the issue is **limited to** `ceiling` **and** `floor` **when used with percentage discounts**. `precise` is not affected.

## Simulation

A rounding mode change must first be requested from the VTEX Support team. After the rounding mode is changed, create a promotion with a percentage discount and test the following all modes behavior. `none`, `ceiling`, and `floor` will produce the same result, while `precise` will produce a different result according to its own calculation logic. For comparison, the same test can be performed with a nominal discount, where `ceiling` and `floor` will apply the expected rounding.

## Workaround

N/A
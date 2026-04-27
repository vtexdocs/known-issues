---
title: 'Incorrect "coupon expired" messaged displayed in the checkout when using a promotion that "isArchived" = true'
slug: incorrect-coupon-expired-messaged-displayed-in-the-checkout-when-using-a-promotion-that-isarchived-true
status: PUBLISHED
createdAt: 2026-04-27T20:33:02.894Z
updatedAt: 2026-04-27T20:33:02.894Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: incorrect-coupon-expired-messaged-displayed-in-the-checkout-when-using-a-promotion-that-isarchived-true
locale: en
kiStatus: Backlog
internalReference: 1375848
---

## Summary

Currently, the promotions module allows users to copy the payload from one promotion to another and set it as active. However, if the original promotion has passed its validity period, it may have `"isArchived" = true`, and this information will also be carried over to the copied promotion.
In this scenario, even if the promotion is set as active, it may still be internally marked as archived, while appearing in the admin as a normal active promotion, which can be misleading.
This behavior may lead to inconsistencies when validating the promotion’s availability at Checkout, especially when using coupons to trigger the promotion.

## Simulation

1. Create a promotion and either archive it or let it pass its expiration date: https://developers.vtex.com/docs/api-reference/promotions-and-taxes-api#get-/api/rnb/pvt/calculatorconfiguration/-idCalculatorConfiguration-
2. Update its `"isActive"` property to `true` and associate it with a coupon.
3. Try using the coupon in checkout: an **"expired coupon"** message will be displayed.

## Workaround

Create a new promotion and coupon from scratch. By default, it will have `"isArchived" = false`. Do not attempt to reuse or modify the archived promotion.
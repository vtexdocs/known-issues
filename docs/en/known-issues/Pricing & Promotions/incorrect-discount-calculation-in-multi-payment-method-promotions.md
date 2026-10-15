---
title: 'Incorrect Discount Calculation in Multi Payment Method promotions'
slug: incorrect-discount-calculation-in-multi-payment-method-promotions
status: PUBLISHED
createdAt: 2026-10-15T20:15:33.000Z
updatedAt: 2026-10-15T20:16:07.000Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: incorrect-discount-calculation-in-multi-payment-method-promotions
locale: en
kiStatus: Backlog
internalReference: 1474203
---

## Summary

MPM (Multi Payment Method) promotions configured with `applyOn = ValuePaidWithExpectedMethods` may return an incorrect discount amount when the `AllowPaymentDetails` feature is enabled.
The issue is caused by a mismatch in monetary formats during the discount calculation: the item price is represented in cents, while the payment method value may be processed as a decimal amount. This can result in a discount significantly higher than expected.

## Simulation

1. Enable the `AllowPaymentDetails` feature.
2. Create an MPM promotion with a percentage discount and configure `applyOn = ValuePaidWithExpectedMethods`.
3. Add a product to the cart and select the expected payment method, such as Pix.
4. Simulate the promotion and inspect the request sent to RnB, particularly the `paymentMethods[].value` field.
5. Check the returned `priceTags` and compare the discount amount with the expected value.
6. Repeat the test with an equivalent promotion configured with `applyOn = FullPrice` and compare the results.

## Workaround

N/A
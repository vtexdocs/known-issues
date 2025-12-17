---
title: 'Inconsistency in single installment payment condition behavior at checkout'
slug: inconsistency-in-single-installment-payment-condition-behavior-at-checkout
status: PUBLISHED
createdAt: 2025-12-17T12:51:36.128Z
updatedAt: 2025-12-17T12:51:36.128Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: inconsistency-in-single-installment-payment-condition-behavior-at-checkout
locale: en
kiStatus: Backlog
internalReference: 605568
---

## Summary



When configuring payment conditions that include a single installment option, the checkout UI does not consistently reflect the installment configuration that will actually be applied by the Payments Gateway.
In scenarios where multiple payment rules are eligible, the gateway always applies the most restrictive rule (for example, based on issuer country and/or BIN bank), regardless of the installment option selected by the shopper in the checkout UI.
As a result, the checkout UI may display installment options that do not match the rule ultimately applied, or may display only the full amount while the transaction is processed with a single-installment payment condition.

Scenario 1 – Two payment conditions (single payment and single installment)
Configuration

Two active payment conditions for the same payment method:

Payment Condition A (Rule): Single payment (1x full amount), no restrictions

Payment Condition B (Rule): Single installment (10x, non–single payment), with additional restrictions (for example, issuer country and/or BIN bank)

Expected behavior

The checkout UI displays:

Single installment option

Regardless of the option selected in the UI (including selecting single payment), the transaction is processed using Condition B, since it is the most restrictive rule matched by the card BIN.

This is the current and expected behavior of the Payments Gateway, as rule prioritization is based on restriction level, not on the UI selection.

Scenario 2 – Single payment condition with one installment option
Configuration

A single payment condition configured with:

Only one installment option, different from single payment

Expected behavior

a. The checkout UI displays only the single payment option
b. Upon completing the purchase, the transaction is processed using the configured single-installment payment condition

The installment option is correctly returned in the paymentData response (visible via DevTools → Network).

The installment option is not displayed in the checkout installment dropdown.

Only the total amount (single payment) is shown to the shopper.

After completing the purchase, the transaction correctly reflects the configured single-installment option.


#### Simulation



- Configure payment conditions according to Scenario 1 or Scenario 2.
- Go to the checkout page and add any product to the cart.
- Complete the purchase and verify the payment rule applied to the transaction.


#### Workaround


There is no workaround.
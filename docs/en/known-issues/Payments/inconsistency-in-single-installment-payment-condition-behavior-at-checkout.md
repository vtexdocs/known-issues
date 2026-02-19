---
title: 'Inconsistency in single installment payment condition behavior at checkout'
slug: inconsistency-in-single-installment-payment-condition-behavior-at-checkout
status: PUBLISHED
createdAt: 2026-02-19T15:01:34.805Z
updatedAt: 2026-02-19T15:01:34.805Z
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

In scenarios where multiple payment rules are eligible, the gateway always applies the most restrictive rule, regardless of the installment option selected by the shopper in the checkout UI.

The Payments Gateway considers a rule to be “more restrictive” **only** based on the following attributes:

- **Issuer / issuer country**
- **Cobrand**
- **Card level**
- **BIN ranges**
- **Sales channel**

As a result, the checkout UI may display installment options that do not match the rule ultimately applied, or may display only the full amount while the transaction is processed with a single-installment payment condition.

Scenario 1 – Two payment conditions (single payment and single installment)
Configuration

Two active payment conditions for the same payment method:

Payment Condition A (Rule): Single payment (1x full amount), no restrictions

Payment Condition B (Rule): Single installment (10x, non–single payment), with additional restrictions, such as:

- Issuer / issuer country
- BIN bank / BIN ranges
- Cobrand
- Card level
- Sales channel

Expected behavior

The checkout UI displays:

Single installment option

Regardless of the option selected in the UI (including selecting single payment), the transaction is processed using Condition B, since it is the most restrictive rule matched by the card BIN and the other attributes listed above.

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


**Scenario 1** - workaround is to align the restriction level between the single payment and the single installment conditions.

Instead of having:

Payment Condition A → 1x (full amount), no restrictions

Payment Condition B → 10x, with additional restrictions (Issuer / issuer country, BIN bank / BIN ranges, Cobrand, Card level, Sales channel, etc.)

The merchant can configure:

Payment Condition A → 1x (full amount), with the same restrictions applied in Condition B

Payment Condition B → 10x, with those same restrictions

**Scenario 2** - There is no workaround.
---
title: 'Cash (1x) transactions may be recorded under a payment rule that does not offer the 1x installment option'
slug: cash-1x-transactions-may-be-recorded-under-a-payment-rule-that-does-not-offer-the-1x-installment-option
status: PUBLISHED
createdAt: 2020-10-02T02:09:14.000Z
updatedAt: 2026-08-05T14:54:44.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: cash-1x-transactions-may-be-recorded-under-a-payment-rule-that-does-not-offer-the-1x-installment-option
locale: en
kiStatus: Backlog
internalReference: 292781
---

## Summary

When a shopper pays in cash (1 installment, no interest) and more than one payment rule matches the card's channel/issuer/cobrand/level filters, the Payments Gateway can record the transaction against a rule that does not actually offer the 1x installment option, instead of the generic rule that does.

Expected: the rule name (`ruleName`) recorded on the payment should be a rule whose configured range genuinely includes 1x.
Actual: on a 1x purchase, the rule selector adds _every_ filter-passing rule to the candidate list regardless of whether its installment range includes 1x; the subsequent issuer-priority sort then favors the issuer-specific rule over the generic one, so its name — not the rule actually used to compute installments/interest — gets persisted. In most observed cases this is a **labeling defect only**: the installments, interest rate, and charged value are correct, and when the
candidate rules route to the same affiliation/connector there is no routing or financial impact.

## Simulation

**Prerequisites:** two active payment rules for the same channel and card brand, both valid for credit card:

- Rule A ("generic"): any issuer, installments 1–12, no interest
- Rule B ("issuer-specific"): specific issuer/bank, installments 13–21, with interest



1. Place an order and pay with a credit card configured in Rule B.
2. At checkout, select 1 installment (cash / no interest).
3. Complete the purchase (the payment should reach `approved` status).
4. In Admin, open the transaction's payment details ("+ Information") and inspect the `AvailableRules` field — both Rule A and Rule B IDs will be listed as candidates, even though Rule B's configured range (13–21) does not include 1x.
5. Check `ruleName` on the payment — it will show Rule B (the issuer-specific one), not Rule A.


**Verification step:** confirm `installments = 1`, `installmentsInterestRate = 0`, and `installmentsValue` equal to the full order value.
This proves Rule A was the one actually applied for charging purposes, while the recorded `ruleName` is wrong — distinguishing this defect from a real misrouting, where the charged terms would also be incorrect

## Workaround

- **Immediate/operational:** configure the intended 1x-capable rule (Rule A) as the **default rule** for the affiliation. This reduces — but does not eliminate — the chance that an issuer-specific rule without 1x support gets recorded when candidates tie.
- **Structural fix (per-store, already built):** escalate to the Payments product team requesting the account be enabled for the existing structural fix. A corrected rule-selection path is already available and can be turned on per store by the product team.
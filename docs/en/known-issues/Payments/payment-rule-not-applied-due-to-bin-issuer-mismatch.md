---
title: 'Payment rule not applied due to BIN issuer mismatch'
slug: payment-rule-not-applied-due-to-bin-issuer-mismatch
status: PUBLISHED
createdAt: 2026-05-21T23:23:21.000Z
updatedAt: 2026-05-21T23:25:12.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: payment-rule-not-applied-due-to-bin-issuer-mismatch
locale: en
kiStatus: Backlog
internalReference: 1410739
---

## Summary

Payment rules that target a specific issuer (country, bank or card level) fail to apply when the shopper’s card is resolved by Checkout using an 8-digit BIN whose issuer information differs from the corresponding 6-digit BIN record in VTEX’s BIN database. This affects carts where there are payment rules available for both BIN versions.

## Simulation

**Prerequisites:**

- Have BIN records exist with issuer mismatch (country, bank or card level) between its 6-digit and 8-digit versions
- Merchant have payment rule (A) conditioned by issuer (country, bank or card level) that matches 6-digit BIN current record
- Merchant have another payment rule (B) with fewer or different restrictions that matches 8-digit BIN current record

**Steps:**

1. Configure a payment rule (A) with special conditions using the bank issuer information (country, bank, card level);
2. In Checkout, input a card number that matches a 6-digit BIN covered by the rule (A)
3. Then, input a card number that matches the 8-digit version of the same BIN;
4. Observe that Checkout prioritizes the 8-digit BIN and evaluates rules against the 8-digit issuer name, which does not match the payment rule (A). The expected rule (A) is not applied; instead a broader rule (B) is selected.

## Workaround

As a quick workaround, merchant may create a similar payment rule with the same bank issuer information as the 6-digit BIN version

**Recommended**: Open a ticket for VTEX support update and standardize both 6-digit and 8-digit BIN information, submitting the required information: https://help.vtex.com/docs/tutorials/adding-bin-information.
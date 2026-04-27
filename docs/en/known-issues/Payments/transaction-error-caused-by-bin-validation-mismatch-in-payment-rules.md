---
title: 'Transaction error caused by BIN validation mismatch in payment rules'
slug: transaction-error-caused-by-bin-validation-mismatch-in-payment-rules
status: PUBLISHED
createdAt: 2026-04-27T20:31:14.759Z
updatedAt: 2026-04-27T20:31:14.759Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transaction-error-caused-by-bin-validation-mismatch-in-payment-rules
locale: en
kiStatus: Backlog
internalReference: 1398229
---

## Summary

When payment rules are configured using card issuer conditions, the checkout validation can consider both 8-digit or 6-digit BIN configurations, but the Gateway still resolves the BIN using only the first 6 digits. If a certain BIN is registered in VTEX database using 8 digits, and there is no broader and equivalent with 6 digits, the checkout correctly identifies the payment condition, but the transaction then fails because the 6-digit BIN does not match any configured payment rule. The error returned in the transaction interactions is `“There is no payment condition that matches with the given payment parameters...”`.

## Simulation

1. Configure a payment rule with special conditions using the bank issuer information (country, bank, card level);
2. Choose a card number with the 8-digit BIN registered in VTEX database, but not the 6-digit version;
3. The checkout identifies the payment rule as a valid option, but the transaction fails because the 6-digit BIN used does not match the rule's parameters.

## Workaround

Open a ticket for VTEX support to add the respective 6-digit BIN, submitting the required information: https://help.vtex.com/docs/tutorials/adding-bin-information.
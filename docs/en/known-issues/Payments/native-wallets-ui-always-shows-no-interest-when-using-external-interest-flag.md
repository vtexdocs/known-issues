---
title: Native wallets UI always shows 'no interest' when using external interest flag
slug: native-wallets-ui-always-shows-no-interest-when-using-external-interest-flag
status: PUBLISHED
createdAt: 2025-10-16T20:59:52.284Z
updatedAt: 2025-10-16T20:59:52.284Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: native-wallets-ui-always-shows-no-interest-when-using-external-interest-flag
locale: en
kiStatus: Backlog
internalReference: 1243648
---

## Summary



When using a native wallet such as Google Pay with a credit card rule that has the "Third-party interest rate" option enabled, the interest value is not calculated or displayed during checkout. Displaying the text `no interest` in the options.

Additionally, if both "Third-party interest" and a standard interest rate are set, the installment amount updates according to the standard rate, but the checkout incorrectly indicates `no interest`.


#### Simulation




1. Activate the wallet (like GooglePay) payment
2. Add a credit card rule with an interest rate
3. Flag the Third-party interest rate option
4. Go to checkout and check the payment options for the wallet


#### Workaround


There is no workaround available.




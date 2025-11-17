---
title: 'In Payout Split the recipiens object is not sent in the Apple Pay payment method'
slug: in-payout-split-the-recipiens-object-is-not-sent-in-the-apple-pay-payment-method
status: PUBLISHED
createdAt: 2025-11-17T18:45:31.242Z
updatedAt: 2025-11-17T18:45:31.242Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: in-payout-split-the-recipiens-object-is-not-sent-in-the-apple-pay-payment-method
locale: en
kiStatus: Fixed
internalReference: 1094952
---

## Summary


It is not possible to build/send a recipient's object for the Apple Pay payment method, even with all the necessary settings enabled.


#### Simulation



1. Enable splitting of receivables in a connector that allows splitting using the Apple Pay payment method.
2. Purchase an item from the seller, who has a commission.
3. Check that in the process in which the recipients should be sent, in the authorization or capture, the object does not exist.


#### Workaround


N/A




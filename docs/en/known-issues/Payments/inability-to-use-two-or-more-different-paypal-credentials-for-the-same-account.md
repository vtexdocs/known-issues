---
title: 'Inability to use two or more different PayPal credentials for the same account.'
slug: inability-to-use-two-or-more-different-paypal-credentials-for-the-same-account
status: PUBLISHED
createdAt: 2025-11-14T19:28:48.431Z
updatedAt: 2025-11-14T19:28:48.431Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: inability-to-use-two-or-more-different-paypal-credentials-for-the-same-account
locale: en
kiStatus: Backlog
internalReference: 459704
---

## Summary


When the user registers two different affiliations in the same account using PayPalPlus, the platform does not update the cache for when there is a change in a payment rule, that is, it is possible to use only one credential per account.


#### Simulation


Register two different affiliations with different credentials and create rules considering these two affiliations.
Close two purchases, each with one of the rules, and in the transaction payload you can see that despite entering the correct rules, the merchant_id (identification of the account in which the money will fall) is the same.


#### Workaround


N/A




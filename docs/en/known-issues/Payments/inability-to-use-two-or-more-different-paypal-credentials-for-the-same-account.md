---
title: 'Inability to use two or more different PayPal credentials for the same account.'
id: 3cVh2SbvToH8yGOOYcWgDB
status: PUBLISHED
createdAt: 2022-03-03T18:39:24.442Z
updatedAt: 2024-02-16T20:25:01.876Z
publishedAt: 2024-02-16T20:25:01.876Z
firstPublishedAt: 2022-03-03T18:39:25.004Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: inability-to-use-two-or-more-different-paypal-credentials-for-the-same-account
locale: en
kiStatus: No Fix
internalReference: 459704
---

## Summary


When the user registers two different affiliations in the same account using PayPalPlus, the platform does not update the cache for when there is a change in a payment rule, that is, it is possible to use only one credential per account.


##

## Simulation


Register two different affiliations with different credentials and create rules considering these two affiliations.
Close two purchases, each with one of the rules, and in the transaction payload you can see that despite entering the correct rules, the merchant_id (identification of the account in which the money will fall) is the same.


##

## Workaround


N/A






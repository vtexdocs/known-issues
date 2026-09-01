---
title: "My Cards - Verification transaction (AV) denied due to phone field always null, even when customer's phone is registered in profile"
slug: my-cards-verification-transaction-av-denied-due-to-phone-field-always-null-even-when-customers-phone-is-registered-in-profile
status: PUBLISHED
createdAt: 2026-09-01T22:33:47.000Z
updatedAt: 2026-09-01T22:36:41.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: my-cards-verification-transaction-av-denied-due-to-phone-field-always-null-even-when-customers-phone-is-registered-in-profile
locale: en
kiStatus: Backlog
internalReference: 1455107
---

## Summary

When a shopper saves a new credit card through the "My Cards" tab in My Account, the small verification charge generated may be denied by the payment provider due to a missing phone number, even when the shopper already has a phone number saved on their account.

Unlike other cases where the transaction fails simply because the customer's registration is incomplete, here the phone number is saved on the customer's account, but it is not being correctly included when the card verification charge is created.

## Simulation

1. Go to `https://.myvtex.com/account#/profile` and fill in the shopper's phone number.
2. Go to `https://.myvtex.com/account#/cards/new` and add a new card.
3. Check the verification transaction generated in the Payments admin, the `phone` field will still show as `null`, even though it was filled in step 1. Depending on the connector/acquirer, this missing field may cause the transaction to be denied.

## Workaround

There is no workaround.
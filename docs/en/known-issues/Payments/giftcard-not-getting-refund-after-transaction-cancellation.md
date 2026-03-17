---
title: 'Giftcard not getting refund after transaction cancellation'
slug: giftcard-not-getting-refund-after-transaction-cancellation
status: PUBLISHED
createdAt: 2026-03-17T20:51:55.721Z
updatedAt: 2026-03-17T20:51:55.721Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: giftcard-not-getting-refund-after-transaction-cancellation
locale: en
kiStatus: Backlog
internalReference: 491195
---

## Summary

When the payment method is a gift card and an error occurs during the order placement process, causing the order to remain incomplete, the gift card balance is not refunded after the transaction is canceled.

This results in the gift card balance being deducted even though the debit operation technically failed. Since the gift card couldn't be properly debited, the transaction remains incomplete. However, upon reviewing the gift card statement, it's possible to see that the debit was processed successfully, despite the error message displayed in the interactions.

This occurs because the system utilizes multiple databases to register gift card transactions, which can result in inconsistencies between the user's statement and the data returned by the API.
The most common scenario is that the gift card is debited first, and then the transaction is saved. If a failure occurs during this second step, the debit is not rolled back, resulting in the inconsistency

## Simulation

It's not possible to simulate

## Workaround

Refund manually via the Gift Card UI.
In cases where the giftcard has the configuration `Reloadable: No`, the balance cannot be changed using the UI. Therefore, the refund must be made using the GiftCard Transaction API.
---
title: 'Gift card balance changed even though the transaction request failed'
slug: gift-card-balance-changed-even-though-the-transaction-request-failed
status: PUBLISHED
createdAt: 2021-12-20T21:59:01.000Z
updatedAt: 2026-10-17T00:48:20.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: gift-card-balance-changed-even-though-the-transaction-request-failed
locale: en
kiStatus: Backlog
internalReference: 491195
---

## Summary

When a transaction is created on a using gift card (debit or credit), the API can return an error even though the gift card balance has already been changed.

This happens because the transaction is registered in two steps:

1. The gift card balance is updated (debit or credit).
2. The transaction record is saved.

If the second step fails, the API returns an error (usually HTTP 400 with `A task was canceled.`), but the balance change from the first step is not rolled back.


- **Order placement:** the gift card is debited, the payment fails and the order stays incomplete, but the balance is not refunded after the transaction is cancelled.
- **Retry:** When the transaction is retried after this error, even with the same `requestId`, it is processed again and the gift card is credited or debited more than once.
- **Transaction list:** transactions affected by this issue affect gift card balance, but are not returned by `GET /api/giftcards/{giftCardId}/transactions`.

## Simulation

It's not possible to simulate

## Workaround

- **Debit:** refund manually via the Gift Card UI. If the gift card has `Reloadable: No`, the refund must be made through the GiftCard Transaction API.
- **Credit:** do not automatically retry when a transaction request returns an error or times out. Check the gift card balance before retry, and reverse duplicate credits that were already applied.
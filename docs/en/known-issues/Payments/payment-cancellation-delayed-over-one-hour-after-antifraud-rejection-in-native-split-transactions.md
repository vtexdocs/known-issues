---
title: 'Payment cancellation delayed over one hour after antifraud rejection in native split transactions'
slug: payment-cancellation-delayed-over-one-hour-after-antifraud-rejection-in-native-split-transactions
status: PUBLISHED
createdAt: 2026-11-03T22:48:20.000Z
updatedAt: 2026-11-03T22:48:20.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: payment-cancellation-delayed-over-one-hour-after-antifraud-rejection-in-native-split-transactions
locale: en
kiStatus: Backlog
internalReference: 1480709
---

## Summary

When the antifraud rejects a transaction that uses native split, the card authorization is not cancelled at the payment provider at the moment of the rejection. The transaction stays in `Cancelling` and the payment stays `Authorized`, so the amount remains held on the shopper's card and the provider only receives the cancellation request 1 to 2 hours later, occasionally longer. It happens when native split is enabled on the transaction (affiliation sending split recipients), the post-purchase mode is `Retained` or `Total`, and the payment has not been captured yet. It was observed with ClearSale and Konduto rejections. The same rejection on a transaction without native split is cancelled at the provider within seconds.

## Simulation

1. Configure an affiliation with native split, sending the split recipients, on an account whose post-purchase mode is `Retained` or `Total`;
2. Configure an antifraud provider (e.g. ClearSale) for the payment method;
3. Place an order with more than one seller and get the payment authorized, without capturing it;
4. Have the antifraud reject the transaction;
5. The transaction moves to `Cancelling` with the payment still `Authorized`, and the cancellation only reaches the payment provider 1 to 2 hours later.

## Workaround

There is no workaround available.
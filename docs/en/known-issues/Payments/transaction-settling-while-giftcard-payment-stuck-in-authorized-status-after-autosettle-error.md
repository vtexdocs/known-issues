---
title: 'Transaction settling while Giftcard payment stuck in authorized status after autosettle error'
slug: transaction-settling-while-giftcard-payment-stuck-in-authorized-status-after-autosettle-error
status: PUBLISHED
createdAt: 2025-03-28T18:39:37.000Z
updatedAt: 2026-05-21T23:30:49.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transaction-settling-while-giftcard-payment-stuck-in-authorized-status-after-autosettle-error
locale: en
kiStatus: Backlog
internalReference: 1201336
---

## Summary

Gift card payments get stuck in `authorized` status after a settlement failure in GiftcardHub (HTTP 400 or other errors). Even after retries triggered by SOS, the payment status doesn't update, and the settlement never completes.

The message in the transaction interactions is:

    Message: Unknown Error on AutoSettleA chamada a 'https://janus-payments-link.vtex.com.br//giftcardproviders//giftcards//transactions//settlements' retornou o status HTTP '()'.


The problem only happens in the **Total settlement mode (platform default):** When a transaction has multiple payment methods, if the Gift Card settlement fails on the first attempt, the other payment method may already be captured (auto-settled). On retries, the SOS sends the full invoice value, but the gateway now only covers the remaining Gift Card balance. The gateway logs `Transaction settlement started`.

This happens because the requested value exceeds the remaining capturable balance. The flow aborts before calling the Hub, no `PaymentWorkFlowChangeStatus`, no Hub call, and no `Transaction settlement finished` is logged.

## Simulation

Pre-requisites:

1. Be in Total capture mode
2. No automatic or early capture configured


Steps:

1. Create an order/transaction with a gift card + another payment method
2. Approve both payments
3. Force the gift card payment capture to fail
4. Successfully capture the other payment method
5. Call the gateway capture with the total value and receive the error:
6.

    { "error": { "code": "1402", "message": "Settlement requested value (xx.xx) should be less than or equal to remaining amount to pay (xx.xx), which must be different from 0.", "exception": null }}

## Workaround

To avoid this error entirely, the merchant can choose to change the capture type to Hold or Partial mode.
Please review each of these modes before enabling: https://help.vtex.com/docs/tutorials/payment-settlement-types

Another way to avoid the issue is to enable automatic or early capture on the connector.
We recommend a `delayToAutoSettle` or `delayToAutoSettleAfterAntifraud` of 3600 seconds (1h), but the important thing is that it is shorter than the typical order invoicing time:
https://help.vtex.com/docs/tutorials/configuring-maximum-automatic-payment-settlement-time-frame

Obs: It is necessary that the merchant checks with the provider whether it is possible to set those fields.

If the merchant does not wish to implement any of the changes above, please open a ticket requesting a status update.
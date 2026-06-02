---
title: 'Giftcard Hub timeout returned as 401 Unauthorized'
slug: giftcard-hub-timeout-returned-as-401-unauthorized
status: PUBLISHED
createdAt: 2026-06-03T00:09:25.000Z
updatedAt: 2026-06-03T00:09:25.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: giftcard-hub-timeout-returned-as-401-unauthorized
locale: en
kiStatus: Backlog
internalReference: 1416045
---

## Summary

When a request to the Giftcard Hub provider times out, the Giftcard Hub returns a `401 Unauthorized` error to the requester instead of an appropriate timeout-related status code. This misleading response makes it difficult to correctly diagnose the root cause of payment failures involving gift cards.

The errors observed on the interaction transaction log are in the following routes:

- `https://janus-payments-link.vtex.com.br//giftcardproviders/{provider}/giftcards/{giftcard}`
- `https://janus-payments-link.vtex.com.br//giftcardproviders`

## Simulation

Any checkout flow using a gift card via the Giftcard Hub where the provider's response exceeds 15 seconds.

**Steps to reproduce:**

1. Add a product to the cart and proceed to checkout.
2. At the payment step, select a gift card as the payment method.
3. Complete the checkout so that the Giftcard Hub sends a request to the gift card provider.
4. If the provider does not respond within **15 seconds**, the Giftcard Hub cancels the request and returns `401 Unauthorized` instead of a timeout-related error.
5. Check the Giftcard logs for the following message to confirm the root cause:

    The request was canceled due to the configured HttpClient.Timeout of 15 seconds elapsing.

## Workaround

There is no workaround available.
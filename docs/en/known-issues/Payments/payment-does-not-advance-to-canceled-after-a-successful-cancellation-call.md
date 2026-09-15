---
title: 'Payment does not advance to Canceled after a successful cancellation call'
slug: payment-does-not-advance-to-canceled-after-a-successful-cancellation-call
status: PUBLISHED
createdAt: 2020-12-14T22:45:27.000Z
updatedAt: 2026-09-15T17:46:33.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: payment-does-not-advance-to-canceled-after-a-successful-cancellation-call
locale: en
kiStatus: No Fix
internalReference: 316125
---

## Summary

A cancellation/refund is requested on a transaction; the eRede REST connector accepts it and returns success, but the payment never transitions to Canceled — it stays in its pre-cancellation status indefinitely. The gateway logs the successful connector response in the transaction interactions and then stops, without completing the state transition.

## Simulation

Not reproducible on demand — the failure depends on the connector's asynchronous cancellation response in a live transaction, with no deterministic trigger identified.

To confirm a case is this KI, check the transaction:


1. Affiliation is eRede REST (`erederest`).
2. A `Cancel Request Url` interaction to `api.userede.com.br/erede/v1` exists.
3. The paired response reads `HttpStatusCode:Accepted` with `"returnCode":"360"`.
4. No status-change interaction follows it, and the payment is still in its pre-cancellation status.

## Workaround

N/A
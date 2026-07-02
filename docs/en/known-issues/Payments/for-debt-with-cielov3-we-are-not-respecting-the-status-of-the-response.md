---
title: 'For debt with CieloV3 we are not respecting the status of the response'
slug: for-debt-with-cielov3-we-are-not-respecting-the-status-of-the-response
status: PUBLISHED
createdAt: 2021-05-11T23:59:02.000Z
updatedAt: 2026-07-02T15:58:20.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: for-debt-with-cielov3-we-are-not-respecting-the-status-of-the-response
locale: en
kiStatus: No Fix
internalReference: 367284
---

## Summary

When a debit transaction is processed through CieloV3 and Cielo returns a "waiting for response" status in the second authorization callback, VTEX incorrectly interprets it as a denial and cancels the transaction. As a result, the customer's payment is rejected even though it may still be in processing on Cielo's side.

## Simulation

Unable to reproduce on demand. The behavior depends on Cielo returning a specific interim status during the authorization flow, which cannot be forced externally.

## Workaround

Not available.
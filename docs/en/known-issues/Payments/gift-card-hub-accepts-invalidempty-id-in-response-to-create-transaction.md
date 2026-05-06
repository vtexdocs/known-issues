---
title: 'Gift Card HUB accepts Invalid/Empty ID in response to create transaction'
slug: gift-card-hub-accepts-invalidempty-id-in-response-to-create-transaction
status: PUBLISHED
createdAt: 2023-07-05T12:50:22.000Z
updatedAt: 2023-07-05T12:50:49.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: gift-card-hub-accepts-invalidempty-id-in-response-to-create-transaction
locale: en
kiStatus: Backlog
internalReference: 855864
---

## Summary

Our gift card provider protocol documentation specifies that the create transaction API must include a valid ID in the response. However, the current protocol implementation allows providers to respond to this request with either an empty or invalid ID. As a result, when attempting to settle the payment, the transaction becomes stuck because the required ID is missing. This leads to an error being thrown and the transaction remaining stuck in the process.

## Simulation

Respond to the create transaction call with an invalid ID and try to finish a transaction.

## Workaround

N/A
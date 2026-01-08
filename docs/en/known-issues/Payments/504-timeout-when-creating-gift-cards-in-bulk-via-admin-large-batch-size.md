---
title: '504 timeout when creating gift cards in bulk via Admin (large batch size)'
slug: 504-timeout-when-creating-gift-cards-in-bulk-via-admin-large-batch-size
status: PUBLISHED
createdAt: 2026-01-08T12:39:32.393Z
updatedAt: 2026-01-08T12:39:32.393Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: 504-timeout-when-creating-gift-cards-in-bulk-via-admin-large-batch-size
locale: en
kiStatus: Backlog
internalReference: 1348204
---

## Summary


When creating gift cards in batches from the Admin, the request can time out and return HTTP 504 during large batches. The visible symptom is a 504 error after submitting the bulk creation form; some or none of the gift cards may still be created in the background. This affects merchants using the Admin bulk creation flow for gift cards, especially with high volumes.


#### Simulation



1. Open the giftcard creation batch page
2. Use the batch creation feature to generate a large batch of gift cards (around or above ~250)
3. Submit the creation. Observe that the Admin returns a 504 gateway timeout after waiting more than ~30 seconds.


#### Workaround


Reduce batch size and retry:

- Split the bulk creation into smaller chunks (e.g., 50–100 per run) to avoid UI timeouts.



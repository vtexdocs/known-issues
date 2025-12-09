---
title: 'List Giftcard transactions API returning empty or incomplete'
slug: list-giftcard-transactions-api-returning-empty-or-incomplete
status: PUBLISHED
createdAt: 2025-12-09T14:44:47.519Z
updatedAt: 2025-12-09T14:44:47.519Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: list-giftcard-transactions-api-returning-empty-or-incomplete
locale: en
kiStatus: Backlog
internalReference: 384430
---

## Summary


Get Giftcard Transaction and Get GiftCard from GiftCard Provider API endpoints could return an empty response or miss some operations, like credit or debit, on the list.


#### Simulation



1. In an account with native Giftcards, choose a transaction already paid with a gift card
2. Copy the giftcardId and call the Get Giftcard Transaction or the Get GiftCard from GiftCard Provider endpoint
3. The response will be empty or incomplete


#### Workaround


N/A




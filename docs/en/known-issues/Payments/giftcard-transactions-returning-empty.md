---
title: 'Giftcard transactions returning empty'
slug: giftcard-transactions-returning-empty
status: PUBLISHED
createdAt: 2025-11-25T11:09:44.725Z
updatedAt: 2025-11-25T11:09:44.725Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: giftcard-transactions-returning-empty
locale: en
kiStatus: Backlog
internalReference: 384430
---

## Summary


Get Giftcard Transaction and Get GiftCard from GiftCard Provider API endpoints always return an empty response


#### Simulation



1. In an account with native Giftcards, choose a transaction already paid with a gift card
2. Copy the giftcardId and call the Get Giftcard Transaction or the Get GiftCard from GiftCard Provider endpoint
3. The response will be empty


#### Workaround


N/A




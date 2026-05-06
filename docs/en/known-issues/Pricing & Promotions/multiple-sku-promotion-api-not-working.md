---
title: 'Multiple Sku Promotion API not working'
slug: multiple-sku-promotion-api-not-working
status: PUBLISHED
createdAt: 2023-01-09T21:17:29.000Z
updatedAt: 2024-10-04T16:47:50.000Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: multiple-sku-promotion-api-not-working
locale: en
kiStatus: No Fix
internalReference: 729990
---

## Summary

Despite the success return info on the APIs and the email, the promotion is not created on the admin (create API) or actually updated (update API).

API docs:
https://developers.vtex.com/docs/api-reference/promotions-and-taxes-api#post-/api/rnb/pvt/import/calculatorConfiguration
https://developers.vtex.com/docs/api-reference/promotions-and-taxes-api#put-/api/rnb/pvt/import/calculatorConfiguration/-promotionId-

## Simulation

1. Followed the steps on the docs mentioned above to create/update multiple sku promotion;
2. Received a confirmation email about the promotion being created or a success status code on the API, like 202.
3. Check on admin that the promotion was never created/updated.

## Workaround

No workaround.
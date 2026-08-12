---
title: 'Timeout returned when deleting some collections through API'
slug: timeout-returned-when-deleting-some-collections-through-api
status: PUBLISHED
createdAt: 2026-08-13T00:42:15.000Z
updatedAt: 2026-08-13T00:50:49.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: timeout-returned-when-deleting-some-collections-through-api
locale: en
kiStatus: Backlog
internalReference: 1447421
---

## Summary

When deleting some collections through the Delete Collection API, the API may return a 500 response code alongside an execution time higher than ~15 seconds. When looking at the collection attempted to be deleted, it probably won't have a lot of products, but then when looking at the subcollections associated with the collection, there will be a lot of registers, specifically one for each SKU associated in the subcollection. Subcollections containing a high quantity of SKUs can cause the deletion process to take more time than expected and internally fail due to a timeout.

## Simulation

- Create and add products to a collection;
- Add many products that have more than 1 SKU (reaching an amount of more than 12k SKUs, for example);
- Try to delete the collection through the Delete Collection API;
- The API will return a 500 response and an execution time of around 15-20 seconds until the failed attempt.

## Workaround

Before using the Delete Collection endpoint, delete all the subcollections inherent to the collection ID you're deleting. By removing all the subcollections from the collection context, the deletion process won't take that much longer and will not fail with a timeout.
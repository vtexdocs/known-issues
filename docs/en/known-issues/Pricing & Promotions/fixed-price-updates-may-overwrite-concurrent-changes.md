---
title: 'Fixed Price updates may overwrite concurrent changes'
slug: fixed-price-updates-may-overwrite-concurrent-changes
status: PUBLISHED
createdAt: 2026-09-09T15:50:21.000Z
updatedAt: 2026-09-09T15:50:21.000Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: fixed-price-updates-may-overwrite-concurrent-changes
locale: en
kiStatus: Backlog
internalReference: 1458558
---

## Summary

When multiple fixed-price updates for the same SKU are sent concurrently or in a short sequence, a race condition may occur in the fixed-price update flow.
The requests may read the same or an outdated snapshot of the SKU's `fixedPrices` array and subsequently overwrite the entire array with stale data. As a result, a fixed price update from one request may unintentionally overwrite or remove changes made by other concurrent requests.
This can cause price updates to be lost, including prices configured for different trade policies, even though the API requests return successfully and there is no explicit deletion operation recorded for the affected price.

## Simulation

1. Select a SKU with fixed prices configured for multiple trade policies.
2. Send multiple fixed-price update requests for the same SKU concurrently or within a very short period, using the Fixed Price endpoint:
`POST /api/pricing/prices/{itemId}/fixed/{priceTableId}`
3. Configure each request to update a different trade policy or price for the same SKU.
4. Check the resulting `fixedPrices` array after all requests have been processed.
5. Under the race condition, one or more of the updates may be missing or may be reverted because a request persisted an outdated snapshot of the `fixedPrices` array.
6. The Audit log may show successful `Fixed Price Modified` operations without an explicit deletion of the missing price.

The issue is more likely to occur when several requests for the same SKU are processed concurrently. There is no specific time interval between requests that can be guaranteed to prevent the issue, as the behavior depends on the number and timing of concurrent updates.

## Workaround

Instead of sending one `POST` request for each price configured for the same SKU, use the Put Price endpoint to send all the prices for the SKU in a single operation.
This reduces the number of concurrent updates to the same SKU and avoids the scenario where multiple requests overwrite each other's changes based on stale data.
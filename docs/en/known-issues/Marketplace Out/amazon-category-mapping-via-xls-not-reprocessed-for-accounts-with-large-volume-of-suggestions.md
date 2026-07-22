---
title: 'Amazon Category mapping via XLS not reprocessed for accounts with large volume of suggestions'
slug: amazon-category-mapping-via-xls-not-reprocessed-for-accounts-with-large-volume-of-suggestions
status: PUBLISHED
createdAt: 2026-07-22T20:14:59.000Z
updatedAt: 2026-07-22T20:22:40.000Z
contentType: knownIssue
productTeam: Marketplace Out
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace Out
slugEN: amazon-category-mapping-via-xls-not-reprocessed-for-accounts-with-large-volume-of-suggestions
locale: en
kiStatus: Backlog
internalReference: 1438301
---

## Summary

Category mapping updates submitted via spreadsheet (XLS) upload are not always reprocessed automatically for accounts with a large volume of pending suggestions. Some SKUs remain stuck as "not mapped" in the Received Offers screen even after the mapping sheet was correctly updated by the marketplace, while other SKUs in the same account process normally.

## Simulation

1. Seller/marketplace account has category mapping managed via XLS upload.
2. The account has a large volume of items/offers pending mapping resolution.
3. Marketplace updates the category mapping spreadsheet correctly.
4. Some SKUs get reprocessed correctly, but others remain as "not mapped" — inconsistently, depending on the item's position in the internal processing batch, even though the mapping data is correct.

## Workaround

N/A
---
title: 'Category mapping spreadsheet does not include offers in WaitingReview'
slug: category-mapping-spreadsheet-does-not-include-offers-in-waitingreview
status: PUBLISHED
createdAt: 2026-05-04T19:22:28.000Z
updatedAt: 2026-05-07T17:05:39.000Z
contentType: knownIssue
productTeam: Marketplace
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace
slugEN: category-mapping-spreadsheet-does-not-include-offers-in-waitingreview
locale: en
kiStatus: Backlog
internalReference: 1401046
---

## Summary

When downloading the category mapping spreadsheet in the marketplace module, the system currently fetches only **offers with status Pending**. Offers in other statuses, such as **WaitingReview**, are not included in the dataset used to generate the file.

## Simulation

- When the offer is **Pending**, it is returned by the query and the spreadsheet is generated with all expected columns, including `category unmapped`.
- When the offer is **WaitingReview**, it is **not returned** by the query used to build the spreadsheet.
- As a result, the spreadsheet **does not contain these offers**, and therefore **the** `category unmapped` **column is not filled** for them.

## Workaround

N/A
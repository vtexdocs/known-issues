---
title: 'Product Specification Sheet Update does not Trigger Notificator and Indexing'
slug: product-specification-sheet-update-does-not-trigger-notificator-and-indexing
status: PUBLISHED
createdAt: 2025-11-21T18:38:55.282Z
updatedAt: 2025-11-21T18:38:55.282Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: product-specification-sheet-update-does-not-trigger-notificator-and-indexing
locale: en
kiStatus: Backlog
internalReference: 403107
---

## Summary


When importing a product's specification values via spreadsheets, they won't trigger indexing actions for the new values in existing product fields. They'll be correctly updated in the account's database, but not in Search API routes or front-end components that consume indexed information.


#### Simulation



- Access the VTEX Admin in the following path: Catalog -> Import and Export -> Product Specifications.
- Import a spreadsheet to update the specification values.
- After some time, check the information in the admin UI; it'll be up-to-date, but in the Search API, it won't be updated.


#### Workaround


Edit any other product information, rather than the specifications, via UI/API/spreadsheet. It will trigger the indexing for a product update, which includes the specifications.

A full reindex (via FullCleanUp.aspx) does not cover this update, as it involves additional information layers.


---
title: 'Catalog Indexing Report returning wrong stats'
slug: catalog-indexing-report-returning-wrong-stats
status: PUBLISHED
createdAt: 2022-01-07T17:05:40.000Z
updatedAt: 2026-02-14T02:07:28.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: catalog-indexing-report-returning-wrong-stats
locale: en
kiStatus: No Fix
internalReference: 499450
---

## Summary

Due to architectural changes on the product indexing workflow, the catalog indexing report ("RelatorioIndexacao.aspx") is not properly updated anymore, presenting wrong stats.

## Simulation

Compare the total product count across the Indexing Report, the Catalog Admin page, and the store’s search results. The values will show significant discrepancies.

## Workaround

Stores using the Intelligent Search can rely on the Indexing History admin page for a similar view.
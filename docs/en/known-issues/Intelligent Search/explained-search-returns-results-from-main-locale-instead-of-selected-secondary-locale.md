---
title: 'Explained Search returns results from main locale instead of selected secondary locale'
slug: explained-search-returns-results-from-main-locale-instead-of-selected-secondary-locale
status: PUBLISHED
createdAt: 2026-03-10T14:16:57.176Z
updatedAt: 2026-03-10T14:16:57.176Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: explained-search-returns-results-from-main-locale-instead-of-selected-secondary-locale
locale: en
kiStatus: Backlog
internalReference: 1376133
---

## Summary

In **Admin > Storefront > Intelligent Search > Explained Search**, the search result retrieves products from the main locale rather than the secondary locale when the secondary locale is selected.

## Simulation

1. In the VTEX Admin, go to **Storefront > Intelligent Search > Explained Search**.
2. In the **Locale** selector of **Explained Search**, select the secondary locale (for example, `es-AR`).
3. Search for a term that has:
  - Products are indexed and visible in both locales, but
  - Clear differences between locales (e.g., translated names).
4. Observe that the search result retrieves products from the main locale (`en-US`), even though the **secondary locale** (`es-AR`) is selected in Explained Search.

## Workaround

N/A
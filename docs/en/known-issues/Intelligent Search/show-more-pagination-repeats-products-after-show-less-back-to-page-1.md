---
title: 'Show more pagination repeats products after “Show less” back to page 1'
slug: show-more-pagination-repeats-products-after-show-less-back-to-page-1
status: PUBLISHED
createdAt: 2026-10-16T00:06:11.000Z
updatedAt: 2026-10-16T00:06:35.000Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: show-more-pagination-repeats-products-after-show-less-back-to-page-1
locale: en
kiStatus: Backlog
internalReference: 1474360
---

## Summary

On a PLP with “show-more” pagination, “Show more” can repeat products already on screen. This happens when the shopper opens a page other than page 1 and clicks “Show less” until page 1. The next “Show more” loads page 2 again, instead of the page after the last loaded one.

## Simulation

1. Open a Product List Page (PLP) with “show-more” pagination, on a page different from 1 (for example, `?page=4`).
2. Click “Show less” until the page reaches page 1.
3. Then, click “Show more” 1 time.

**Expected behavior:** The page after the last loaded one is requested (page 5 in this example). No products are repeated.
**Actual behavior:** Products from page 2 are loaded again and added to the list.

## Workaround

N/A
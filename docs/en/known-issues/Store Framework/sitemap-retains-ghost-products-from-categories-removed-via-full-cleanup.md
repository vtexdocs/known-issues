---
title: 'Sitemap retains ghost products from categories removed via full cleanup'
slug: sitemap-retains-ghost-products-from-categories-removed-via-full-cleanup
status: PUBLISHED
createdAt: 2026-05-20T15:33:08.000Z
updatedAt: 2026-05-20T15:33:08.000Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: sitemap-retains-ghost-products-from-categories-removed-via-full-cleanup
locale: en
kiStatus: Backlog
internalReference: 1409701
---

## Summary

After a full cleanup operation, products from deleted categories continue to appear in the sitemap even though they no longer exist in the catalog or return any results in the admin or storefront.

## Simulation

- On a store, perform a full cleanup of the catalog (removing all products and categories).
- After the cleanup completes, access the store's sitemap XML.
- Observe that products from removed categories are still listed in the sitemap, despite returning no results in the admin or storefront.

## Workaround

Please open a support ticket so our team can manually apply the fix for your account.
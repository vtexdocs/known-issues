---
title: 'Custom sitemap (saveIndex) returns "Entity not found" on the final domain'
slug: custom-sitemap-saveindex-returns-entity-not-found-on-the-final-domain
status: PUBLISHED
createdAt: 2026-09-17T23:26:22.000Z
updatedAt: 2026-09-18T21:13:21.000Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: custom-sitemap-saveindex-returns-entity-not-found-on-the-final-domain
locale: en
kiStatus: Backlog
internalReference: 1462938
---

## Summary

Stores that use the `saveIndex` feature to generate custom sitemaps (URLs in the format `/sitemap/{index-name}.xml`) may get an "Entity not found" error when accessing these files through the final production domain, even though the master index (/sitemap.xml) is updated correctly. The same file still works normally on `*.myvtex.com`. The issue is related to a routing difference between the two domains, which causes the custom index to not be recognized correctly on the final domain.

## Simulation

- Have an account that uses the `saveIndex` feature to register a custom sitemap index (e.g., `myindex`), associated with the production binding.
- Access `https://{accountName}.myvtex.com/sitemap/myindex.xml` → returns 200.
- Access `https://{final-domain}/sitemap/myindex.xml` → returns "Entity not found" error.
- The master index `sitemap/custom-user-routes-1.xml` lists the entry correctly on both domains, indicating that only the child file read fails on the final domain.

## Workaround

The affected store must open a support ticket requesting the workaround, which will be applied on a per-account basis
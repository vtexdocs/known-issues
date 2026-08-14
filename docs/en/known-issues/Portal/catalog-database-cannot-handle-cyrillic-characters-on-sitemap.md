---
title: 'Catalog database cannot handle Cyrillic characters on Sitemap'
slug: catalog-database-cannot-handle-cyrillic-characters-on-sitemap
status: PUBLISHED
createdAt: 2022-12-13T20:06:46.000Z
updatedAt: 2026-08-14T23:25:14.000Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slugEN: catalog-database-cannot-handle-cyrillic-characters-on-sitemap
locale: en
kiStatus: Fixed
internalReference: 715686
---

## Summary

Currently, the catalog database cannot handle Cyrillic characters and some Romanian alphabet characters. As a result, text links and URLs are generated incorrectly, affecting the sitemap, pageType, tag titles, breadcrumbs, etc.

## Simulation

1. Create a category with a Cyrillic character
2. Check the sitemap accessing `https://.myvtex.com/sitemap.xml `
3. Check the category sitemap and note that the category created at (1) will not be treated

## Workaround

Open a ticket and the product team will adjust the account database library
---
title: 'Banner not respecting the specificity of the search level in search pages'
slug: banner-not-respecting-the-specificity-of-the-search-level-in-search-pages
status: PUBLISHED
createdAt: 2022-04-26T17:24:55.000Z
updatedAt: 2026-09-22T15:45:34.000Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: banner-not-respecting-the-specificity-of-the-search-level-in-search-pages
locale: en
kiStatus: Backlog
internalReference: 566809
---

## Summary

If we have a banner for a department and another one for a category inside this department, the banner query won't respect the specificity of the category tree, we will always get the first one of the API.

This is applied to the entire category tree or specification levels.

## Simulation

- Go to **Admin > Storefront > Banners**.
- Create a banner for a department (it should be created first).
- Create a banner for a category inside this department.
- Go to the category page (client's site).
- It will match both and will return the first one to be shown.

## Workaround

Create banners in this order: most specific first, most generic last.

Example order:

1. Subcategory banners
2. Category banners
3. Department banners

Alternative: if banners already exist in the wrong order, deactivate and reactivate them in the same order (subcategory, then category, then department). This puts the generic banners last in the API response.


```
curl --location 'https://{accountName}.vtexcommercestable.com.br/api/intelligent-search/v1/banners/{facets}?query={query}' \
```
---
title: 'Time out on category keywords change with many products'
id: 14rC5XqGCOj1THVdYwbudS
status: PUBLISHED
createdAt: 2022-02-25T11:40:37.024Z
updatedAt: 2024-02-16T20:26:33.631Z
publishedAt: 2024-02-16T20:26:33.631Z
firstPublishedAt: 2022-02-25T11:40:37.550Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: time-out-on-category-keywords-change-with-many-products
locale: en
kiStatus: No Fix
internalReference: 497335
---

## Summary


Unable to change the keywords of a category with many products, as a time out is returned in the process, either by admin or by API



## Simulation


By Admin or by API, change the keywords of a category with many products (at least over 40,000)
Wait a few seconds and you will receive a timeout


## Workaround


Remove products from the category, change keywords, return products


---
title: 'Intelligent Search not returning correct SKU Order'
slug: intelligent-search-not-returning-correct-sku-order
status: PUBLISHED
createdAt: 2022-10-13T23:43:14.000Z
updatedAt: 2023-05-24T20:15:59.000Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: intelligent-search-not-returning-correct-sku-order
locale: en
kiStatus: Fixed
internalReference: 677937
---

## Summary

Intelligent Search API not returning the expected order of the SKU's variations for a product in search and shelves

## Simulation

Go to a product page, check the SKU order, go to the search page, check the SKU order (sometimes it will display correctly, sometimes it doesn't)

## Workaround

The prop sortVariationsByLabel from sku selector might be able to solve some cases

https://developers.vtex.com/docs/guides/vtex-store-components-skuselector

 ![](https://vtexhelp.zendesk.com/attachments/token/tcCXWNHIw8KJupddSHiMElnxl/?name=image.png)
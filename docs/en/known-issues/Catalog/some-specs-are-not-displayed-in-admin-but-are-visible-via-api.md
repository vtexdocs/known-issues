---
title: 'Some Specs are not displayed in Admin but are visible via API'
slug: some-specs-are-not-displayed-in-admin-but-are-visible-via-api
status: PUBLISHED
createdAt: 2021-08-24T15:25:32.000Z
updatedAt: 2023-05-12T19:29:13.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: some-specs-are-not-displayed-in-admin-but-are-visible-via-api
locale: en
kiStatus: Backlog
internalReference: 418348
---

## Summary

Some Specs are not displayed in Admin but are visible via API.

## Simulation

View a product's specs in the admin and by API.

## Workaround

Delete defective API specifications for each product SKU

- Product Specification: https://developers.vtex.com/docs/api-reference/catalog-api#delete-/api/catalog/pvt/product/-productId-/specification/-specificationId-
- SKU Specification: https://developers.vtex.com/docs/api-reference/catalog-api#delete-/api/catalog/pvt/stockkeepingunit/-skuId-/specification/-specificationId-
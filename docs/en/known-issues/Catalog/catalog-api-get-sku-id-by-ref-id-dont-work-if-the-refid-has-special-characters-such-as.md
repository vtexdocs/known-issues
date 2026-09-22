---
title: "Catalog API Get SKU ID BY REF ID don't work if the RefId has special characters such as +"
slug: catalog-api-get-sku-id-by-ref-id-dont-work-if-the-refid-has-special-characters-such-as
status: PUBLISHED
createdAt: 2021-11-11T21:31:05.000Z
updatedAt: 2026-09-22T21:26:19.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: catalog-api-get-sku-id-by-ref-id-dont-work-if-the-refid-has-special-characters-such-as
locale: en
kiStatus: Fixed
internalReference: 467501
---

## Summary

Catalog API Get SKU ID BY REF ID (`/api/catalog_system/pvt/sku/stockkeepingunitidbyrefid/`) don't work if the RefId has special characters such as + on the value.

## Simulation

- Do the following request:

```
curl --location --request GET 'https://merch.vtexcommercestable.com.br/api/catalog_system/pvt/sku/stockkeepingunitidbyrefid/12345677+981' \--header 'Content-Type: application/json' \--header 'VtexIdclientAutCookie: '
```


The response will be a 404:

 ![](https://vtexhelp.zendesk.com/attachments/token/R6P3hOQ0Yc1hI0HTkfd7fBgme/?name=inline1992436210.png)

## Workaround

- Use other Catalog APIs to get SKU information, for example: `api/catalog_system/pvt/sku/stockkeepingunitbyid/`OR `api/catalog_system/pvt/sku/stockkeepingunitbyalternateId/`
- Don't use `+` on the RefId Field
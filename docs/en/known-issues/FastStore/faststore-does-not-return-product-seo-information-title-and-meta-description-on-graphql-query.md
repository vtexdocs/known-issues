---
title: 'FastStore does not return product SEO information (title and meta description) on GraphQL query'
slug: faststore-does-not-return-product-seo-information-title-and-meta-description-on-graphql-query
status: PUBLISHED
createdAt: 2023-11-01T20:08:19.000Z
updatedAt: 2026-10-02T15:53:47.000Z
contentType: knownIssue
productTeam: FastStore
author: 2mXZkbi0oi061KicTExNjo
tag: FastStore
slugEN: faststore-does-not-return-product-seo-information-title-and-meta-description-on-graphql-query
locale: en
kiStatus: Fixed
internalReference: 929029
---

## Summary

When running the product query on FastStore's GraphQL API, the `seo` field should return the SEO information registered for the product in the Catalog ("SEO title" and "Meta Tag Description"). Instead, it returns the product's name and description. As a result, the PDP `<title>` and `<meta name="description">` tags also display the product name and description instead of the SEO values.

This behavior affects all FastStore versions prior to 4.4.0. Starting from version 4.4.0, the SEO information is returned correctly, as long as the store was built and deployed after August 14, 2026.

## Simulation

- In the Admin, fill in the product's "SEO title" and "Meta Tag Description" with values different from the product name and description;
- Access the store's GraphQL playground and run the product query with the SEO fields, or open the PDP and view its source code;
- Compare the returned `title` and `description` (or the `<title>` and `<meta name="description">` tags) with the SEO fields registered in the Catalog. On affected versions, the values returned are the product's name and description, not the SEO fields.


Simulation with v1 (no fix):
 ![](https://vtexhelp.zendesk.com/attachments/token/dEgo1w6gMc0YT4mOOErfo9WiU/?name=image.png)
 ![](https://vtexhelp.zendesk.com/attachments/token/r85OfGmL9GxB5vJ42LRdWhGao/?name=image.png)

Simulation with v4 (after update the version):
 ![](https://vtexhelp.zendesk.com/attachments/token/yVJbuEPpNRV7g1aGf6ihRxYUl/?name=image.png)

View-source:
 ![](https://vtexhelp.zendesk.com/attachments/token/efGeO2PZDpwSEcXQb2Ul2mjBo/?name=image.png)

## Workaround

Update the store to FastStore version 4.4.0 or later and run a new build/deploy (it must be done after August 14, 2026). With the SEO fields correctly filled in the Catalog, the information will be returned as expected.

For stores that cannot update yet, the other StoreSEO fields can be retrieved by extending the GraphQL schema, as described in the documentation: https://v1.faststore.dev/reference/api/objects/#storeseo
 ![](blob:https://vtexhelp.zendesk.com/735d2d86-687f-4418-87ac-e9b179f170f4)
However, `title` and `description` will still present the issue in that case.

Just a reminder that FastStore 1.0 and 2.0 is no longer receiving updates:
 ![](https://vtexhelp.zendesk.com/attachments/token/rKD45Q5kLSCzy3mIsz5TmAANU/?name=image.png)

You can check our versions here: https://developers.vtex.com/docs/guides/faststore/getting-started-faststore-versions-and-support-levels
---
title: 'Catalog translations not reflecting on the frontend'
slug: catalog-translations-not-reflecting-on-the-frontend
status: PUBLISHED
createdAt: 2025-09-15T14:16:20.914Z
updatedAt: 2025-09-15T14:16:20.914Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: catalog-translations-not-reflecting-on-the-frontend
locale: en
kiStatus: Backlog
internalReference: 861892
---

## Summary


When the merchant performs an action on the Messages app in order to have some product data translated on the frontend, this action is not actually reflected in the storefront.


#### Simulation



1. Make a change on the Messages app;
2. Notice on the `IndexedInfo` that the field `GenerateAndSaveTranslationsDocument` is set as `false`;
3. Do not reindex the product;
4. Check that the change did not reflect on the translated website.


#### Workaround


In order to force the translations reindex for a product, use the following API request:

    curl --request POST 'https://{accountName}.vtexcommercestable.com.br/api/notificator/changenotification/{productId}/translation' \--header 'VtexIdclientAutCookie: {VtexIdclientAutCookie}'




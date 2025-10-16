---
title: Remove supplier info from product not working via Admin
slug: remove-supplier-info-from-product-not-working-via-admin
status: PUBLISHED
createdAt: 2025-10-16T19:51:16.456Z
updatedAt: 2025-10-16T19:51:16.456Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: remove-supplier-info-from-product-not-working-via-admin
locale: en
kiStatus: Backlog
internalReference: 796608
---

## Summary


When trying to remove the supplier info from a product and saving the product via Admin, despite getting a successful response, the information persists.

When opening again the product page, is possible to see the supplier info still there.


#### Simulation



1. Add a supplier to a product and save it;
2. Enter again the product and check that the supplier info is correctly there;
3. Remove the supplier info from the product and save it;
4. Enter again the product and check that the supplier info is still there.


#### Workaround


Delete this info using product update API:
https://developers.vtex.com/docs/api-reference/catalog-api#put-/api/catalog/pvt/product/-productId-

Set the field `SupplierId` as `null`

    curl --location --globoff --request PUT 'https://.vtexcommercestable.com.br/api/catalog/pvt/product/' \--header 'Accept: application/json' \ --header 'Content-Type: application/json' \ --header 'X-VTEX-API-AppKey: ' \ --header 'X-VTEX-API-AppToken: ' \--data '{ "Name": "insert product test", "DepartmentId": 1, "CategoryId": 2, "BrandId": 2000000, "LinkId": "insert-product-test", "RefId": "310117869", "IsVisible": true, "Description": "texto de descrição", "DescriptionShort": "Utilize o CEP 04548-005 para frete grátis", "ReleaseDate": "2019-01-01T00:00:00", "KeyWords": "teste,teste2", "Title": "product de teste", "IsActive": true, "TaxCode": "", "MetaTagDescription": "tag test", "SupplierId": null, "ShowWithoutStock": true, "AdWordsRemarketingCode": null, "LomadeeCampaignCode": null, "Score": 1}'





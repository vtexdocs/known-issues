---
title: 'Collections created by API and Products inserted by API Insert SKU by File not working properly'
slug: collections-created-by-api-and-products-inserted-by-api-insert-sku-by-file-not-working-properly
status: PUBLISHED
createdAt: 2025-10-16T19:53:01.178Z
updatedAt: 2025-10-16T19:53:01.178Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: collections-created-by-api-and-products-inserted-by-api-insert-sku-by-file-not-working-properly
locale: en
kiStatus: Backlog
internalReference: 470966
---

## Summary


Today we have some ways to create and add products to a collection. We can use our new Collection Adimn, our legacy collection admin and we can use API to create collections and add products to a collection. But we have a problem when creating collections through API and add products to this collection using the route `api/catalog/pvt/collection//stockkeepingunit/importinsert`. With this API we are able to add products to the collection using a spreadsheet.

The problem happens every time we create a collection by API and try to use this `importinsert` API to add products. The products do not become available to the collection created.


#### Simulation


- Create a collection using API:

    curl --location -g --request POST 'https://.vtexcommercestable.com.br/api/catalog/pvt/collection?an=' \--header 'Content-Type: application/json' \--header 'Accept: application/json' \--header 'x-vtex-api-appKey: vtexappkey-appvtex' \--header 'x-vtex-api-appToken:  ' \--data-raw '{    "Name": "testando",    "Searchable": false,    "Highlight": false,    "DateFrom": "2017-09-27T10:47:00",    "DateTo": "2027-09-27T10:47:00"}'


- Add products to this collection with the Import Insert API:

    curl --location -g --request POST 'https://.vtexcommercestable.com.br/api/catalog/pvt/collection//stockkeepingunit/importinsert' \--header 'Content-Type: application/json' \--header 'Accept: application/json' \--header 'VtexIdclientAutCookie: ' \--form 'file=@"/path/to/file"'

- After about 30 minutes, check the products without the collection information and the collection page not rendering the products:

    curl --location -g --request GET 'https://.vtexcommercestable.com.br/api/catalog_system/pub/products/search/?fq=H:' \--header 'Accept: application/json' \--header 'Content-Type: application/json'

#### Workaround



There are two viable workarounds for this issue:

1️⃣ Add products to collections created by API using Admin Spreadsheet Upload or use the Insert SKU to subcollection API to insert SKUs to collections:

To add SKUs to collections using API, we have to follow these steps:

Create collection:

    curl --location -g --request POST 'https://catalog.vtexcommercestable.com.br/api/catalog/pvt/collection?an=(https://catalog.vtexcommercestable.com.br/api/catalog/pvt/collection?an=)' \--header 'Content-Type: application/json' \--header 'Accept: application/json' \--header 'x-vtex-api-appKey: vtexappkey-appvtex' \--header 'x-vtex-api-appToken: ' \--header 'Cookie: janus_sid=7026383e-2070-4b68-a2c2-59cf729ec0da' \--data-raw '{ "Name": "testando", "Searchable": false, "Highlight": false, "DateFrom": "2017-09-27T10:47:00", "DateTo": "2027-09-27T10:47:00"}'

Create subcollection:

    curl --location -g --request POST 'https://catalog.vtexcommercestable.com.br/api/catalog/pvt/subcollection?an=(https://catalog.vtexcommercestable.com.br/api/catalog/pvt/subcollection?an=)' \--header 'Content-Type: application/json' \--header 'Accept: application/json' \--header 'VtexIdclientAutCookie: ' \--header 'Cookie: janus_sid=7026383e-2070-4b68-a2c2-59cf729ec0da' \--data-raw '{ "CollectionId": 173, "Name": "Inclusive 1", "Type": "Inclusive", "PreSale": false, "Release": false}'

Insert SKU to subcollection:

    curl --location -g --request POST 'https://catalog.vtexcommercestable.com.br/api/catalog/pvt/subcollection//stockkeepingunit?an=(https://catalog.vtexcommercestable.com.br/api/catalog/pvt/subcollection//stockkeepingunit?an=)' \--header 'Content-Type: application/json' \--header 'Accept: application/json' \--header 'VtexIdclientAutCookie: ' \--header 'Cookie: janus_sid=7026383e-2070-4b68-a2c2-59cf729ec0da' \--data-raw '{ "SkuId": 2000037}'


2️⃣ There is also the possibility to use the `api/catalog/pvt/collection//stockkeepingunit/importinsert` and then, after the import is complete and all products were added, to go manually, via UI and update the entire collection data, either by changing its name or its begin/end date.

This way, the collection products that were just inserted will be forced into a reindex and the collection related data will be added to them, allowing the correct display of the needed information.
---
title: 'API allows registering many EANs to the same SKU'
slug: api-allows-registering-many-eans-to-the-same-sku
status: PUBLISHED
createdAt: 2026-03-11T19:19:27.399Z
updatedAt: 2026-03-11T19:19:27.399Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: api-allows-registering-many-eans-to-the-same-sku
locale: en
kiStatus: Fixed
internalReference: 286097
---

## Summary

It is possible to register many EANs to the same SKU via the API  (method InsertSkuEanAsync on Splunk) and via another still not identified method.
When we have multiple EANs for the same SKU, we get the last inserted value on the file export, and on the interface we see the EAN value that comes last on the alphabetical order of all registered values.

## Simulation

- create an SKU and register an EAN = 3 .
- with the GET `https://.vtexcommercestable.com.br/api/catalog/pvt/stockkeepingunit//ean` API, check that this EAN value (3) is the only entry.
- insert a new EAN = 2 to this SKU via the POST`https://catalog.vtexcommercestable.com.br/api/catalog/pvt/stockkeepingunit//ean/?an= `
- with the GET `https://.vtexcommercestable.com.br/api/catalog/pvt/stockkeepingunit//ean` API, check that now EAN is an array with two values, on alphabetical order {2, 3}
- go to the catalog interface and see that the EAN shown for this SKU is 3 (last one on the array)
- export the SKU info and see that the EAN shown is 2 (last one registered)
- if you now set a new EAN via the catalog interface, let's say "1", it will exclude the last EAN of the array, and include this new value. So the GET API would return {1, 2} for our example. With 2 being shown on the interface and 1 being shown on the exported files.

## Workaround

Get a list of problematic SKU ID and their correct EAN, clean all EANs from these SKUs with `DELETE ``https://catalog.vtexcommercestable.com.br/api/catalog/pvt/stockkeepingunit//ean?an=`` ` and then insert the correct EANs to these SKUs via the `POST ``https://catalog.vtexcommercestable.com.br/api/catalog/pvt/stockkeepingunit//ean/?an=`` ` API.
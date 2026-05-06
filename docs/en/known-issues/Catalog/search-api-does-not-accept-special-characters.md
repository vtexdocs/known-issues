---
title: 'Search API does not accept special characters'
slug: search-api-does-not-accept-special-characters
status: PUBLISHED
createdAt: 2023-02-15T12:39:00.000Z
updatedAt: 2023-02-28T18:19:04.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: search-api-does-not-accept-special-characters
locale: en
kiStatus: Backlog
internalReference: 754363
---

## Summary

The catalog search API, documented here: https://developers.vtex.com/docs/api-reference/search-api#get-/api/catalog_system/pub/products/search/-search- , does not accept terms with special characters like apostrophe ' or quotes ".

The error return on queries like this is: `Bad Request! Scripts are not allowed!`

## Simulation

1. Try to use the search API with a term using ' , for instance: GET https://{accountName}.{environment}.com.br/api/catalog_system/pub/products/search?ft=anyterm'
2. Check that the error message appear.

## Workaround

No workaround.
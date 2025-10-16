---
title: lastModifiedBy field always returns "null" in search API.
slug: lastmodifiedby-field-always-returns-null-in-search-api
status: PUBLISHED
createdAt: 2025-10-16T20:47:53.280Z
updatedAt: 2025-10-16T20:47:53.280Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: lastmodifiedby-field-always-returns-null-in-search-api
locale: en
kiStatus: Backlog
internalReference: 1211438
---

## Summary


The property lastModifiedBy in the ssearch APIs currently does not return anything, just a "null" field when using the search APIs, such as https://my_account_name.vtexcommercestable.com.br/api/catalog_system/pvt/collection/search


#### Simulation


1 - when editing a collection by any means, try performing any changes

2 - Using the aforementioned search API URL, check the lastModifiedBy field in the response

3 - This field will always return null.


#### Workaround


-




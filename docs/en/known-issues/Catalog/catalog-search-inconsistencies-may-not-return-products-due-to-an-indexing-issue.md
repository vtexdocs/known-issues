---
title: 'Catalog Search inconsistencies may not return products due to an indexing issue'
slug: catalog-search-inconsistencies-may-not-return-products-due-to-an-indexing-issue
status: PUBLISHED
createdAt: 2025-11-25T17:01:05.195Z
updatedAt: 2025-11-25T17:01:05.195Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: catalog-search-inconsistencies-may-not-return-products-due-to-an-indexing-issue
locale: en
kiStatus: Backlog
internalReference: 1330325
---

## Summary


Intermittently, products may not be updated correctly in the CatalogSearch during the indexing process. As a side effect, the product will not appear in the Catalog Search, affecting Store Framework stores or API usage. Other side effect includes the CatalogSearch returning fewer items than requested (according to pagination parameters). It also affects Portal (legacy CMS) stores. For context, Store Framework stores depend on this API for the PDP, and in these cases, the PDP cannot load, whereas a PLP using Intelligent Search may still display the item.


#### Simulation


Access an affected SKU's PDP where a 404 is returned; Review the indexing logs in the Catalog and check the GenerateAndSaveIndexDocuments session. If there's a "skipping commit" message, the internal document is not properly indexed.


#### Workaround


Edit the product information to trigger an indexing aiming to update the information registered on the CatalogSearch database. On a large scale, perform a full reindex in the account.




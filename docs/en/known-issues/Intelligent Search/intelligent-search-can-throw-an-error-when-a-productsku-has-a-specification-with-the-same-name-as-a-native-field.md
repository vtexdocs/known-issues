---
title: 'Intelligent Search can throw an error when a product/sku has a specification with the same name as a native field'
slug: intelligent-search-can-throw-an-error-when-a-productsku-has-a-specification-with-the-same-name-as-a-native-field
status: PUBLISHED
createdAt: 2025-12-08T14:48:56.598Z
updatedAt: 2025-12-08T14:48:56.598Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: intelligent-search-can-throw-an-error-when-a-productsku-has-a-specification-with-the-same-name-as-a-native-field
locale: en
kiStatus: Backlog
internalReference: 1336576
---

## Summary


When product/SKU specifications use the same names as the standard fields in the catalog, the Intelligent Search compatibility layer incorrectly merges this data, causing the specification values to overwrite the native catalog values.

This results in the main search query returning invalid or failing data for these items, ultimately leading to errors for customers attempting to load more results or view the affected products on the storefront's product listing pages (PLP).


#### Simulation


Create a product/SKU specification with the same name as a native field (e.g. measurementUnit). After the field is indexed, search for this product and there'll be an error while loading the page.


#### Workaround


Don't create a specification field with the exact same name as a native field. If it is created, rename it to a non-native catalog field.


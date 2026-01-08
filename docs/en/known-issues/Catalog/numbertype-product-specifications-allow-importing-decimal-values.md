---
title: 'Number-type product specifications allow importing decimal values'
slug: numbertype-product-specifications-allow-importing-decimal-values
status: PUBLISHED
createdAt: 2026-01-08T17:59:10.993Z
updatedAt: 2026-01-08T17:59:10.993Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: numbertype-product-specifications-allow-importing-decimal-values
locale: en
kiStatus: Fixed
internalReference: 1294268
---

## Summary


In the **Import/Export > Product Specifications**, Catalog allows importing decimal values in Number-type product specifications, but this field type supports only integers.

This causes a blank/empty field in the specification of the product page.


#### Simulation


1. Import a specification with a decimal value for a product.
2. After importing, go to the product form page that imported the specification.
3. Scroll down the form to the specification imported.
4. The specification field is displayed as blank/empty.


#### Workaround


Update/import the specification for a product with an integer value.




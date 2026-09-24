---
title: 'Intelligent Search indexes SKU Detach without distinguishing between same-name specifications'
slug: intelligent-search-indexes-sku-detach-without-distinguishing-between-samename-specifications
status: PUBLISHED
createdAt: 2026-09-24T16:44:22.000Z
updatedAt: 2026-09-24T16:44:22.000Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: intelligent-search-indexes-sku-detach-without-distinguishing-between-samename-specifications
locale: en
kiStatus: Backlog
internalReference: 1465798
---

## Summary

SKU Detach separates a single product into multiple products grouped by the specification value in the Intelligent Search layer.

When a SKU specification has the same name as a product specification, indexing can use the product specification value instead of the SKU specification value. This causes a SKU to be indexed under the wrong grouped product.

## Simulation

1. Configure **SKU Detach** in **Admin > Intelligent Search > Search Settings**, using a specification name (example: "Color").
2. Create a product with a **product-level** specification with this same name (example: "Color" = "Purple").
3. Add a SKU to this product with a **SKU-level** specification with the same name but a different value (example: "Color" = "Blue").
4. In the Intelligent Search API, apply the filter using the product specification value (example: "Color = Purple").


**Actual behavior:** The search filter returns the product, but shows the wrong SKU.

## Workaround

Although the Catalog module does not block repeated specification names, this usage should be considered wrong.
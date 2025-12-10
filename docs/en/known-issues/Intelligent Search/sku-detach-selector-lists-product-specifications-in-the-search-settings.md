---
title: 'SKU Detach selector lists product specifications in the Search Settings'
slug: sku-detach-selector-lists-product-specifications-in-the-search-settings
status: PUBLISHED
createdAt: 2025-12-10T18:20:08.116Z
updatedAt: 2025-12-10T18:20:08.116Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: sku-detach-selector-lists-product-specifications-in-the-search-settings
locale: en
kiStatus: Backlog
internalReference: 1338042
---

## Summary


The selector for **Use SKU specifications to display individual products in search results** is listing product specifications in addition to SKU specifications in the **Admin > Intelligent Search > Search Settings**.

The impact is the risk of misconfiguration if a **product specification** is selected, causing inconsistent behavior when trying to display individual SKUs based on a specification.


#### Simulation



1. Navigate to **Admin > Intelligent Search > Search Settings**.
2. In the **Use SKU specifications to display individual products in search results** field, open the dropdown/list of specifications of the option.
3. Observe that the list includes both **SKU specifications** and **product specifications**.


#### Workaround


If a product specification is selected, remove the selected specification from **Use SKU specifications to display individual products in search results** field.




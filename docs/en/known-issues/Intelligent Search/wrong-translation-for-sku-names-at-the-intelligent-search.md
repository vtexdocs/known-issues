---
title: Wrong translation for SKU names at the Intelligent Search
slug: wrong-translation-for-sku-names-at-the-intelligent-search
status: PUBLISHED
createdAt: 2025-10-16T20:36:58.760Z
updatedAt: 2025-10-16T20:36:58.760Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: wrong-translation-for-sku-names-at-the-intelligent-search
locale: en
kiStatus: Fixed
internalReference: 1180016
---

## Summary


In products with multiple SKUs, the translation for SKU names is wrongly made on top of the first SKU.


#### Simulation


Considering that a product has its four SKUs named respectively as "P/M/G/GG" in `pt-BR` as its primary language. While a translation to `en-US` should generate the names as "S/M/L/XL" it'll actually be translated as "S/S/S/S".


#### Workaround


N/A



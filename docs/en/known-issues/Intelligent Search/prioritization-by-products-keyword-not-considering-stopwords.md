---
title: "Prioritization by product's \"keyword\" not considering stopwords"
slug: prioritization-by-products-keyword-not-considering-stopwords
status: PUBLISHED
createdAt: 2026-01-23T12:55:28.936Z
updatedAt: 2026-01-23T12:55:28.936Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: prioritization-by-products-keyword-not-considering-stopwords
locale: en
kiStatus: Fixed
internalReference: 1041743
---

## Summary


Products may be prioritized in the search results by their "keyword", a word from the product's name set as relevant by an algorithm. Stopwords are search terms filtered out from the original terms because it's not significant for the search.

In a scenario where the keyword for a product is a stopword, this product may lose priority in the search results.


#### Simulation



- A product with the name "La vida en el oceano" will have "la" as keyword.
- Considering a Spanish store, a search for this product name will be effectively made as "vida el oceano" after removing the stopwords.
- Products with "vida" as a keyword will be prioritized over the searched product.


#### Workaround


N/A



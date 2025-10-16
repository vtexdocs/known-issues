---
title: Some special characters are not stripped from product searches or indexing
slug: some-special-characters-are-not-stripped-from-product-searches-or-indexing
status: PUBLISHED
createdAt: 2025-10-16T20:26:07.988Z
updatedAt: 2025-10-16T20:26:07.988Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: some-special-characters-are-not-stripped-from-product-searches-or-indexing
locale: en
kiStatus: Backlog
internalReference: 382382
---

## Summary


Some special characters are not completely stripped from the searched keywords or product indexing, which may affect searches in some specific scenarios.

The known characters that lead to this scenario are commas (`,`), dots (`.`), and colons (`:`). Others are usually ignored and don't generate problems.

While registering a product, commas and dots at the end of words are removed while indexing the product, but if in the middle of a word, they are kept. Keywords are split by spaces.

While searching, colons are a reserved value and will invalidate the whole text query.


#### Simulation


For commas and dots, a product field that has a value like comma-separated keywords like `"car,specialbrand,blue"` will be read as a single word. Searching for `specialbrand` won't find this product.

For colons, a product with the name `"red wine: special version"` can be found by searching by `wine`, but searching by `wine: special version` won't work. The whole search will be invalid, and no text filters will be applied.


#### Workaround


For commas and dots, a space after the character is required to split the keywords.

For a search using colons, there's no workaround.



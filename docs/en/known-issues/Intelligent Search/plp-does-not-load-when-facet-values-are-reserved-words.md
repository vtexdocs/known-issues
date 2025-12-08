---
title: 'PLP does not load when facet values are reserved words'
slug: plp-does-not-load-when-facet-values-are-reserved-words
status: PUBLISHED
createdAt: 2025-12-08T14:49:48.656Z
updatedAt: 2025-12-08T14:49:48.656Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: plp-does-not-load-when-facet-values-are-reserved-words
locale: en
kiStatus: Backlog
internalReference: 1193294
---

## Summary


Reserved words are predefined words in programming languages that have specific meanings and functions.

Some facet values may raise an error when their values (like a category name or specification value) are reserved words, preventing the page from loading correctly.

For example, in the case of a specification with the value `constructor`, the specification should generate a facet item on the PLP, but it raises an error.


#### Simulation



- Open a PLP where the specification appears as a facet and its value is a reserved word.
- The PLP will load with errors.


#### Workaround


Follow the instructions on the Adding SKU specifications or fields page to change the specification value to another one.



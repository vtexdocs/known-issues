---
title: Special characters might break on portal results for field values
slug: special-characters-might-break-on-portal-results-for-field-values
status: PUBLISHED
createdAt: 2025-09-09T14:49:56.916Z
updatedAt: 2025-09-09T14:49:56.916Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: special-characters-might-break-on-portal-results-for-field-values
locale: en
kiStatus: Backlog
internalReference: 1289146
---

## Summary


Currently, when loading pages in which the search result has a product or sku field value specifal characters in them, such as °, %, etc...

The search result might respond with a "something went wrong" error.


#### Simulation


Add the special character ° for a search result with several skus.

When loading the page, a "Something Went Wrong" message will be shown.


#### Workaround


Change the special character value for something else (example: degrees, instead of °)




---
title: "Catalog API doesn't respond properly to space at the end of strings"
slug: catalog-api-doesnt-respond-properly-to-space-at-the-end-of-strings
status: PUBLISHED
createdAt: 2025-11-14T18:08:42.429Z
updatedAt: 2025-11-14T18:08:42.429Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: catalog-api-doesnt-respond-properly-to-space-at-the-end-of-strings
locale: en
kiStatus: Backlog
internalReference: 977033
---

## Summary


When using the catalog API collection, if a string JSON field is sent ending with spaces (for instance productName: "myProductName    ") the catalog APIs will respond with an improper 400 response and empty response body, leaving the user clueless about what was sent improperly.

The correct response should still be a 400 (bad request) but with an error handling informing which field is incorrect and why.


#### Simulation


For any catalog API (https://developers.vtex.com/docs/api-reference/catalog-api) insert 1+ empty spaces at the end of a string field, such as exemplified above.


#### Workaround


n/a

This type of string should not be accepted, but the error handling must be adjusted.




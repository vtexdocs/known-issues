---
title: Insert SKU File API doesnt accept URLs from servers that require "User-Agent" header
slug: insert-sku-file-api-doesnt-accept-urls-from-servers-that-require-useragent-header
status: PUBLISHED
createdAt: 2025-08-12T18:56:32.319Z
updatedAt: 2025-08-12T18:56:32.319Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: insert-sku-file-api-doesnt-accept-urls-from-servers-that-require-useragent-header
locale: en
kiStatus: Backlog
internalReference: 1069222
---

## Summary


The **User-Agent** is a string of text that a web browser or other client sends to a web server in an HTTP request header to identify itself. This string contains information about the browser type, operating system, and sometimes additional details like the browser version and the rendering engine used.

This is often requested as a security measure by servers, such as ones that host images, that can be passed via URL in the request body of the insert SKU file API.

This kind of authentication, however, is not currently sent by the VTEX server while gathering the images for a SKU, so third-party servers may block the request.



#### Simulation



1. Using either the Create or Update (write methods) SKU file API (https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/stockkeepingunit/-skuId-/file), passing down a URL that has server-side user agent requirements to fetch data
2. An HTTP 4xx type response will be shown, either a generic 400 or a more specific 403, depending on the type of response implemented.

It may also be possible to see this happening via tools like Postman by sending an empty "User-Agent" header in the request.



#### Workaround


Either opt for the file upload via spreadsheet, form-data (using the APIs) or disable the user-agent requirements on the server-side.




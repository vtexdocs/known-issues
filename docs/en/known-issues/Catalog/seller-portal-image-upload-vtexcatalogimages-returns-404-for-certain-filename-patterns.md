---
title: 'Seller Portal Image Upload (vtex.catalog-images) returns 404 for certain filename patterns'
slug: seller-portal-image-upload-vtexcatalogimages-returns-404-for-certain-filename-patterns
status: PUBLISHED
createdAt: 2026-07-23T21:45:00.000Z
updatedAt: 2026-07-23T21:45:00.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: seller-portal-image-upload-vtexcatalogimages-returns-404-for-certain-filename-patterns
locale: en
kiStatus: Backlog
internalReference: 1438867
---

## Summary

When uploading images via the `vtex.catalog-images` app (used by Seller Portal / catalog image ingestion flows), some filename patterns cause the app to generate a `{account}.vtexassets.com` URL that returns 404, even though the upload request itself returns a 200 with a seemingly valid URL. This has been reported at least 3 times with different variations of the same underlying symptom:


- Filenames containing 3+ consecutive underscores (e.g. `hello___world.jpeg`) collide with the app's internal hash-separator logic, producing a broken slug.
- Filenames without a file extension, or images sourced from external URLs that lack one, also produce unresolvable URLs.

## Simulation

- Call `POST https://app.io.vtex.com/vtex.catalog-images/v0/{account}/master/images/save/{filename}` with a filename containing `___` (3+ consecutive underscores), e.g. `hello___world.jpeg`.
- The response returns 200 with a `fullUrl` such as `https://{account}.vtexassets.com/assets/vtex.catalog-images/products/hello___world___{hash}.jpeg`.
- Access that `fullUrl` directly → returns 404, even though the same flow with a filename without repeated underscores (e.g. `hello_world.jpeg`) resolves correctly.

## Workaround

Avoid filenames with 3+ consecutive underscores and always include a valid file extension before uploading through `vtex.catalog-images`
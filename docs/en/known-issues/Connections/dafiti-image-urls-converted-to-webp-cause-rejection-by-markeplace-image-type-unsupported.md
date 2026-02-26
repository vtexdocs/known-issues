---
title: 'Dafiti Image URLs converted to WebP cause rejection by markeplace (image type unsupported)'
slug: dafiti-image-urls-converted-to-webp-cause-rejection-by-markeplace-image-type-unsupported
status: PUBLISHED
createdAt: 2026-02-26T20:57:33.070Z
updatedAt: 2026-02-26T20:57:33.070Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: dafiti-image-urls-converted-to-webp-cause-rejection-by-markeplace-image-type-unsupported
locale: en
kiStatus: Backlog
internalReference: 1370670
---

## Summary

Sellers synchronizing products to the Dafiti marketplace may face image upload errors even when the original format is supported by Dafiti, generating “Unknown/unsupported image type extension” errors in Bridge.
This occurs especially when images have very high resolution and are automatically converted during download to an unsupported format (WebP).

## Simulation

1. Ensure that the image dimensions and format are supported by the marketplace.
2. Send or reprocess the SKU via Bridge so that the image URL is provided to the marketplace.
3. Check the Bridge log/processing error:
4. “Error downloading the following url: {image_url}. Error: Unknown / unsupported image type extension.”

###

## Workaround

Reduce the image resolution and upload it again, then reprocess the item to Dafiti.

Tests indicate that very high-resolution images are more likely to be converted to WebP by the image download service. Lowering the resolution **may help avoid** the WebP response and **may prevent** marketplace rejection, but it is not guaranteed to resolve the issue in all cases.
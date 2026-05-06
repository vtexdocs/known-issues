---
title: 'Swiping product-image after zooming in does not revert the zoom, causing display issues'
slug: swiping-productimage-after-zooming-in-does-not-revert-the-zoom-causing-display-issues
status: PUBLISHED
createdAt: 2021-12-20T18:53:33.000Z
updatedAt: 2024-01-29T18:05:04.000Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: swiping-productimage-after-zooming-in-does-not-revert-the-zoom-causing-display-issues
locale: en
kiStatus: Backlog
internalReference: 491180
---

## Summary

When using the vtex.store-components product-image, when swiping an image to the side after clicking it for zoom, the first image will keep zoomed in, causing rendering issues when the user swipes back to it.

## Simulation

In a PDP that uses vtex.store-components product-image, access the mobile version of a product with at least two images.
Click to zoom in the first image, then swipe to the next one.
Click to zoom the second one, and swipe back to the first.
Doing it back and forth will eventually cause some display issues to the currently zoomed in image.
Clicking on the image again to zoom out resets it back to normal.

## Workaround

Use arrows to navigate between images and reduce the chance of users opting to swipe it.

Set the prop "zoomMode": "hover" or "zoomMode":"open-modal". It prevents swiping when the image is zoomed, but changes behavior slightly.
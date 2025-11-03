---
title: 'Loss of scroll reference in faststore'
slug: loss-of-scroll-reference-in-faststore
status: PUBLISHED
createdAt: 2025-11-03T15:11:24.934Z
updatedAt: 2025-11-03T15:11:24.934Z
contentType: knownIssue
productTeam: FastStore
author: 2mXZkbi0oi061KicTExNjo
tag: FastStore
slugEN: loss-of-scroll-reference-in-faststore
locale: en
kiStatus: No Fix
internalReference: 1317630
---

## Summary


When navigating between PLP and PDP pages, upon returning to PLP, the scroll loses its initial position and reference.


#### Simulation


When accessing a PLP on the first page or searching for more products, click on a product. When loading the PDP and clicking the back button, the page scroll does not return to the clicked product, but references another product.


#### Workaround


Update to version `3.91.3-dev.1 `or higher.

This is a customized WA for the issue, so there may be instability or unexpected behavior depending on the device or browser.




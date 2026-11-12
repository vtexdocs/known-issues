---
title: 'APP FBE Store pages wait for an external file to load when Facebook Business Extension is installed'
slug: app-fbe-store-pages-wait-for-an-external-file-to-load-when-facebook-business-extension-is-installed
status: PUBLISHED
createdAt: 2026-11-12T19:09:42.000Z
updatedAt: 2026-11-12T19:09:42.000Z
contentType: knownIssue
productTeam: Marketplace Out
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace Out
slugEN: app-fbe-store-pages-wait-for-an-external-file-to-load-when-facebook-business-extension-is-installed
locale: en
kiStatus: Backlog
internalReference: 1484482
---

## Summary

In Store Framework (VTEX IO) stores with the Facebook Business Extension (FBE) installed, an external file is loaded at the start of the store pages, and the page waits for this file to finish loading before being displayed. This may delay how quickly the store is displayed. The behavior also occurs when the Pixel is disabled in the integration settings.

## Simulation

1. In a Store Framework store with the Facebook Business Extension installed, open a store page.
2. Open the browser developer tools and run the following in the console:
`performance.getEntriesByType('resource').find(e => e.name.includes('clientParamBuilder')).renderBlockingStatus`
3. The result is `"blocking"`, which means the page display waits for this file to load.
4. Disable the Pixel in the Meta integration settings and repeat steps 1 to 3. The result is still `"blocking"`.

## Workaround

n/a
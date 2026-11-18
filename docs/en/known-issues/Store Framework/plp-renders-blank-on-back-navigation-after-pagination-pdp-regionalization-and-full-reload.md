---
title: 'PLP renders blank on Back navigation after pagination, PDP regionalization, and full reload'
slug: plp-renders-blank-on-back-navigation-after-pagination-pdp-regionalization-and-full-reload
status: PUBLISHED
createdAt: 2026-11-18T16:30:21.000Z
updatedAt: 2026-11-18T16:30:21.000Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: plp-renders-blank-on-back-navigation-after-pagination-pdp-regionalization-and-full-reload
locale: en
kiStatus: Backlog
internalReference: 1486412
---

## Summary

Navigating back (browser Back) to a paginated Product Listing Page (PLP) renders an empty listing container when the user paginated past page 1, opened a Product Detail Page (PDP), and set a postal code (regionalization) before returning.

## Simulation

1. Open a PLP and paginate until page 2 (page 2 must be reached client-side, without a full page load).
2. Open a product from the listing (PDP).
3. On the PDP, enter a postal code to regionalize the page. The page reloads and regionalizes correctly.
4. Click the browser's Back button.
5. Expected: the PLP is displayed with page 2 content. Actual: the PLP is blank. The URL returns without `page=2`, no PLP document or product search request is made, and the `div.render-container.render-route-store-search` container is empty. No JavaScript error appears in the console.

## Workaround

Refresh the page. Or make pagination load the `page=2` URL as a full document, so the PLP is not served from client-side state. Alternatives: 1. Force PLP product cards to navigate to the PDP as a full page load. 2. As a last resort, detect a blank PLP on return and trigger an automatic reload. This is fragile and should only be used if the options above are not viable.
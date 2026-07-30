---
title: 'productImpression event is sent with only one product when the shelf uses slider-layout with infinite: true'
slug: productimpression-event-is-sent-with-only-one-product-when-the-shelf-uses-sliderlayout-with-infinite-true
status: PUBLISHED
createdAt: 2026-07-30T20:41:19.000Z
updatedAt: 2026-07-30T20:42:22.000Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: productimpression-event-is-sent-with-only-one-product-when-the-shelf-uses-sliderlayout-with-infinite-true
locale: en
kiStatus: Backlog
internalReference: 1441580
---

## Summary

When a product shelf is rendered inside a `slider-layout` configured with `infinite: true`, the `productImpression` pixel event is sent with a single product, even though several product cards are visible on screen at the same time. The expected behavior is a single event containing all visible products — for example, four impressions at positions 1 through 4 for a shelf showing four products per page.

As a result, impression data reaching Google Analytics, Google Tag Manager, and other consumers of the event is heavily underreported for shelves configured as infinite carousels. Only impressions are affected; product clicks and other e-commerce events work normally.

Affected app: `vtex.product-list-context`. It is a dependency of `vtex.product-summary`, so the behavior appears in any shelf or product carousel built with the standard store theme blocks.

## Simulation

1. In a store theme, configure a product shelf (a `product-summary-list` / shelf block) inside a `slider-layout` block, with `infinite: true` and more products than the number shown per page — for example, 10 products with 4 per page.
2. With Google Tag Manager installed, publish the theme and open the page containing the shelf, scrolling down to it so the product cards are rendered on screen.
3. Inspect the impression events pushed to the dataLayer:

4. Observe a single `productImpression` entry whose `ecommerce.impressions` array contains only one product, at `position: 1`, even though four products are visible. Expected: one entry containing all four, at positions 1 through 4.
5. Change `infinite` to `false` and repeat. The event now correctly includes all visible products.

## Workaround

Set `infinite: false` on the `slider-layout` block that wraps the shelf. This has been verified: with the infinite loop disabled, impressions for all visible products are reported correctly.

Note that this changes navigation for shoppers — the carousel stops at the last product instead of looping back to the first. Stores that depend on the looping behavior will have to choose between accurate impression data and the infinite carousel until the fix is released.
---
title: "Product availability is not updated after a ZIP code change when returning to a previously visited page using the browser's back button"
slug: product-availability-is-not-updated-after-a-zip-code-change-when-returning-to-a-previously-visited-page-using-the-browsers-back-button
status: PUBLISHED
createdAt: 2026-10-27T18:28:12.000Z
updatedAt: 2026-10-27T18:30:06.000Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: product-availability-is-not-updated-after-a-zip-code-change-when-returning-to-a-previously-visited-page-using-the-browsers-back-button
locale: en
kiStatus: Backlog
internalReference: 1477964
---

## Summary

In Store Framework stores using Delivery Promise, when the shopper changes the ZIP code through the "shopper-location-setter" and then returns to a previously visited page using the browser's back button, the page keeps showing the product availability of the previous ZIP code. The availability is only updated after the page is reloaded (F5).

The issue only occurs within the same browser tab, when the page is revisited without a reload. Opening the page in a new tab, or visiting a page for the first time after the ZIP code change, shows the correct availability. The ZIP code change itself is applied correctly, but the product data already loaded for the previously visited page is not requested again.

## Simulation

1. In a Store Framework store with Delivery Promise enabled, open a page with a product shelf (for example, the home) using a ZIP code that has no coverage for some products, so they are shown as unavailable.
2. Navigate to another page (for example, a search page) and change the ZIP code using the shopper-location-setter in the header, to a ZIP code covered by those products.
3. Click the browser's back button to return to the previously visited page, without reloading it.

**Expected behavior:** The shelf is refreshed and shows the availability for the new ZIP code.

**Actual behavior:** The shelf keeps showing the availability of the previous ZIP code until the page is reloaded.

## Workaround

N/A
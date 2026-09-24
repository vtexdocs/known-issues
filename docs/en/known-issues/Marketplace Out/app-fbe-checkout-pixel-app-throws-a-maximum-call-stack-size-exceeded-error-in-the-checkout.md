---
title: 'APP FBE Checkout Pixel app throws a "Maximum call stack size exceeded" error in the checkout'
slug: app-fbe-checkout-pixel-app-throws-a-maximum-call-stack-size-exceeded-error-in-the-checkout
status: PUBLISHED
createdAt: 2026-09-24T16:27:43.000Z
updatedAt: 2026-09-24T16:27:43.000Z
contentType: knownIssue
productTeam: Marketplace Out
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace Out
slugEN: app-fbe-checkout-pixel-app-throws-a-maximum-call-stack-size-exceeded-error-in-the-checkout
locale: en
kiStatus: Backlog
internalReference: 1465789
---

## Summary

On stores that use the Meta (Facebook Business Extension) integration, the browser console can show the error "Maximum call stack size exceeded" on checkout pages. The error comes from the Facebook Checkout Pixel app, which loads in the checkout as part of the integration.

It happens intermittently, because it depends on how long the page's scripts take to load in the browser, which the store cannot control. It is more common on slower devices or connections. When it happens, page scripts that try to send Meta Pixel events during page load can fail.

The catalog integration and the checkout flow are not affected. Purchase events sent from the server (Conversions API) do not depend on this app either.

References:

- Integration: Facebook Business Extension (FBE) / Meta Business Extension
- Affected Meta Pixel function: `fbq` (`window.fbq`, `fbq.push`)
- Meta script: `connect.facebook.net/en_US/fbevents.js`
- Console message: `RangeError: Maximum call stack size exceeded`

## Simulation

- Use a store with the Meta Business Extension integration installed and configured.
- Add a product to the cart and go to the checkout, ideally the payment step with the customer's data already filled in.
- Open the browser's developer tools and watch the console.
- Reload the page a few times, preferably on a mobile device or with a slower connection.
- In some loads, the console shows a "Maximum call stack size exceeded" error coming from the Facebook Checkout Pixel app.

## Workaround

There is no workaround available that keeps the app active.
Turning off the "Enable Pixel configuration?" option in the Meta integration settings does not resolve the error. Changing the order in which the store's scripts load does not resolve it either.

If the error causes problems for the store, uninstalling the Facebook Checkout Pixel app stops it without affecting the catalog integration. The checkout events sent by this app will no longer be sent.
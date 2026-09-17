---
title: 'VTEX ID login box is barely visible in Checkout when the page is scrolled down'
slug: vtex-id-login-box-is-barely-visible-in-checkout-when-the-page-is-scrolled-down
status: PUBLISHED
createdAt: 2020-10-16T02:26:44.000Z
updatedAt: 2026-09-17T16:02:18.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: vtex-id-login-box-is-barely-visible-in-checkout-when-the-page-is-scrolled-down
locale: en
kiStatus: No Fix
internalReference: 296905
---

## Summary

The VTEX ID login box inside Checkout stays fixed near the top of the page. When the buyer has scrolled down, the box stays hidden at the top and only the loading spinner is visible, so the buyer does not realize that login is required.
This is especially critical when login is requested after three failed payment attempts, since the buyer is usually below the top of the page at that moment.

## Simulation

1. Have a buyer blocked after 3 failed payment attempts (usually credit card).
2. Try to pay again, so login is requested before the purchase can be completed.
3. Scroll the page down, on a viewport that is not very tall.
4. The login box is not visible — only the loading spinner is shown.

## Workaround

The store must implement its own CSS so the login box follows the page scroll.
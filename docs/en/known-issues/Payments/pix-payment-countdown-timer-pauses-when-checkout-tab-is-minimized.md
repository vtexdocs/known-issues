---
title: 'PIX payment countdown timer pauses when checkout tab is minimized'
slug: pix-payment-countdown-timer-pauses-when-checkout-tab-is-minimized
status: PUBLISHED
createdAt: 2025-10-15T17:18:25.736Z
updatedAt: 2025-10-15T17:18:25.736Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: pix-payment-countdown-timer-pauses-when-checkout-tab-is-minimized
locale: en
kiStatus: Backlog
internalReference: 1308205
---

## Summary


The PIX payment countdown timer in Checkout stops decreasing when the browser tab is minimized or the user leaves the page.

Users see the timer freeze and only resume when they return to the tab.


#### Simulation



- Prerequisites: Any store with PIX enabled in Checkout
- Steps:
  - Go to Checkout and select PIX as the payment method; generate the QR code.
  - Minimize the browser tab or switch away from it for at least 5–10 minutes.
  - Return to the tab and observe that the timer did not count down while the tab was in the background, resuming only upon reactivation.


#### Workaround


There is no workaround available.




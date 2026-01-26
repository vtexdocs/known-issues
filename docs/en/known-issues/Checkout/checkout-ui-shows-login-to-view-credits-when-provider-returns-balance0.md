---
title: 'Checkout UI shows “login to view credits” when provider returns balance=0'
slug: checkout-ui-shows-login-to-view-credits-when-provider-returns-balance0
status: PUBLISHED
createdAt: 2026-01-26T21:08:35.272Z
updatedAt: 2026-01-26T21:08:35.272Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: checkout-ui-shows-login-to-view-credits-when-provider-returns-balance0
locale: en
kiStatus: Backlog
internalReference: 1356257
---

## Summary


In the Checkout Payment UI, when the gift card provider returns a response with balance=0, as described in our documentation, the UI continues to show the banner prompting asking the shopper to log in to view credits and does not render the gift card component, even after a successful login.

The visible symptom is a static UI that never shows credits and behaves as if the user is not authenticated. This affects shoppers in stores integrated with providers that return balance=0 for zero-credit users.


#### Simulation


Prerequisites: Store using a Gift Card provider that, for a logged-in user with no credits, returns a “balance: 0” payload rather than an empty array [] for List Gift Cards.

Steps:

1. Add any product to cart and go to Checkout.
2. In the payment step, click the banner “You have credits to use on your purchase! Do you want to display them?”.
3. Authenticate as prompted (e.g., via code login) and wait for the credits panel to render.
4. Observe that the UI continues to show the login prompt and does not render the gift card component, despite the user being logged in and the provider returning balance=0.


#### Workaround


The possible workaround is the Gift Card provider to return an empty array [] when the user has no credits.




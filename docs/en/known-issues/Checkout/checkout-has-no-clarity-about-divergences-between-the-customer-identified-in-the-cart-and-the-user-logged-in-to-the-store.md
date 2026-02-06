---
title: 'Checkout has no clarity about divergences between the customer identified in the cart and the user logged in to the store'
slug: checkout-has-no-clarity-about-divergences-between-the-customer-identified-in-the-cart-and-the-user-logged-in-to-the-store
status: PUBLISHED
createdAt: 2026-02-06T20:34:32.870Z
updatedAt: 2026-02-06T20:34:32.870Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: checkout-has-no-clarity-about-divergences-between-the-customer-identified-in-the-cart-and-the-user-logged-in-to-the-store
locale: en
kiStatus: Backlog
internalReference: 442267
---

## Summary



Changes on user authentication made through VTEX ID don't automatically update the orderForm's personal information (profile and address).

This can lead to some unwanted behaviours, such as:


1. Authenticated user adds personal information to the cart, then logs out via "My Account" or logs in with a different email, but personal information is persisted unmasked on the cart.

2. Unauthenticated user with complete profile identifies themselves through email, which causes their personal information to be automatically filled and masked on the cart, then logs in with a different email but personal information is persisted masked on the cart.

3. Personal data is updated on the user's profile through "My Account" page but this change is not reflected on existing orderForm in which this user is identified


#### Simulation



**Scenario 1:**


- Authenticate through the storefront using an email
- Create a new cart and add personal data with the same email
- Return to the storefront, then log out or log in with a different user
- Go back to the cart; the previously added personal data will still be available and unmasked

**Scenario 2:**


- Unauthenticated, create a new cart and add email from a complete profile (personal data will be automatically filled and masked)
- Return to the storefront, then log in with a different user
- Go back to the cart; the previously added personal data will still be available and masked

**Scenario 3:**


- Create a new cart and add personal information
- Return to the storefront, then log in with teh same email used on the cart
- Update some profile or address information
- Return to the cart; the personal data will not have been updated


#### Workaround



Some scenarios can be handled by implementing Cart Data Clean Up on Log Out via the following documentation, using Session Watcher and the `/changeToAnonymousUser` API:

https://developers.vtex.com/docs/guides/vtex-io-documentation-cleaning-cart-data-on-log-out



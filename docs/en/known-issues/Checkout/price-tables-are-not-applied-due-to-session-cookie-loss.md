---
title: 'Price tables are not applied due to session cookie loss'
slug: price-tables-are-not-applied-due-to-session-cookie-loss
status: PUBLISHED
createdAt: 2025-12-03T22:20:00.842Z
updatedAt: 2025-12-03T22:20:00.842Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: price-tables-are-not-applied-due-to-session-cookie-loss
locale: en
kiStatus: Backlog
internalReference: 1335123
---

## Summary



When `vtex_session` cookie is removed from the navigation for any reason and then recreated, Checkout's native UI may start orderForm update requests (such as `/paymentData`) before the response from `/api/sessions`, which is the route that performs the session renewal.

This causes the orderForm update requests to be sent without the session cookie, which, in turn, cause base prices to be returned on the orderForm even after the `vtex_session` cookie has been renewed with the correct `priceTables` values.


#### Simulation



The behaviour is intermitent, but can be verified quite often when following these steps:

1) Authenticate with an user that is eligible for specific price tables; Go to `/checkout/#/cart` and notice that the correct price is showing

2) Delete `vtex_session` cookie from the navigation

3) Make any cart update and observe the price falling back to the base price, as expected, since there is no session cookie

4) Refresh; the `vtex_session` cookie is recreated with the correct `priceTables` information, but `prices` may remain incorrect on the orderForm even after an orderForm update request (such as `/api/checkout/pub/orderForm/{orderFormId}/attachments/paymentData`) is performed.


#### Workaround



Any additional orderForm update request (such as `/paymentData`, `/shippingData`, `/clientProfileData`, etc.) that is made after the new cookie's creation will use the new session cookie, thus returning the correct `price` for that session's context.



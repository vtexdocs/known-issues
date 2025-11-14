---
title: 'checkout-graphql could not handle items with subscription when the orderForm has gifts'
slug: checkoutgraphql-could-not-handle-items-with-subscription-when-the-orderform-has-gifts
status: PUBLISHED
createdAt: 2025-11-14T19:16:17.219Z
updatedAt: 2025-11-14T19:16:17.219Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: checkoutgraphql-could-not-handle-items-with-subscription-when-the-orderform-has-gifts
locale: en
kiStatus: Backlog
internalReference: 1293912
---

## Summary


When adding multiple subscription items from PDP via Store Framework (flow handled by the app vtex.checkout-graphql), the app builds and forwards subscriptionData incorrectly whenever the cart also contains gifts.

As a result, only the first item receives the subscription context that Promotions (RnB) needs, and subsequent subscription-eligible items are simulated without subscription, leading to wrong promotion selection or no subscription promotion for those items.


#### Simulation


Create with two or more items with a subscription.
Create promotions for the subscription items and a promotions that insert a gift in the cart.


#### Workaround


Install the beta version of the app vtex.checkout-graphql@0.67.2-beta.1




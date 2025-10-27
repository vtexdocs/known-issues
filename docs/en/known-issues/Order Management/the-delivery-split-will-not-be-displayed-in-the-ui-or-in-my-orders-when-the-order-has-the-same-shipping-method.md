---
title: 'The Delivery Split will not be displayed in the UI or in My Orders, when the order has the same ''Shipping Method''.'
id: 2VnPyguau8KjpWx09C2vOW
status: PUBLISHED
createdAt: 2022-03-15T20:24:32.693Z
updatedAt: 2022-12-16T18:00:44.514Z
publishedAt: 2022-12-16T18:00:44.514Z
firstPublishedAt: 2022-03-15T20:24:32.967Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: the-delivery-split-will-not-be-displayed-in-the-ui-or-in-my-orders-when-the-order-has-the-same-shipping-method
locale: en
kiStatus: Backlog
internalReference: 495352
---

## Summary


The Split Package suggestion is not working properly, when you finish the purchase the UI suggests the split packages in cases of different docks or differents sizes and different shipping strategies.
Nowadays the UI is just splinting the packages of cases with different (Shipping Methods), even in the logistcsinfo has differents delivery channels and different docks,


##

## Simulation


Make an order with more then one item, and these items needs to have each one a different delivery channel  but with the same Shipping Method. The UI will not suggest the split of packages because the "selectedSla" is like the most significant variable, ignoring the dockids for examaple.

Example:

Two items each one with one  "courierId"

ItemIndex:0

 ![](https://raw.githubusercontent.com/vtexdocs/known-issues/refs/heads/main/docs/en/known-issues/Order%20Management/the-delivery-split-will-not-be-displayed-in-the-ui-or-in-my-orders-when-the-order-has-the-same-shipping-method_1.png)


IntemIndex :1
 ![](https://raw.githubusercontent.com/vtexdocs/known-issues/refs/heads/main/docs/en/known-issues/Order%20Management/the-delivery-split-will-not-be-displayed-in-the-ui-or-in-my-orders-when-the-order-has-the-same-shipping-method_2.png)

The UI suggest this as a single package:

 ![](https://raw.githubusercontent.com/vtexdocs/known-issues/refs/heads/main/docs/en/known-issues/Order%20Management/the-delivery-split-will-not-be-displayed-in-the-ui-or-in-my-orders-when-the-order-has-the-same-shipping-method_3.png)




##

## Workaround


The way to avoid this is changing the delivey method of Shipping Strategies.

PS.: This is not a properly workaround, because includes differen behavior on checkout.


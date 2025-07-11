---
title: ValidateCart mutation returning 500 when customizations affects the availability of the product
slug: validatecart-mutation-returning-500-when-customizations-affects-the-availability-of-the-product
status: PUBLISHED
createdAt: 2025-07-11T14:18:49.302Z
updatedAt: 2025-07-11T14:18:49.302Z
contentType: knownIssue
productTeam: FastStore
author: 2mXZkbi0oi061KicTExNjo
tag: FastStore
slugEN: validatecart-mutation-returning-500-when-customizations-affects-the-availability-of-the-product
locale: en
kiStatus: Backlog
internalReference: 1258650
---

## Summary


When a product is unavailable, our default behavior is to return the last valid cart and errors on the `cart.messages`. However, when the client customizes the store's context and regionalization, the product in the cart may be associated with a different seller and become unavailable in a different context. This behavior can lead to a 500 error on the validateCart mutation, making the cart unavailable to customer actions, such as deleting the product from the cart.


#### Simulation


It is not an easy context to simulate; it may involve customization on the store side.
But an example would be changing from a pickup point where the product was available to one where it is not anymore.


#### Workaround


As a workaround, the team developed a feature flag to change the behaviour of the cart, allowing unavailable products.
https://github.com/vtex/faststore/pull/2938




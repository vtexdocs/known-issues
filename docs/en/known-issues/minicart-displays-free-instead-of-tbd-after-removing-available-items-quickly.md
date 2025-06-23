---
title: Minicart Displays "FREE" Instead of "TBD" After Removing Available Items Quickly
slug: minicart-displays-free-instead-of-tbd-after-removing-available-items-quickly
status: PUBLISHED
createdAt: 
updatedAt: 
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: minicart-displays-free-instead-of-tbd-after-removing-available-items-quickly
locale: en
kiStatus: No Fix
internalReference: 1248177
---

## Summary


When a user adds an unavailable SKU to the cart and then quickly adds and removes available items, the minicart incorrectly displays the total as "FREE" instead of "TBD". This happens due to a lack of proper synchronization with the `orderForm`, especially when interactions occur quickly.


#### Simulation



1. Add an SKU to the cart.
2. Set the delivery postal code to one where the initial product is unavailable
3. Return to the homepage and add available SKUs.
4. Quickly remove the available SKUs from the minicart.
5. Observe that the total price message remains as "FREE" instead of updating to "TBD".


#### Workaround


Remove items at a slower pace to allow proper synchronization. This reduces the chance of the issue occurring.




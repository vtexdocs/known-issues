---
title: B2B Checkout Settings is considering pickup address for deliveries
slug: b2b-checkout-settings-is-considering-pickup-address-for-deliveries
status: PUBLISHED
createdAt: 2025-10-16T20:39:30.204Z
updatedAt: 2025-10-16T20:39:30.204Z
contentType: knownIssue
productTeam: B2B
author: 2mXZkbi0oi061KicTExNjo
tag: B2B
slugEN: b2b-checkout-settings-is-considering-pickup-address-for-deliveries
locale: en
kiStatus: Backlog
internalReference: 1186568
---

## Summary


B2B Checkout settings is considering all available addresses for deliveries, including pickup addresses. If a pickup address is selected, the Checkout page gets frozen.

In the checkout API is possible to see the message "The address cannot be used for the given delivery channel".


#### Simulation



- Add any product to the cart;
- At the shipping step, change to pickup and go back to delivery;
- The pickup address will be in the delivery address.


#### Workaround


Refresh the page.



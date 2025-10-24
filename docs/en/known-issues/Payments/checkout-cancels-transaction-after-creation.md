---
title: 'Checkout cancels transaction after creation'
slug: checkout-cancels-transaction-after-creation
status: PUBLISHED
createdAt: 2025-10-16T17:29:09.937Z
updatedAt: 2025-10-16T17:29:09.937Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: checkout-cancels-transaction-after-creation
locale: en
kiStatus: Backlog
internalReference: 1157809
---

## Summary



A transaction already approved (and in some cases captured) receives a cancellation request directly from the checkout:


    An external application called to cancel this transaction Id = with Value RequestId = . Priority: default. Author: vtex-service::checkout::stable.
This cancellation request occurs due to a timeout when the checkout calls the payments route from the gateway, and the service takes too long to respond.

This happens when the `newGatewayCallback` method is triggered at two different points in the order flow:



1. **During the order processing stage** – when the endpoint `gatewayCallback/{orderGroup}` is called.
2. **After the payment authorization** – when the endpoint `gatewayCallback/{orderGroup}/{messageCode}` is called.

In both cases, the `newGatewayCallback`  performs a request to the payment gateway. If the gateway takes too long to respond, the same type of timeout error can occur in either scenario.

To clarify further:


- The first call is a **POST request** to `gatewayCallback`, which occurs right after the user completes the checkout process.
- The second call is a **GET request** to `gatewayCallback`, which is triggered during payment confirmation – this is when the shopper is redirected to the "Order Placed" screen.



#### Simulation


Simulation is not possible.



#### Workaround


No workaround available.





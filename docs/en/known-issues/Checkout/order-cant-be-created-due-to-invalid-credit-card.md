---
title: Order can't be created due to invalid credit card
slug: order-cant-be-created-due-to-invalid-credit-card
status: PUBLISHED
createdAt: 2025-10-20T13:44:29.352Z
updatedAt: 2025-10-20T13:44:29.352Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: order-cant-be-created-due-to-invalid-credit-card
locale: en
kiStatus: Backlog
internalReference: 607742
---

## Summary


An order creation may fail with the generic exception "_A communication error with gateway has occurred and the payment data for transaction {id} not successfully received_", which have different root causes. One of them will be related to the internal exception "_The requested account information does not exist_", which can be seen in the transaction/payment history related to the incomplete order.

The mentioned "account information" is related to a credit card that doesn't exist anymore on the platform. Although it's being offered in the orderForm (cart) as an option, it can't be used. An invalid reference remained on the customer's profile and/or their orderForm.

One of the instances where this issue manifests itself is when the user has a card (`accountId`) associated to its profile on the Profile System but the same card doesn't exist on the Payments Gateway.


#### Simulation


The root cause for this type of scenario is unknown, so there are no clear steps to reproduce the issue.


#### Workaround


When related to this specific root cause, the customer must close the purchase with another credit card. The invalid credit card can also be manually removed from the customer profile using the "my-account" page, or even from the specific orderForm (cart) while logged in, always by the own customer.



---
title: 'Checkout payment split may generate incorrect information in the "paymentData" of orders (NO-PAYMENT)'
slug: checkout-payment-split-may-generate-incorrect-information-in-the-paymentdata-of-orders-nopayment
status: PUBLISHED
createdAt: 2021-02-02T22:45:40.000Z
updatedAt: 2023-01-02T14:35:23.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: checkout-payment-split-may-generate-incorrect-information-in-the-paymentdata-of-orders-nopayment
locale: en
kiStatus: Backlog
internalReference: 330802
---

## Summary

Payment information between different orders of the same "orderGroup" can be incorrect when more than one order is paid through the same "merchant" (the account that transacts the payment). The amounts paid are correct, corresponding to the sum of each order in the group, but the amounts pertaining to each of them are not present in the "paymentData" object of the order.

When this happens, one of the group's orders is taken as a base and presents the sum of these values, while the other orders are left with an empty transaction, where its ID is "NO-PAYMENT".

The fulfillment order is not affected, as it never has specific data on the payment that took place on the marketplace and has the correct apportionment, along with the description of the "amount assumed by the affiliate". The scenario is bad when the marketplace wants to consume the store's orders, including those sent by other sellers, and then account for each party's payment amounts (usually useful for reconciliation).

Note: this scenario is directly related to the payment split performed by the checkout itself.

## Simulation

In theory, any cart with multiple sellers, but where payment is made directly to the marketplace.

## Workaround

For order integration purposes, it is possible to search if there are more orders in the same "orderGroup" to check their values and be able to redistribute them among the orders of the same group.
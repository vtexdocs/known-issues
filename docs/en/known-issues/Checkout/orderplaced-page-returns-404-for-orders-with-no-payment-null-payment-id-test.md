---
title: 'orderPlaced page returns 404 for orders with no payment (null Payment ID) test'
slug: orderplaced-page-returns-404-for-orders-with-no-payment-null-payment-id-test
status: PUBLISHED
createdAt: 2026-05-30T00:36:12.000Z
updatedAt: 2026-05-30T00:36:12.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: orderplaced-page-returns-404-for-orders-with-no-payment-null-payment-id-test
locale: en
kiStatus: Backlog
internalReference: 1414430
---

## Summary

The `orderPlaced` page returns a 404 error when an order has a total value of $0, such as orders containing only gift or freebie items. In this scenario, the platform creates a dummy transaction identified as `"NO-PAYMENT"` with no associated payment record, meaning the `paymentId` of the order is null.

When the `orderPlaced` page loads, it triggers a `getOrderGroup` GraphQL query. Since the `Payment.id` field in the `order-placed-graphql` schema is defined as non-nullable; returning a null value for this field causes the entire query to fail with the following error:

> `Cannot return null for non-nullable field Payment.id.`

This results in the `orderPlaced` page being unable to render, returning a 404 to the customer.

Note: the transaction and payment statuses are not affected, the order itself is created and processed correctly. The issue is isolated to the `orderPlaced` confirmation page.

## Simulation

Any order with a total value of $0, where no actual payment is required, for example, an order composed entirely of products with a 100% discount or freebie items.

## Workaround

There is no workaround available.
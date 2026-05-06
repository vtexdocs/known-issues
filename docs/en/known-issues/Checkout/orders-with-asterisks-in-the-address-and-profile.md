---
title: 'Orders with asterisks in the address and profile'
slug: orders-with-asterisks-in-the-address-and-profile
status: PUBLISHED
createdAt: 2021-04-26T23:27:09.000Z
updatedAt: 2024-06-06T20:16:02.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: orders-with-asterisks-in-the-address-and-profile
locale: en
kiStatus: Backlog
internalReference: 360783
---

## Summary

There are orders where the `invoiceAddress`, `shippingAddress` or `clientProfileData` are being sent as 'masked' instead of the actual address. This behavior occurs when a user completes the purchase with an order form containing masked data that is 'stringified'. Since these are string fields, the order data is filled with the '***' mask.

So, the bug lies in the fact that our API to place orders allows objects with special characters in these fields.

## Simulation

1. Add some products to your cart;
2. During the checkout process, enter a valid billing address and log into your account;
3. Abandon the cart or leave the website without completing the purchase;
4. Use our API to insert an attachment and put an address with "***" in some fields, such as the neighborhood one;
5. Place an order using this same cart;
6. Note that the order will have the shipping data with these special characters.

## Workaround

N/A
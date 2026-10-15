---
title: 'Orders with asterisks in the address and profile'
slug: orders-with-asterisks-in-the-address-and-profile
status: PUBLISHED
createdAt: 2021-04-27T02:27:09.000Z
updatedAt: 2026-10-15T22:11:05.000Z
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

Orders may be created with `invoiceAddress`, `shippingAddress` or `clientProfileData` fields with `*` characters, giving the impression that data was masked. This behavior occurs when a user completes the purchase with an order form containing special `*` characters that are 'stringified'. Since these are string fields, the order data is filled with the `***` characters giving the impression that the data is actually masked.

The bug lies in the fact that our API to place orders allows objects with special characters in these fields.

## Simulation

1. Add some products to your cart;
2. During the checkout process, enter a valid billing address and log into your account;
3. Abandon the cart or leave the website without completing the purchase;
4. Use our API to insert an attachment and insert profile data with "***" in some fields, such as the first name one;
5. Place an order using this same cart;
6. Note that the order will have the shipping data with these special characters.

## Workaround

N/A
---
title: 'Checkout Ownership Cookie size may lead to broken requests due to size limit'
slug: checkout-ownership-cookie-size-may-lead-to-broken-requests-due-to-size-limit
status: PUBLISHED
createdAt: 2026-05-04T21:09:36.670Z
updatedAt: 2026-05-04T21:09:36.670Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: checkout-ownership-cookie-size-may-lead-to-broken-requests-due-to-size-limit
locale: en
kiStatus: Backlog
internalReference: 1401406
---

## Summary

In some cases when a new address is added to a cart with a `CheckoutOrderFormOwnership` value the already existing cookie value will be incremented by Chekout API's response.

This behavior may lead to broken requests scenarios due to cookie limit size in implementations that rely on checkout's `CheckoutOrderFormOwnership` cookie.

Known scenarios:


- When the OrderForm Configuration `useOwnershipCookie` is set to `false`;
  - Adding a new address to a cart with a value for `CheckoutOrderFormOwnership` cookie will always lead to cookie size increment.


- When the OrderForm Configuration `useOwnershipCookie` is set to `true`;
  - Adding a cart with a new `addressId` value to a cart with a value for `CheckoutOrderFormOwnership` cookie will always lead to cookie size increment.
  - Adding a cart with an already existing `addressId` value to a cart with a value for `CheckoutOrderFormOwnership` cookie will not lead to cookie size increment.

## Simulation

- Set `useOwnershipCookie` to `false` in the store's OrderForm Configuration;
- Create a new cart and add any item;
- Add any number of addresses, the response `CheckoutOrderFormOwnership` cookie should always increase.


- Set `useOwnershipCookie` to `true` in the store's OrderForm Configuration;
- Create a new cart and add any item;
- Add any address with an `addressId` value;
- Add any number o addresses with different `addressId` values between any already existing address in the cart, the response `CheckoutOrderFormOwnership` cookie size should always increase

## Workaround

N/A
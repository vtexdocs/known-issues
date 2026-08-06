---
title: "CheckoutOrderFormOwnership is lost/doesn't exist in some purchase flows"
slug: checkoutorderformownership-is-lostdoesnt-exist-in-some-purchase-flows
status: PUBLISHED
createdAt: 2024-05-24T01:06:29.000Z
updatedAt: 2026-08-06T22:53:50.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: checkoutorderformownership-is-lostdoesnt-exist-in-some-purchase-flows
locale: en
kiStatus: Backlog
internalReference: 1038692
---

## Summary

The CheckoutOrderFormOwnership Cookie is lost or has not been created in some purchase flows.

CheckoutOrderFormOwnership cookie loss leads to masked data being returned and prevents cart edition.

## Simulation

- PII accounts

- Social Selling:
  - When sharing the cart via Social selling, it doesn't generate a `passKey` to share the ownership of the cart to the new user
  - Step by step:
```
- Create cart
- Add personal data and shipping data (you'll see the data normally)
- Share cart via link created by Social Selling App
- Open the new cart in an anonymous window: there will be no OwnershipCookie created and all data will be masked
```


- Faststore:
  - CheckoutOrderFormOwnership is not create since FastStore v1 doesn't support cookies

- Checkout GraphQL:
  - Using `vtex.checkout-graphql` to add an address via `selectDeliveryOption` / `updateSelectedAddress` functions, the cookie is not created
  - Step by step (using Store Framework's native theme):
```
- Add item to cart via PDP (addToCart)
- Add ZIP Code via PDP
- Select delivery option via PDP Shipping Simulator (updateSelectedAddress). The Ownership Cookie will not be created and the address data will be masked on the cart
```


- B2B:
  - `vtex.storefront-permissions` / `vtex.store-graphql` when adding an address via `updateOrderFormShipping`
  - `vtex.storefront-permissions` when adding profile data via `updateOrderFormProfile`
  - Step by step:
```
- Perform the login on a store with the native B2B store theme (`storefront-permissions` will automatically add address and profile data to the orderForm)
- After that, you can see there is no OwnershipCookie set
- Cookie is only set when accessing the cart, by the requests made by the checkout-ui (before that, there's no cookie, and trying to access personal data via API will result in masked data)
- Even after the cookie creation, trying to access the orderForm using the cookie will result in address masked data
```

## Workaround

N/A. Contact Product Support asking to deactivate and report which of the cases it fits.
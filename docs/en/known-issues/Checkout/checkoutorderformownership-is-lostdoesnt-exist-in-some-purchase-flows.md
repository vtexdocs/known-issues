---
title: "CheckoutOrderFormOwnership is lost/doesn't exist in some purchase flows"
slug: checkoutorderformownership-is-lostdoesnt-exist-in-some-purchase-flows
status: PUBLISHED
createdAt: 2024-05-24T01:06:29.000Z
updatedAt: 2026-10-09T18:35:47.000Z
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

## Workaround

N/A. Contact Product Support asking to deactivate and report which of the cases it fits.
---
title: 'Orders created with empty userProfileId'
slug: orders-created-with-empty-userprofileid
status: PUBLISHED
createdAt: 2026-09-23T18:33:36.000Z
updatedAt: 2026-09-23T18:33:36.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: orders-created-with-empty-userprofileid
locale: en
kiStatus: Backlog
internalReference: 1465130
---

## Summary

Returning shoppers are not recognised at checkout: their saved data and address are not pre-filled, they type everything again, and the order that comes out is not linked to their customer profile. The merchant then receives an order with `clientProfileData.userProfileId` empty data, which breaks the link to the customer record in CRM, ERP, and reconciliation. It happens when the profile lookup that checkout performs after the shopper enters their e-mail fails; the purchase itself goes through normally, payment included, so nothing signals a problem to the shopper or to the store. Checkout keeps that failure on the cart and, at order placement, skips the profile association instead of trying again.


- `clientProfileData.userProfileId` is empty on the order, and `profileErrorOnLoading` is `true`
- The order timeline shows `It was not necessary to save user profile in Profile' System`
- The shipping address on the order is a newly typed one, even when the shopper has an address saved on their profile
- The order is otherwise complete and healthy: payment approved, invoiced, no error shown at any step
- Returning shoppers lose the link to an existing profile; first-time shoppers get no profile created at all
- Affects orders placed on the storefront, not marketplace orders

Not the same as an empty `userProfileId` caused by `ignoreProfileData: true` on One-Click / FastCheckout orders, which is expected behaviour.

## Simulation

Not reproducible on demand: it depends on an intermittent failure of the profile lookup during checkout.
Use this checklist to confirm a case is this KI:


1. `GET /api/checkout/pvt/orders/{orderId}` returns `clientProfileData.profileErrorOnLoading: true` with `userProfileId` empty.
2. The order timeline shows `It was not necessary to save user profile in Profile' System`.
3. The order's shipping address is marked `isDisposable: true`, and the shopper's profile holds a different saved address.
4. Rule out "profile not found": on a new cart, an e-mail with no profile returns `profileErrorOnLoading: false`. The value `true` therefore means the lookup failed, not that the shopper is unknown.
5. Rule out `ignoreProfileData`: it is absent from the order and `null` in `GET /api/checkout/pvt/configuration/orderForm`.
6. If the shopper has an earlier order on the account, that order carries a populated `userProfileId` under otherwise identical conditions.

## Workaround

**Merchant / integration** — resolve the identifier by e-mail from Master Data and fill it downstream: `GET /api/dataentities/CL/search?_where=email={email}&_fields=id,userId` — use the `userId` field, not the document's `id`.
Nothing can be recovered when the shopper had no profile on the account before the order was placed.
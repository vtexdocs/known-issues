---
title: 'Order Again flow in B2B Suite can lead to orders placed with wrong marketing data'
slug: order-again-flow-in-b2b-suite-can-lead-to-orders-placed-with-wrong-marketing-data
status: PUBLISHED
createdAt: 2026-11-10T22:14:12.000Z
updatedAt: 2026-11-10T22:17:31.000Z
contentType: knownIssue
productTeam: B2B
author: 2mXZkbi0oi061KicTExNjo
tag: B2B
slugEN: order-again-flow-in-b2b-suite-can-lead-to-orders-placed-with-wrong-marketing-data
locale: en
kiStatus: Backlog
internalReference: 1483449
---

## Summary

When re-ordering an order from an organization (A) through the Orders History Order Again flow, then changing to other organization (B) and re-ordering another order from this organization through the same flow, the second order can be created with organization A's `orgId` and `costId` on its `marketingData`

## Simulation

- Have an user registered on two organizations, A and B, on a store using B2B Suite
- Place Order A using Organization A
- Place Order B using Organization B
- Log in as Organization A
- Re-order Order A through the Order's History Order Again button, being redirected to checkout
- Check that the IPS cookie UTM tags will be set as the `orgId` and `costId` from Organization A by the `/marketingData` request made by `b2b-checkout-settings`,
- Change org to Organization B
- Re-order Order B through the same flow, being redirected to checkout
- Check that:
  - The IPS cookie UTM tags will still have the same values: `orgId` and `costId` from Organization A
  - No new `/marketingData` request will be made by `b2b-checkout-settings`
  - The orderForm will have its marketingData set with `orgId` and `costId` from Organization A

- If you proceed with the order, it will be placed with org B data, but with org A's tags.

## Workaround

** **

1. Delete the IPS cookie before re-ordering in a different organization than the one you originally used
2. Add query parameters to the `/createBy` re-order request with the `orgId` and `costId` of the current organization
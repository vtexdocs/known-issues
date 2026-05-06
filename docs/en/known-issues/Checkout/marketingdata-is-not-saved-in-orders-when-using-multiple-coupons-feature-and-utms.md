---
title: 'marketingData is not saved in orders when using multiple coupons feature and utms'
slug: marketingdata-is-not-saved-in-orders-when-using-multiple-coupons-feature-and-utms
status: PUBLISHED
createdAt: 2023-11-14T18:03:15.000Z
updatedAt: 2024-04-09T13:32:42.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: marketingdata-is-not-saved-in-orders-when-using-multiple-coupons-feature-and-utms
locale: en
kiStatus: Fixed
internalReference: 936458
---

## Summary

When using the multiple coupons feature and there are coupons and utms, or 'marketingTags', in the 'orderForm', no 'marketingData' is saved into the order.

## Simulation

- Have an account using multiple coupons feature;
- Use a coupon and set any utm or 'marketingTags', both must be in the orderForm;
- Finish the purchase; there won't be any 'marketingData' in the order.

## Workaround

N/A
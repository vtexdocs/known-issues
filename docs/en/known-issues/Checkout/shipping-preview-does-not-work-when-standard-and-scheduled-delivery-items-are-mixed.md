---
title: 'Shipping preview does not work when standard and scheduled delivery items are mixed'
slug: shipping-preview-does-not-work-when-standard-and-scheduled-delivery-items-are-mixed
status: PUBLISHED
createdAt: 2020-12-18T02:10:36.000Z
updatedAt: 2026-09-17T15:59:48.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: shipping-preview-does-not-work-when-standard-and-scheduled-delivery-items-are-mixed
locale: en
kiStatus: No Fix
internalReference: 317654
---

## Summary

The shipping preview on the cart page does not work when items restricted to standard delivery and items restricted to scheduled delivery are in the same cart. An undefined value is shown for the scheduled one.

## Simulation

- Go to shipping step at checkout
- Use postal code 22250040.
- The shipping preview shows an undefined value for the scheduled delivery item.

## Workaround

N/A
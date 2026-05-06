---
title: 'Shipping Preview delivery selector showing wrong time in case of multiple packages/deadlines'
slug: shipping-preview-delivery-selector-showing-wrong-time-in-case-of-multiple-packagesdeadlines
status: PUBLISHED
createdAt: 2020-07-13T22:56:56.000Z
updatedAt: 2023-03-23T15:50:05.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: shipping-preview-delivery-selector-showing-wrong-time-in-case-of-multiple-packagesdeadlines
locale: en
kiStatus: Backlog
internalReference: 264441
---

## Summary

If the cart has multiple packages with different delivery times, the Shipping Preview delivery selector displays only one of the terms, giving incorrect information.
The expected behavior in this scenario is that the selector displays the message **Varied deadlines** and below the selector there is a message referring to the delivery period of each package in business days.

## Simulation

- Add 2 items with different SLAs;
- Check the date is incorrect in Shipping Preview selector.

## Workaround

N/A
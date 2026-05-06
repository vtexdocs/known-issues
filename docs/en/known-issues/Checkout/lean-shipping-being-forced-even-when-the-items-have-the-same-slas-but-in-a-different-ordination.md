---
title: 'Lean Shipping being forced even when the items have the same SLAs, but in a different ordination'
slug: lean-shipping-being-forced-even-when-the-items-have-the-same-slas-but-in-a-different-ordination
status: PUBLISHED
createdAt: 2021-10-22T16:40:31.000Z
updatedAt: 2023-09-11T21:38:24.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: lean-shipping-being-forced-even-when-the-items-have-the-same-slas-but-in-a-different-ordination
locale: en
kiStatus: Fixed
internalReference: 455218
---

## Summary

In some scenarios it is possible that even if the LeanShipping feature is turned off in the settings, the system may still consider it necessary to group the shipping options, and with that it will not disable leanShipping, this is because the rule used by the system to define the use or no leanshipping other than the setting is on or off and there is the same or different SLAs available for cart items;
However, there are scenarios where just the order of how the SLAs are delivered makes the system understand that they are a different SLA's and activate leanShipping at checkout and start displaying the fastest and cheapest labels for the shipping method.

## Simulation

There is no linear way to replicate the scenario, however it can occur whenever we have a cart with two or more items whose slas are similar between the items, and are being presented in different orders within the object sla of each item;

## Workaround

N/A
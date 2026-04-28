---
title: 'Delivery Capacity as (zero) Orders, allowing schedule Carrier at Checkout'
slug: delivery-capacity-as-zero-orders-allowing-schedule-carrier-at-checkout
status: PUBLISHED
createdAt: 2026-04-28T14:04:02.575Z
updatedAt: 2026-04-28T14:04:02.575Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slugEN: delivery-capacity-as-zero-orders-allowing-schedule-carrier-at-checkout
locale: en
kiStatus: Fixed
internalReference: 471612
---

## Summary

There is a possible configuration regarding the delivery capacity using (Orders or SKUs).

When the setup is (zero) Orders for the window, is possible to create an order and schedule the undesired window.

## Simulation

Setup the Shipping Police conditions with (ZERO ORDERS) as capacity on any day of week.
The checkout allow create Orders scheduled for that window, during the window created as (zero orders)

## Workaround

The workaround for this, is delete the schedule of delivery capacity when the desired is 0 (ZERO). If you dont want an order created on this window you dont need to create this window as (zero).
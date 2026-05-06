---
title: 'Shipping step may display an unavailability message while the shipping options are being calculated'
slug: shipping-step-may-display-an-unavailability-message-while-the-shipping-options-are-being-calculated
status: PUBLISHED
createdAt: 2022-09-01T15:42:16.000Z
updatedAt: 2023-03-24T14:34:47.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: shipping-step-may-display-an-unavailability-message-while-the-shipping-options-are-being-calculated
locale: en
kiStatus: Backlog
internalReference: 650038
---

## Summary

A user who has saved address in their profile, when arriving at the address step where the shipping selection is displayed, when selecting another option a warning of "Delivery is not available for this address" is shown erroneously, may quickly appear due to the loading of information, it can happen according to the delay in this search depending on the store complexity.

## Simulation

A logged in user, when trying to change the selected address for another in the delivery stage, the alert will be displayed and then the address will be selected normally.

## Workaround

N/A
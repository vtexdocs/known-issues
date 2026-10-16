---
title: 'B2B Checkout Settings is considering pickup address for deliveries'
slug: b2b-checkout-settings-is-considering-pickup-address-for-deliveries
status: PUBLISHED
createdAt: 2025-02-26T20:57:28.000Z
updatedAt: 2026-10-16T16:58:24.000Z
contentType: knownIssue
productTeam: B2B
author: 2mXZkbi0oi061KicTExNjo
tag: B2B
slugEN: b2b-checkout-settings-is-considering-pickup-address-for-deliveries
locale: en
kiStatus: Backlog
internalReference: 1186568
---

## Summary

B2B Checkout settings is considering all available addresses for deliveries, including pickup addresses. If a pickup address is selected, the Checkout page gets frozen and doesn't allow to proceed to the payment step while the pickup address is selected as a delivery address.

In the checkout API is possible to see the message "The address cannot be used for the given delivery channel".

## Simulation

- Add any product to the cart;
- At the shipping step, change to pickup and go back to delivery;
- The pickup address will be in the delivery address;
- Try to select the pickup address inserted to the addresses list;
- You will not be able to go to the payment step.

## Workaround

Refresh the page.
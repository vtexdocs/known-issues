---
title: 'Checkout UI unselects the "Schedule all" toggle after refreshing the page'
slug: checkout-ui-unselects-the-schedule-all-toggle-after-refreshing-the-page
status: PUBLISHED
createdAt: 2023-04-04T21:08:40.000Z
updatedAt: 2023-04-06T17:51:27.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: checkout-ui-unselects-the-schedule-all-toggle-after-refreshing-the-page
locale: en
kiStatus: Backlog
internalReference: 784693
---

## Summary

Checkout UI unselects the "Schedule all" toggle in the shipping step after refreshing the page, even though the API is still selected. This behavior has no impact; the order will have the scheduled delivery selected.

## Simulation

- Add an item that has scheduled and regular delivery;
- Select the scheduled delivery, fill out all the information, and go to Payments;
- Go back to Shipping and refresh the page;
- The "Schedule all" will be unselected.

## Workaround

N/A
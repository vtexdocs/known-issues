---
title: 'Subscription dashboard gets refreshed repeatedly'
slug: subscription-dashboard-gets-refreshed-repeatedly
status: PUBLISHED
createdAt: 2022-05-02T21:14:51.000Z
updatedAt: 2026-09-14T22:56:59.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: subscription-dashboard-gets-refreshed-repeatedly
locale: en
kiStatus: Fixed
internalReference: 570688
---

## Summary

In some circumstances, when checking the information of subscriptions with issue, due to the number of characters of the message, a problem occurs when indexing the information in the UI, causing a "refresh repeatedly". This impacts not only the user experience, but also makes it dificult to see the error both on the dashboard grid and in the "(see more)" pop-up option.

## Simulation

This behavior occurs in the functionality "**Subscriptions > Dashboards > Subscription Orders > Cycles with an issue**", depending on the number of characters in the message.

## Workaround

At the moment we do not have a workaround for this UI navigability.
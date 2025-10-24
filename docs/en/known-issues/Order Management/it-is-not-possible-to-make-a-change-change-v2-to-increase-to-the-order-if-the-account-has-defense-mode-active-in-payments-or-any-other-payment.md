---
title: 'It is not possible to make a change (change v2) to increase to the order if the account has Defense Mode active in payments or any other payment!'
slug: it-is-not-possible-to-make-a-change-change-v2-to-increase-to-the-order-if-the-account-has-defense-mode-active-in-payments-or-any-other-payment
status: PUBLISHED
createdAt: 2025-10-16T20:01:02.864Z
updatedAt: 2025-10-16T20:01:02.864Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: it-is-not-possible-to-make-a-change-change-v2-to-increase-to-the-order-if-the-account-has-defense-mode-active-in-payments-or-any-other-payment
locale: en
kiStatus: Backlog
internalReference: 1155646
---

## Summary


When the account has DM (Defense Mode) activated in the payment module, and tries to make a change v2 to increase the value, it will not be possible to proceed with the operation, as the gateway enters retry mode, increasing the response time for SOS (SalesOrdemSystem), then SOS cancels the operation and tries again, there are 5 attempts until the change operation is completely canceled!.

This same scenario occurs when any payment method requires manual authorization from a user and increases and causes a delay in communication between the gateway and the SOS.


#### Simulation


To simulate, the gateway must have defense mode activated and try to make a change v2 addition to the request!


#### Workaround


There is no workaround for this scenario, it is necessary to disable DM for change v2 to follow!




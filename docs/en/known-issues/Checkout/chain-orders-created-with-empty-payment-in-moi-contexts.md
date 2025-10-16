---
title: Chain orders created with empty payment in MOI contexts
slug: chain-orders-created-with-empty-payment-in-moi-contexts
status: PUBLISHED
createdAt: 2025-10-16T20:31:01.659Z
updatedAt: 2025-10-16T20:31:01.659Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: chain-orders-created-with-empty-payment-in-moi-contexts
locale: en
kiStatus: Backlog
internalReference: 1167363
---

## Summary


Orders created in a Multilevel Omnichannel Inventory (MOI) configuration at the `chain` level are created with two payments, one of them being empty with value `0`.


#### Simulation



- Create an order in a MOI context;
- The chain order will have two payments in it's transaction, one of them empty with value `0`.


#### Workaround


N/A




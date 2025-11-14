---
title: 'Payment created without connector leads to canceled transaction'
slug: payment-created-without-connector-leads-to-canceled-transaction
status: PUBLISHED
createdAt: 2025-11-14T19:30:09.783Z
updatedAt: 2025-11-14T19:30:09.783Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: payment-created-without-connector-leads-to-canceled-transaction
locale: en
kiStatus: Backlog
internalReference: 1323547
---

## Summary


In some checkout flows, the payment fails because the required `connector` field is not included in the `/payment` payload. As a result, the payment is created without an assigned connector, which prevents it from being properly processed by the provider. This issue usually occurs when the Payments API is called programmatically without setting the `connector` field or when no rule or affiliation is correctly bound before the provider handoff.


#### Simulation


It is not possible to simulate.


#### Workaround


N/A.



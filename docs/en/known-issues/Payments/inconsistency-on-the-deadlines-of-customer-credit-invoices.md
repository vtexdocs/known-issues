---
title: Inconsistency on the deadlines of Customer Credit invoices
slug: inconsistency-on-the-deadlines-of-customer-credit-invoices
status: PUBLISHED
createdAt: 2025-09-05T15:41:39.869Z
updatedAt: 2025-09-05T15:41:39.869Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: inconsistency-on-the-deadlines-of-customer-credit-invoices
locale: en
kiStatus: Backlog
internalReference: 331279
---

## Summary


In some cases, orders placed using the **Customer Credit** payment method may not correctly display the **customData** fields in the order JSON processed by OMS, even when the transaction and payment settlement are successfully completed.
This behavior is caused by inconsistencies in how `customData` is transmitted from the `orderForm` to the final order and can be impacted by apps that update this field or by checkout customizations.
As a result, integrations that rely on this data (such as payment terms or specific credit conditions) may fail.


#### Simulation


N/A


#### Workaround


N/A
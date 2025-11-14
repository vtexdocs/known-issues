---
title: 'Error triggered by overridden TOKEN in legacy PayPal connector for pending payment status'
slug: error-triggered-by-overridden-token-in-legacy-paypal-connector-for-pending-payment-status
status: PUBLISHED
createdAt: 2025-11-14T19:27:40.857Z
updatedAt: 2025-11-14T19:27:40.857Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: error-triggered-by-overridden-token-in-legacy-paypal-connector-for-pending-payment-status
locale: en
kiStatus: Backlog
internalReference: 308214
---

## Summary


In our legacy PayPal connector, we have faced an issue related to overriding the `TOKEN` field for `PAYMENTINFO_0_TRANSACTIONID`. The problem arises when the provider sends a payment status as pending. Consequently, the TOKEN gets overridden by our connector implementation, leading to an error triggered by PayPal during subsequent requests. As a result, the transaction becomes stuck with an "invalid token" message.


#### Simulation


This issue can only be reproduced in asynchronous cases.


#### Workaround


N/A




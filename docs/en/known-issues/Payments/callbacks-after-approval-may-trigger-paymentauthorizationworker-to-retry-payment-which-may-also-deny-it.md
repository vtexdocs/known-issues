---
title: 'Callbacks after approval may trigger PaymentAuthorizationWorker to retry payment which may also deny it.'
slug: callbacks-after-approval-may-trigger-paymentauthorizationworker-to-retry-payment-which-may-also-deny-it
status: PUBLISHED
createdAt: 2025-11-14T19:26:45.322Z
updatedAt: 2025-11-14T19:26:45.322Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: callbacks-after-approval-may-trigger-paymentauthorizationworker-to-retry-payment-which-may-also-deny-it
locale: en
kiStatus: Backlog
internalReference: 740499
---

## Summary


When the provider sends a callback right after authorization, it may trigger a new authorization attempt. Hence, in some cases when the transaction has more than 1 payment and one of them is a gift card, a new authorization retry may cancel the transaction when it has no funds.


#### Simulation


It can't be simulated as it depends on the provider's callback.


#### Workaround


N/A



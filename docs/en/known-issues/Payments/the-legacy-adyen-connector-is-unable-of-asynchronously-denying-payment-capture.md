---
title: 'The legacy Adyen connector is unable of asynchronously denying payment capture'
slug: the-legacy-adyen-connector-is-unable-of-asynchronously-denying-payment-capture
status: PUBLISHED
createdAt: 2025-11-14T19:31:43.850Z
updatedAt: 2025-11-14T19:31:43.850Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: the-legacy-adyen-connector-is-unable-of-asynchronously-denying-payment-capture
locale: en
kiStatus: Backlog
internalReference: 976005
---

## Summary


The legacy Adyen connector captures the payment whenever it receives the `"response":"[capture-received]"` field. However, this event only indicates that the capture has been received and will be processed asynchronously. This behavior prevents captures from being denied, as the asynchronous notification encounters an already captured payment and does not refund it.


#### Simulation


It depends on Adyen's capture response; therefore, a payment needs to be captured to receive a capture-failed notification.


#### Workaround


N/A




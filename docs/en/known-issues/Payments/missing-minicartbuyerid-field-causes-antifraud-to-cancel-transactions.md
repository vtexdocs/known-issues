---
title: 'missing minicart.buyer.id field causes anti-fraud to cancel transactions'
slug: missing-minicartbuyerid-field-causes-antifraud-to-cancel-transactions
status: PUBLISHED
createdAt: 2025-11-14T19:29:29.639Z
updatedAt: 2025-11-14T19:29:29.639Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: missing-minicartbuyerid-field-causes-antifraud-to-cancel-transactions
locale: en
kiStatus: Backlog
internalReference: 514335
---

## Summary


There have been instances where certain transactions are being declined during the anti-fraud analysis due to the null value in the `minicart.buyer.id` field. Thus, the `minicart.buyer.id` is expected to be sent from the checkout to the gateway through `sendAdditionalData`. However, according to the current checkout architecture, there is no specific requirement to provide this field in `sendAdditionalData`, and its definition may or may not be available at a later stage.


#### Simulation


It's not possible to reproduce this behavior once this is intermittent.


#### Workaround


It is possible to send the additional data afterward through our API:
https://developers.vtex.com/docs/api-reference/payments-gateway-api#post-/api/pvt/transactions/-transactionId-/additional-data




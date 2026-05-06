---
title: 'MELI integration missing BillingAddress'
slug: meli-integration-missing-billingaddress
status: PUBLISHED
createdAt: 2023-03-15T13:06:28.000Z
updatedAt: 2023-03-15T13:06:28.000Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: meli-integration-missing-billingaddress
locale: en
kiStatus: Backlog
internalReference: 771418
---

## Summary

Currently in our native Mercado Livre integration, we are not bringing the BillingAddress provided by MELI. Some sellers need that information inside the OMS Get Orders, in order to send the correct values to MELI in the invoice flow.

## Simulation

Inside OMS GET Order we are currently only bringing the shippingAddress, and not the BillingAddress, this can be seen inside the GET Order API

## Workaround

n/a
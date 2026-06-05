---
title: 'AdyenV1 connector is not sending pspReference on some operations and thus causing error'
slug: adyenv1-connector-is-not-sending-pspreference-on-some-operations-and-thus-causing-error
status: PUBLISHED
createdAt: 2023-02-23T16:51:46.000Z
updatedAt: 2026-06-05T20:15:50.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: adyenv1-connector-is-not-sending-pspreference-on-some-operations-and-thus-causing-error
locale: en
kiStatus: No Fix
internalReference: 758411
---

## Summary

In some operations, the native AdyenV1 connector is not sending the `pspsReference` code to Adyen. Since this field is mandatory for this integration, we receive an error response when it is missing.

The reason for the absence of this field is under investigation.

## Simulation

Place an order with the Adyen Connector and try to cancel it.

## Workaround

N/A.
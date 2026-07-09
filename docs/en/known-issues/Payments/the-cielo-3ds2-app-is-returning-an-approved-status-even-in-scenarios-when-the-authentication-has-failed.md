---
title: 'The Cielo 3DS2 app is returning an "approved" status even in scenarios when the authentication has failed.'
slug: the-cielo-3ds2-app-is-returning-an-approved-status-even-in-scenarios-when-the-authentication-has-failed
status: PUBLISHED
createdAt: 2023-05-05T17:48:42.000Z
updatedAt: 2026-07-09T14:37:45.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: the-cielo-3ds2-app-is-returning-an-approved-status-even-in-scenarios-when-the-authentication-has-failed
locale: en
kiStatus: No Fix
internalReference: 820060
---

## Summary

When the 3DS2 authentication step fails (e.g., the customer cannot be authenticated), the Cielo authentication app incorrectly continues the flow and sends an `approved` status to the authorization step. As a result, the transaction proceeds to the acquirer even though the 3DS2 check was not completed.
This creates a security gap: fraudulent transactions can bypass 3DS2 protection and get authorized by Cielo. Cielo may later flag those transactions as fraud indicators, putting the merchant at risk of disputes and chargebacks.

## Simulation

1. Enable 3DS2 in a store using the CieloV3 connector.
2. Attempt a purchase with a card that will fail the 3DS2 enrollment step.
3. Observe in the transaction interaction logs that the authentication returned a failure status (`Customer cannot be authenticated` or similar).
4. Note that despite the failure, VTEX sent `Authenticate: true` to Cielo, and the transaction was authorized.

## Workaround

Migrate to the **Cielo Ecommerce** connector (CieloV4). The bug is specific to `cielo-authentication-app v1.2.1` used by CieloV3. Cielo has officially recommended this migration, and the 3DS2 flow behaves correctly in the newer connector.
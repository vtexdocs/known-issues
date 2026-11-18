---
title: 'Empty response fields returned as "null" for connectors with additional fields enabled'
slug: empty-response-fields-returned-as-null-for-connectors-with-additional-fields-enabled
status: PUBLISHED
createdAt: 2026-11-18T20:35:00.000Z
updatedAt: 2026-11-18T20:35:00.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: empty-response-fields-returned-as-null-for-connectors-with-additional-fields-enabled
locale: en
kiStatus: Backlog
internalReference: 1486591
---

## Summary

Fields returned as in the authorization response are saved in the payment data as **string** instead of its original type. This occurs on connectors covered by the `additional-fields` feature flag. The value returned by the connector and stored on the payment is correct; only the type of the stored value is affected.

The issue mainly affects non-card transactions (e.g., Pix) placed through Sales App when the connector processing the transaction has the `additional-fields` feature flag enabled. In these transactions, payment fields such as `nsu` and `generatedCardToken` are expected to be null and are therefore saved as `"null"`. The same value is carried over to the order, where the payment’s NSU field is displayed as `"null"`.

## Simulation

1. Configure a Pix payment condition using a connector covered by the `additional-fields` flag;
2. Place an order through Sales App, selecting a non-card payment method (e.g., Pix);
3. Wait for the connector’s authorization response and check which fields are returned as `null`;
4. Retrieve the payment data through the GET payments API: the fields identified in step 3 are saved as `"null"`.

## Workaround

There is no workaround available to prevent these fields from being saved as the string `"null"`. If the value is affecting external integrations that consume the order data, those integrations should treat the string `"null"` as an empty value.
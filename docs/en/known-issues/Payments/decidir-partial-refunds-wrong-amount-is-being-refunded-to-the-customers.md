---
title: 'Decidir: Partial Refunds - Wrong amount is being refunded to the customers'
slug: decidir-partial-refunds-wrong-amount-is-being-refunded-to-the-customers
status: PUBLISHED
createdAt: 2020-09-26T01:31:10.000Z
updatedAt: 2026-07-02T16:54:57.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: decidir-partial-refunds-wrong-amount-is-being-refunded-to-the-customers
locale: en
kiStatus: No Fix
internalReference: 290981
---

## Summary

When a partial refund is issued through the Decidir connector, the amount actually refunded to the customer's credit card does not match the value displayed in the VTEX transaction. The transaction record appears correct in the admin, but the customer receives a different refund amount.

## Simulation

Unable to reproduce consistently. The discrepancy occurs due to a formatting mismatch in how the refund amount is sent to Decidir.

## Workaround

Not available.
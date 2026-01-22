---
title: 'Transaction cancellation error with "Unreachable code" message'
slug: transaction-cancellation-error-with-unreachable-code-message
status: PUBLISHED
createdAt: 2026-01-22T20:15:36.129Z
updatedAt: 2026-01-22T20:15:36.129Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transaction-cancellation-error-with-unreachable-code-message
locale: en
kiStatus: Backlog
internalReference: 998435
---

## Summary


Transaction cancellation requests may fail with the message “Unreachable code” (visible only via API) when a cancellation is sent to the Payments gateway.

The error can occur in different cancellation flows, full or partial, and may happen before transaction capture, regardless of whether a payment split has already been created.

Scenario 1 – Full transaction cancellation (Payments API)

A full transaction cancellation can fail returning the message `Unreachable code` (only visible via API).

This error happens in payment split scenario, in the UI you can see the cancellation attempt logs but no response.

Scenario 2 – Partial cancellation triggered by OMS (before capture)

A partial cancellation initiated by OMS (for example, during a change order) may fail with “Unreachable code”, even before the transaction is captured.

At the moment of the error:

The transaction is not captured;

No payment split exists yet.


#### Simulation


We were not able to simulate this error.


#### Workaround


Scenario 1
Cancel the payments separately, starting with the lowest value.

Scenario 2
Open a ticket with the Product/Payments team requesting the transaction to be finalized (captured).
Once the transaction is finalized, proceed with a refund for the required amount.



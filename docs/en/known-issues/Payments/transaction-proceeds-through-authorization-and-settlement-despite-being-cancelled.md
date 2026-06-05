---
title: 'Transaction proceeds through authorization and settlement despite being cancelled'
slug: transaction-proceeds-through-authorization-and-settlement-despite-being-cancelled
status: PUBLISHED
createdAt: 2026-06-05T18:29:03.000Z
updatedAt: 2026-06-05T18:29:03.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transaction-proceeds-through-authorization-and-settlement-despite-being-cancelled
locale: en
kiStatus: Backlog
internalReference: 1417330
---

## Summary

In scenarios where two sub-orders are created within the same checkout session (same order group), a transaction that has already been **cancelled** may unexpectedly proceed through the full authorization, anti-fraud, and settlement flow — resulting in an **unintended charge to the customer**.
This occurs due to a race condition between the cancellation and authorization requests. When both are triggered near-simultaneously, the authorization flow may operate on an outdated transaction state, bypassing the `Cancelled` status and completing as if the order were still valid.
**Expected behavior:** Once a transaction reaches `Cancelled` status, no further authorization or settlement should be permitted.
**Observed behavior:** The transaction transitions from `Cancelled` → `Authorizing` → `Settled`, generating a charge that should not have occurred.

## Simulation

Unable to reproduce in a controlled environment. The issue occurs intermittently in production and is more likely to manifest in **marketplace scenarios with split orders**, where cancellation and authorization can be triggered near-simultaneously by different services within the same order group session.

## Workaround

There is no workaround available.
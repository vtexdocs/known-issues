---
title: 'Braspag error when capturing or canceling due to an error with code BP901'
slug: braspag-error-when-capturing-or-canceling-due-to-an-error-with-code-bp901
status: PUBLISHED
createdAt: 2021-12-17T23:09:52.000Z
updatedAt: 2026-06-05T20:33:59.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: braspag-error-when-capturing-or-canceling-due-to-an-error-with-code-bp901
locale: en
kiStatus: No Fix
internalReference: 490428
---

## Summary

When using the **BrasPag** connector, some **capture or cancellation requests** fail with error code **BP901**. This error indicates a **timeout** in the communication between BrasPag and the acquirer — meaning the operation was attempted but no response was received within the expected timeframe, leaving the transaction in an inconsistent state.

## Simulation

Unable to reproduce in a controlled environment. The error occurs intermittently in production depending on communication stability between BrasPag and the acquirer at the time of the request.

## Workaround

There is no workaround available.
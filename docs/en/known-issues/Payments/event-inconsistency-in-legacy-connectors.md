---
title: 'Event inconsistency in legacy connectors'
slug: event-inconsistency-in-legacy-connectors
status: PUBLISHED
createdAt: 2024-05-07T17:29:59.000Z
updatedAt: 2026-05-28T19:46:30.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: event-inconsistency-in-legacy-connectors
locale: en
kiStatus: No Fix
internalReference: 1028677
---

## Summary

This is caused by an event that was published and never consumed in legacy connectors.
Usually, the order status gets stuck on payment pending, and the transaction can be stuck in authorizing or approved.

## Simulation

It is not possible to simulate this problem.

## Workaround

We can manually move the status by reprocessing the event via internal APIs.
---
title: 'DecidirV1 transaction got "reprocessed" after some retries to authorization'
slug: decidirv1-transaction-got-reprocessed-after-some-retries-to-authorization
status: PUBLISHED
createdAt: 2021-06-18T21:35:54.000Z
updatedAt: 2026-06-05T20:41:09.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: decidirv1-transaction-got-reprocessed-after-some-retries-to-authorization
locale: en
kiStatus: No Fix
internalReference: 384009
---

## Summary

This happens when a transaction gets the status 480 which means "REVIEW", and starts to retry until it receives a null payload. So, after that, we "reprocessed" the transaction which causes a failure and cancelation.

## Simulation

There's no way to simulate this.

## Workaround

No workaround is available at this time
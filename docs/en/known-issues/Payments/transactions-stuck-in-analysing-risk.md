---
title: 'Transactions stuck in analysing risk'
slug: transactions-stuck-in-analysing-risk
status: PUBLISHED
createdAt: 2022-03-11T21:56:32.000Z
updatedAt: 2025-03-06T16:20:12.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transactions-stuck-in-analysing-risk
locale: en
kiStatus: Backlog
internalReference: 541149
---

## Summary

Automatic retries are getting stuck in some transactions using an anti-fraud provider, this has two possible scenarios:

1. Taking longer than expected to call for a new retry to change its status.
2. Do not call the next retry, which leaves the transaction stuck

This is blocking customers' inventory.

## Simulation

Unable to simulate, this behavior occurs intermittently.

## Workaround

N/A
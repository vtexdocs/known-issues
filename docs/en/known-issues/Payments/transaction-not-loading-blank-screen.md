---
title: Transaction Not Loading - Blank Screen
slug: transaction-not-loading-blank-screen
status: PUBLISHED
createdAt: 2025-10-16T20:27:37.994Z
updatedAt: 2025-10-16T20:27:37.994Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transaction-not-loading-blank-screen
locale: en
kiStatus: Backlog
internalReference: 1157426
---

## Summary


When attempting to access a specific transaction, it loads indefinitely on a blank screen.


#### Simulation



1. Access the URL directly:
`https://.myvtex.com/admin/pci-gateway/#/transactions/`
2. Check in the dev tools' network tab that the only route failing to load is `/interactions`.
3. As a final validation, try accessing the `/interactions` route directly and receive a `504 Gateway Timeout` error.


#### Workaround


Deleting the interactions record is impossible, but the external service calling the gateway multiple times can reduce its frequency, preventing new cases from occurring.




---
title: 'Problems to cancel a transactions with Sitef connector'
slug: problems-to-cancel-a-transactions-with-sitef-connector
status: PUBLISHED
createdAt: 2021-04-02T02:15:15.000Z
updatedAt: 2026-06-05T21:19:18.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: problems-to-cancel-a-transactions-with-sitef-connector
locale: en
kiStatus: No Fix
internalReference: 351783
---

## Summary

During the cancellation flow for transactions processed through the **Sitef** connector, the connector intermittently **fails to return the expected response data**. As a result, the transaction gets stuck in **"Canceling"** status and never transitions to **"Canceled"**, which blocks the merchant's inventory from being released.

## Simulation

Unable to reproduce in a controlled environment. The issue occurs intermittently in production for transactions processed through the Sitef connector when a cancellation is triggered.

## Workaround

There's no workaround available.
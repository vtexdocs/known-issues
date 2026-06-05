---
title: 'Error to cancel private label transactions with Sitef'
slug: error-to-cancel-private-label-transactions-with-sitef
status: PUBLISHED
createdAt: 2021-10-18T20:02:55.000Z
updatedAt: 2026-06-05T21:18:03.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: error-to-cancel-private-label-transactions-with-sitef
locale: en
kiStatus: No Fix
internalReference: 451735
---

## Summary

When attempting to cancel a **Private Label** transaction processed through the **Sitef** connector, the cancellation process is incomplete. The Sitef cancellation flow requires two steps — `beginCancel` and `doCancel` — but for Private Label transactions, only the first step (`beginCancel`) is executed.
The second step fails because the `accountId` field is `null` for Private Label transactions, which prevents VTEX from completing the cancellation with the connector. As a result, the transaction is marked as cancelled on the VTEX platform, but **remains active on Sitef's side**, requiring manual intervention directly with Sitef to complete the cancellation.

## Simulation

Unable to reproduce in a controlled environment without a Sitef account with a Private Label payment method configured and test card credentials. The issue manifests in production when a cancellation is triggered on a captured Private Label transaction through Sitef.

## Workaround

There is no workaround available on the VTEX side. The merchant must **contact Sitef directly** to cancel the transaction on their end.
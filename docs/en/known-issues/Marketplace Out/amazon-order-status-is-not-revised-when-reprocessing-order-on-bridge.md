---
title: 'Amazon Order Status is not revised when reprocessing order on bridge'
slug: amazon-order-status-is-not-revised-when-reprocessing-order-on-bridge
status: PUBLISHED
createdAt: 2024-10-18T15:17:42.000Z
updatedAt: 2026-09-22T19:03:24.000Z
contentType: knownIssue
productTeam: Marketplace Out
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace Out
slugEN: amazon-order-status-is-not-revised-when-reprocessing-order-on-bridge
locale: en
kiStatus: Fixed
internalReference: 1119618
---

## Summary

Amazon orders that had some kind of error go to the bridge area with the error message and the status of the order at the time it was first processed.
However, even if the status update on Amazon (like getting canceled) the bridge status remain the same.
With that, if an order is reprocessed on bridge, it's status is no revised at the marketplace and it could cause errors of integrating orders with the wrong status.

## Simulation

1. Get an order with error on bridge;
2. Check if it's status is cancelled on Amazon;
3. Reprocess the order on bridge and check it is integrated successfully.

## Workaround

N/A
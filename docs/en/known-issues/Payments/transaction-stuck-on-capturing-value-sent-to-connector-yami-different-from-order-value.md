---
title: 'Transaction stuck on capturing, value sent to connector (Yamí) different from order value'
slug: transaction-stuck-on-capturing-value-sent-to-connector-yami-different-from-order-value
status: PUBLISHED
createdAt: 2020-12-18T18:57:08.000Z
updatedAt: 2026-06-05T21:21:40.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transaction-stuck-on-capturing-value-sent-to-connector-yami-different-from-order-value
locale: en
kiStatus: No Fix
internalReference: 317833
---

## Summary

Some transactions with transaction split using YamiSplitV1 send a value different from the order value to the connector. When trying to capture, the payload sent has a different value than the total, typically smaller, the gateway tries to make a new capture to complete the total value, when this happens the system understands that there has already been a capture and informs that there is nothing else to be captured.
In some cases the gateway informs that there is nothing more to be captured.

## Simulation

There is no way to replicate this behavior in a production environment.

## Workaround

There is no workaround
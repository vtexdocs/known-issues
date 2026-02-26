---
title: 'Pick and Pack | Single Order Generating Multiple Worksheets Due to Concurrency Issue'
slug: pick-and-pack-single-order-generating-multiple-worksheets-due-to-concurrency-issue
status: PUBLISHED
createdAt: 2026-02-26T19:19:00.919Z
updatedAt: 2026-02-26T19:19:00.919Z
contentType: knownIssue
productTeam: Pick and Pack
author: 2mXZkbi0oi061KicTExNjo
tag: Pick and Pack
slugEN: pick-and-pack-single-order-generating-multiple-worksheets-due-to-concurrency-issue
locale: en
kiStatus: Backlog
internalReference: 1370559
---

## Summary

Under specific concurrency scenarios in Pick and Pack, a single order may generate multiple worksheets even though only one package exists in OMS.
This happens due to a race condition during worksheet creation, where simultaneous internal processes attempt to create a worksheet for the same order at nearly the same time. As a result, duplicate or orphan worksheets can be created.

## Simulation

This behavior is not easily reproducible in a controlled environment, as it depends on concurrent internal events.
Observed scenario pattern:

1. An order is created and sent to Pick and Pack.
2. Two or more internal processes (e.g., automation flows, retries, or parallel event handlers) attempt to create a worksheet for the same order simultaneously.
3. The first process successfully creates the worksheet and links the items.
4. The second process also creates a worksheet record but fails during the item-linking step due to a version conflict or concurrent update.
5.

The additional worksheet remains created in the system, potentially without items associated.



This is a backend concurrency issue and does not depend on user interaction or operational configuration.

## Workaround

There is no workaround available.
Operationally, users may ignore the orphan worksheet if it contains no items, but there is no preventive action that can be taken at account level to avoid recurrence.
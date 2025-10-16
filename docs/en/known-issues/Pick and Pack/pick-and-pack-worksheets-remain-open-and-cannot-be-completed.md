---
title: Pick and Pack Worksheets remain open and cannot be completed
slug: pick-and-pack-worksheets-remain-open-and-cannot-be-completed
status: PUBLISHED
createdAt: 2025-10-16T20:29:02.455Z
updatedAt: 2025-10-16T20:29:02.455Z
contentType: knownIssue
productTeam: Pick and Pack
author: 2mXZkbi0oi061KicTExNjo
tag: Pick and Pack
slugEN: pick-and-pack-worksheets-remain-open-and-cannot-be-completed
locale: en
kiStatus: Backlog
internalReference: 1160144
---

## Summary


The worksheet statuses include **pending**, **to pack**, **completed**, and **canceled**.

When closing a worksheet, it should reach either the **completed** or **canceled** state. A potential issue is that these two final states may not be reached, which would prevent the process from being completed.

This could happen if the items associated with the worksheet haven't been reviewed by the picker or are blocked by pending processes, such as transfers or approvals.

As a result, the worksheet is blocked in a state that does not allow the flow to continue.


#### Simulation



- The picker accesses the worksheet.
- The picker proceeds to pick each item.
- Once the picking is complete, it means all items in the worksheet are marked as "**Picked**."
- The worksheet automatically move to the '**Completed**' state, but this behavior does not occur.


#### Workaround


There is no workaround




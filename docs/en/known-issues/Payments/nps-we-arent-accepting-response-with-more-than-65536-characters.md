---
title: "NPS - we aren't accepting response with more than 65536 characters"
slug: nps-we-arent-accepting-response-with-more-than-65536-characters
status: PUBLISHED
createdAt: 2020-12-17T18:32:42.000Z
updatedAt: 2026-06-05T21:08:36.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: nps-we-arent-accepting-response-with-more-than-65536-characters
locale: en
kiStatus: No Fix
internalReference: 317389
---

## Summary

When using the **NPS** connector, transactions containing a **large number of order items** may fail during the auto-settle step. The NPS connector returns a response that exceeds the **65,536 character limit** accepted by the VTEX Gateway, causing the settlement to fail with the following error:

> `Unknown Error on AutoSettle — The maximum message size quota for incoming messages (65536) has been exceeded. To increase the quota, use the MaxReceivedMessageSize property on the appropriate binding element.`

The transaction gets stuck and cannot be settled automatically.

## Simulation

The issue can be triggered by placing an order with **more than approximately 223 items** using the NPS connector. The response returned by NPS mirrors the full order items list, and when this list is large enough to exceed 65,536 characters, the Gateway rejects the message.

## Workaround

There is no workaround available.
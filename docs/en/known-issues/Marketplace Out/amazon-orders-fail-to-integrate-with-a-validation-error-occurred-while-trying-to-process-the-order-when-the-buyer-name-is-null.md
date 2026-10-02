---
title: 'Amazon Orders fail to integrate with "A validation error occurred while trying to process the order" when the buyer name is null'
slug: amazon-orders-fail-to-integrate-with-a-validation-error-occurred-while-trying-to-process-the-order-when-the-buyer-name-is-null
status: PUBLISHED
createdAt: 2026-10-02T20:01:28.000Z
updatedAt: 2026-10-02T20:01:28.000Z
contentType: knownIssue
productTeam: Marketplace Out
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace Out
slugEN: amazon-orders-fail-to-integrate-with-a-validation-error-occurred-while-trying-to-process-the-order-when-the-buyer-name-is-null
locale: en
kiStatus: Backlog
internalReference: 1469662
---

## Summary

Some Amazon orders fail to be integrated into VTEX OMS and keep returning the error `"A validation error occurred while trying to process the order"`, even after reprocessing. This happens when Amazon returns the order without the buyer's name (`buyerInfo.buyerName` empty or null)

## Simulation

1. Have an Amazon order where `buyerName=null` in the Orders API, while `shippingAddress.name` is filled in (e.g., "JOHN").
2. Wait for the integration to import the order, or reprocess it manually.
3. The order isn't created in OMS, and the integration logs/Bridge show "A validation error occurred while trying to process the order".


 ![](https://vtexhelp.zendesk.com/attachments/token/P3lwvoTdnUiv2dvjyPdLnR50H/?name=image.png)

## Workaround

There is no workaround on the VTEX side to integrate the affected order.
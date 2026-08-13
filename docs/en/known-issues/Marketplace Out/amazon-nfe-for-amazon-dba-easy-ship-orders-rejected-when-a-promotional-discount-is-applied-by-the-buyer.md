---
title: 'Amazon NF-e for Amazon DBA (Easy Ship) orders rejected when a promotional discount is applied by the buyer'
slug: amazon-nfe-for-amazon-dba-easy-ship-orders-rejected-when-a-promotional-discount-is-applied-by-the-buyer
status: PUBLISHED
createdAt: 2026-08-13T16:45:01.000Z
updatedAt: 2026-08-13T16:45:01.000Z
contentType: knownIssue
productTeam: Marketplace Out
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace Out
slugEN: amazon-nfe-for-amazon-dba-easy-ship-orders-rejected-when-a-promotional-discount-is-applied-by-the-buyer
locale: en
kiStatus: Backlog
internalReference: 1447551
---

## Summary

The NF-e for Amazon DBA (Easy Ship) orders is rejected, possibly when the buyer pays using a payment method that grants a promotional discount/incentive (e.g., Pix), causing the order to be automatically cancelled.

## Simulation

- Place an order through the Amazon DBA (Easy Ship) program where the buyer pays using a method that grants a promotional discount or incentive (e.g., Pix).
- Issue the NF-e using the order's total value (which already comes net of the discount applied by Amazon).
- Submit the invoice to Amazon.
- The order is automatically cancelled after the invoice is rejected possibly because the product value doesn't match what's expected.


 ![](https://vtexhelp.zendesk.com/attachments/token/RsGjBGfPvONupT0u4R6vhWSTt/?name=image.png)

## Workaround

There is no workaround available.
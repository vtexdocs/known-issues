---
title: 'Magazine Luiza Integration not support multiple packages'
slug: magazine-luiza-integration-not-support-multiple-packages
status: PUBLISHED
createdAt: 2026-02-24T23:42:06.000Z
updatedAt: 2026-09-22T19:11:30.000Z
contentType: knownIssue
productTeam: Marketplace Out
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace Out
slugEN: magazine-luiza-integration-not-support-multiple-packages
locale: en
kiStatus: Backlog
internalReference: 1369259
---

## Summary

Orders from the **Magazine Luiza marketplace** that are integrated into VTEX may be split into two packages, which consequently generates **two invoices**. However, Magalu currently accepts **only one single invoice per order**.

Because of this, Magalu flags the order as **“Invalid Invoice (NF inválida)”** and does not move the flow forward, even when the order is already marked as delivered in VTEX.

In Bridge, the order status remains as **“Invoiced (Faturado)”**, and the **Delivered** status is not reflected correctly.

 ![](https://vtexhelp.zendesk.com/attachments/token/sZfLKTWPRFsSIMFBZ2lO1LUz7/?name=image.png)

## Simulation

- Receive an order from Magalu that, when processed in VTEX, results in different carriers per item, causing the order to be split into two packages.
- Issue the invoices following VTEX’s standard flow, which generates two invoices, one for each package.

## Workaround

N/A
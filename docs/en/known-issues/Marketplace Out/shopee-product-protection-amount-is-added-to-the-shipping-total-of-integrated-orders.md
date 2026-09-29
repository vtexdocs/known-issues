---
title: 'Shopee Product Protection amount is added to the shipping total of integrated orders'
slug: shopee-product-protection-amount-is-added-to-the-shipping-total-of-integrated-orders
status: PUBLISHED
createdAt: 2026-09-29T23:20:48.000Z
updatedAt: 2026-09-29T23:20:48.000Z
contentType: knownIssue
productTeam: Marketplace Out
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace Out
slugEN: shopee-product-protection-amount-is-added-to-the-shipping-total-of-integrated-orders
locale: en
kiStatus: Backlog
internalReference: 1468080
---

## Summary

When a Shopee order includes Product Protection (the warranty the buyer adds at checkout), the amount paid for it is added to the order's shipping cost when the order is integrated into VTEX. As a result, the order shows a higher shipping value than it should, and the invoice is issued with a total above the correct amount.

## Simulation

1. Place an order on Shopee with Product Protection added.
2. Wait for the order to be integrated into VTEX.
3. Open the order in the VTEX Admin and check the shipping value: it includes the Product Protection amount.
4. Invoice the order: the invoice total is higher than expected by the Product Protection amount.

## Workaround

N/A
---
title: 'Shopee Product Protection amount is added to the order total of integrated orders'
slug: shopee-product-protection-amount-is-added-to-the-order-total-of-integrated-orders
status: PUBLISHED
createdAt: 2026-09-29T23:20:48.000Z
updatedAt: 2026-10-14T18:19:30.000Z
contentType: knownIssue
productTeam: Marketplace Out
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace Out
slugEN: shopee-product-protection-amount-is-added-to-the-order-total-of-integrated-orders
locale: en
kiStatus: Backlog
internalReference: 1468080
---

## Summary

When a Shopee order includes Product Protection (the warranty the buyer adds at checkout), the amount paid for it is included in the order total when the order is integrated into VTEX. Depending on the order, the amount shows up in the item price or in the shipping value. As a result, the order total in VTEX is higher than the merchandise value, and the invoice is issued above the correct amount.

## Simulation

1. Place an order on Shopee with Product Protection added.
2. Wait for the order to be integrated into VTEX.
3. Open the order in the VTEX Admin: the order total equals the amount paid by the buyer, Product Protection included. The amount is added to the item price (as a seller price adjustment) or to the shipping value.
4. Invoice the order: the invoice total is higher than expected by the Product Protection amount.

## Workaround

N/A
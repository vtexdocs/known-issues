---
title: 'Dafiti Installment interest incorrectly increases item sellingPrice in Dafiti orders'
slug: dafiti-installment-interest-incorrectly-increases-item-sellingprice-in-dafiti-orders
status: PUBLISHED
createdAt: 2026-07-01T18:24:46.000Z
updatedAt: 2026-07-01T18:24:46.000Z
contentType: knownIssue
productTeam: Marketplace Out
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace Out
slugEN: dafiti-installment-interest-incorrectly-increases-item-sellingprice-in-dafiti-orders
locale: en
kiStatus: Backlog
internalReference: 1428531
---

## Summary

In Dafiti orders that include installment interest, the connector distributes the "Acréscimo DFT" (the difference between what Dafiti charged the customer and the VTEX-calculated total) as marketplace `priceTags` across the order items. This causes the `sellingPrice` of each item to be inflated beyond the actual product price (`price` field), generating a mismatch between the fiscal value of the order and the value used for invoicing and returns — leading to divergence between the outgoing invoice (NF de saída) and the return invoice (NF de devolução).

## Simulation

**Simulation**

1. Place an order through Dafiti with installment interest enabled.
2. Retrieve the order via OM:
3. Observe that `sellingPrice` is higher than `price` — the difference corresponds to the "Acréscimo DFT" distributed among the items.
4. Confirm the "Acréscimo DFT" entry in the order `totals` array.

## Workaround

N/A
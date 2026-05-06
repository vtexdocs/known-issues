---
title: 'Installment options not updating automatically on PDP/PLP'
slug: installment-options-not-updating-automatically-on-pdpplp
status: PUBLISHED
createdAt: 2024-02-23T12:31:14.000Z
updatedAt: 2024-02-23T12:31:14.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: installment-options-not-updating-automatically-on-pdpplp
locale: en
kiStatus: Backlog
internalReference: 987467
---

## Summary

When a account changes the installment options of a product, despite the product being correctly indexed, the installment options do not update on the PLP or the PDP (sometimes both).

## Simulation

1. Create an installment option and check that it reflects correctly on PDP/PLP
2. Update this same installment
3. Check that not all PDPs and PLPs updated to the new correct information.

## Workaround

Reindex the affected products again.
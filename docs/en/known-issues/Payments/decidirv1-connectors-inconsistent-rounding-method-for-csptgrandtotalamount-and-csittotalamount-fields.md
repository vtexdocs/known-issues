---
title: "DecidirV1 Connector's Inconsistent rounding method for CSPTGRANDTOTALAMOUNT and CSITTOTALAMOUNT Fields."
slug: decidirv1-connectors-inconsistent-rounding-method-for-csptgrandtotalamount-and-csittotalamount-fields
status: PUBLISHED
createdAt: 2023-04-10T23:32:15.000Z
updatedAt: 2026-07-02T15:43:08.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: decidirv1-connectors-inconsistent-rounding-method-for-csptgrandtotalamount-and-csittotalamount-fields
locale: en
kiStatus: No Fix
internalReference: 787367
---

## Summary

When using the DecidirV1 connector with products priced with more than two decimal places, the order total reported to Decidir's fraud prevention system does not match the actual payment value. This divergence can cause anti-fraud validation failures or inconsistencies between the transaction record and the charged amount.

## Simulation

1. Set up a product with a unit price containing more than two decimal places (e.g., $10.999).
2. Add the product to the cart and complete checkout using the DecidirV1 connector.
3. Observe that the total amount in the Decidir transaction differs from the cart total.

## Workaround

Avoid configuring products with prices that exceed two decimal places. Adjust the catalog so that all unit prices have a maximum of two decimal places to prevent the mismatch.
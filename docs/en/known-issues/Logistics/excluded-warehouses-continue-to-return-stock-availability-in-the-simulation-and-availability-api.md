---
title: 'Excluded warehouses continue to return stock availability in the simulation and availability API'
slug: excluded-warehouses-continue-to-return-stock-availability-in-the-simulation-and-availability-api
status: PUBLISHED
createdAt: 2025-06-18T23:20:11.000Z
updatedAt: 2026-08-12T20:05:17.000Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slugEN: excluded-warehouses-continue-to-return-stock-availability-in-the-simulation-and-availability-api
locale: en
kiStatus: No Fix
internalReference: 1246900
---

## Summary

When a warehouse is deleted in the Logistics module, it can remain registered in the availability inventory base. This causes the stock availability of SKUs to still consider quantities from these warehouses that no longer exist, causing SKUs to become unavailable or display unrealistic quantities.
The situation occurs mainly when the warehouse deletion process involves a high volume of SKUs linked to it, which can generate a timeout and leave residues in the availability base even after removal in Logistics. The impact is felt in the

## Simulation

APIs and in the selection of sellers, generating inconsistencies for the merchant and the shopper, impacting the in-store shopping experience.


## **Simulation**


- Create a warehouse in the account and associate SKUs with this warehouse, assigning positive quantities to the stock.
- Delete the warehouse via the Logistics module.
- Execute a call to the simulation API.
- Observe that, in the response, the SKU returns availability from the deleted warehouse, or that the sum of the stocks includes values that are not in line with what exists in the valid warehouses. Using the route for listing active warehouses in the account, notice that the warehouse in question is no longer listed, but still appears in the availability/simulation return.
- The SKU may become unavailable for purchase because of this residual stock or show an unrealistic quantity in the stock endpoints.

## Workaround

Migrating the account's indexing to Delivery Promise resolves this behavior, since it eliminates the dependency on the legacy availability base where the residual stock from deleted warehouses persists.

For accounts **not** using Delivery Promise: there is no public workaround available. Treatment is exclusively backend and must be handled case-by-case via ticket with the engineering team, who will perform the cleanup on the availability base.
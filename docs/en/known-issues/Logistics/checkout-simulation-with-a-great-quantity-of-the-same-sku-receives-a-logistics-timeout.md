---
title: Checkout simulation with a great quantity of the same sku receives a Logistics timeout
slug: checkout-simulation-with-a-great-quantity-of-the-same-sku-receives-a-logistics-timeout
status: PUBLISHED
createdAt: 2025-09-25T15:16:45.972Z
updatedAt: 2025-09-25T15:16:45.972Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slugEN: checkout-simulation-with-a-great-quantity-of-the-same-sku-receives-a-logistics-timeout
locale: en
kiStatus: No Fix
internalReference: 330775
---

## Summary


We have an error in the Logistics service when trying to simulate a purchase with thousands of units of the same SKU. That error happens because the request to split the package takes too long.

The error detail in the API is: "The operation was canceled."

For kit products, the scenario can be even more restrictive because the logistics will calculate each component of the kit individually.


#### Simulation



1. Try to make a **Checkout Simulation** or a simulation in the **Shopping Cart** with thousands of units of the same SKU (like 50k or 3k for kits)
2. Review the details in the response of the API, and you probably see an error when processing that request (**timeout**)


#### Workaround


We recommend increasing the carrier's package limits to accommodate the units in a single package. It would provide a faster request and would not return a timeout.


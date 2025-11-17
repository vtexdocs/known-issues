---
title: "Quantity-selector on stepper mode doesn't refresh after reaching max available qunatity"
slug: quantityselector-on-stepper-mode-doesnt-refresh-after-reaching-max-available-qunatity
status: PUBLISHED
createdAt: 2025-11-17T17:43:22.629Z
updatedAt: 2025-11-17T17:43:22.629Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: quantityselector-on-stepper-mode-doesnt-refresh-after-reaching-max-available-qunatity
locale: en
kiStatus: Backlog
internalReference: 704458
---

## Summary


If you reach the available quantity of the product by clicking more than once, the component takes too long to warn you and doesn't even refresh the quantity selector with the max available quantity.


#### Simulation


Try to go over the available quantity of a product by clicking on the quantity arrows, you will receive a message saying that this quantity is not available but the quantity number is not refreshed. If you change the quantity manually it works as expected.


#### Workaround



N/A
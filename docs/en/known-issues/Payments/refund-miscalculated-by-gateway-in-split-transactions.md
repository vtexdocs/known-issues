---
title: Refund miscalculated by gateway in split transactions
slug: refund-miscalculated-by-gateway-in-split-transactions
status: PUBLISHED
createdAt: 2025-10-16T20:42:32.069Z
updatedAt: 2025-10-16T20:42:32.069Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: refund-miscalculated-by-gateway-in-split-transactions
locale: en
kiStatus: Backlog
internalReference: 1196767
---

## Summary


The gateway refund requests have only the commission amount value, even if the order management system request was sent with the total value.

To identify this known issue you should: Verify the total value requested on orders and compare with the calculated, and requested by the gateway to the provider. Then, check if the value is different between them, the same commission amount is on the recipient's object.


#### Simulation


Is not possible to simulate.


#### Workaround


There is no workaround available.




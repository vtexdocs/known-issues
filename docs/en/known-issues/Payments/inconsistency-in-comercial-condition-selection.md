---
title: 'Inconsistency in comercial condition selection'
slug: inconsistency-in-comercial-condition-selection
status: PUBLISHED
createdAt: 2025-11-14T19:29:01.807Z
updatedAt: 2025-11-14T19:29:01.807Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: inconsistency-in-comercial-condition-selection
locale: en
kiStatus: Backlog
internalReference: 1210072
---

## Summary


When the percentual difference **of the SKU value in the condition is lower than 1%,** the gateway might have some inconsistencies choosing the commercial condition.

Ex:

The SKU values  belonging to Condition B should be equal or higher than 99% in the cart:

Considering the following SKUs Value:

4.400(Condition A)/(4.400(Condition A) *428.397(Condition B)) = 1,01% > 1%

The percentual difference is lower than 1% (0,01%) - The condition chosen could be B


#### Simulation


N/A


#### Workaround


N/A




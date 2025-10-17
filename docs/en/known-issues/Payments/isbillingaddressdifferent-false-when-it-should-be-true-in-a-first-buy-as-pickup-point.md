---
title: '"isBillingAddressDifferent": false when it should be true in a first buy as pick-up point'
slug: isbillingaddressdifferent-false-when-it-should-be-true-in-a-first-buy-as-pickup-point
status: PUBLISHED
createdAt: 2025-10-16T20:38:06.319Z
updatedAt: 2025-10-16T20:38:06.319Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: isbillingaddressdifferent-false-when-it-should-be-true-in-a-first-buy-as-pickup-point
locale: en
kiStatus: Backlog
internalReference: 1183699
---

## Summary


Sometimes, when a first buy is made as pick-up, the `shippingData` object inside the transaction receives the billing address, even though the two are different. Also, the `"isBillingAddressDifferent"` in the Payment details receives false, when it should've been received true.


#### Simulation


there is no way to assertively reproduce the error as it is intermittent.


#### Workaround


There is no workaround for this bug.



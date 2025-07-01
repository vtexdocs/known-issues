---
title: alation Incomplete billingAddress despite isBillingAddressDifferent: false
slug: alation-incomplete-billingaddress-despite-isbillingaddressdifferent-false
status: PUBLISHED
createdAt: 2025-07-01T13:42:03.593Z
updatedAt: 2025-07-01T13:42:03.593Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: alation-incomplete-billingaddress-despite-isbillingaddressdifferent-false
locale: en
kiStatus: Backlog
internalReference: 1252301
---

## Summary


The `billingAddress` is incomplete, missing fields such as `street`, `number`, `neighborhood`, and `postalCode`. In some unclear scenarios, even when the `isBillingAddressDifferent` field is set to `false` (indicating the `billingAddress` should be the same as the `shippingAddress`), the `billingAddress` ends up being different, and often an incomplete version of the `shippingAddress`.


#### Simulation


This issue cannot be reproduced reliably.



#### Workaround


There is no known workaround.




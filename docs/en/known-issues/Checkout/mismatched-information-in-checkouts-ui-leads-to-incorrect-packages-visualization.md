---
title: 'Mismatched information in checkout''s UI leads to incorrect packages visualization'
slug: mismatched-information-in-checkouts-ui-leads-to-incorrect-packages-visualization
status: PUBLISHED
createdAt: 2025-10-16T20:33:13.389Z
updatedAt: 2025-10-16T20:33:13.389Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: mismatched-information-in-checkouts-ui-leads-to-incorrect-packages-visualization
locale: en
kiStatus: Backlog
internalReference: 1170509
---

## Summary


Checkout's UI omnishipping component expects the same ordination for the `items` orderForm object and the `shippingData.logisticsInfo` orderForm object.

When this ordination is not matched between both objects the order's package information may present mismatched items and packages.


#### Simulation


There is no straightforward step-by-step process for replicating this scenario, but it can be checked in the orderForm via API.


#### Workaround


N/A




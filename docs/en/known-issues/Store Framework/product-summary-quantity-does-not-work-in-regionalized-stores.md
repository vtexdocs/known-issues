---
title: 'Product Summary Quantity does not work in regionalized stores'
slug: product-summary-quantity-does-not-work-in-regionalized-stores
status: PUBLISHED
createdAt: 2025-10-27T12:42:13.468Z
updatedAt: 2025-10-27T12:42:13.468Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: product-summary-quantity-does-not-work-in-regionalized-stores
locale: en
kiStatus: Backlog
internalReference: 1313686
---

## Summary


In stores with regionalization the component product-summary-quantity does not render because it always check for availability on the default seller, not on white label seller.


#### Simulation


Regionalize a store that uses the product-summary-quantity block in any shelf and you will see that it won't appear.


#### Workaround


N/A




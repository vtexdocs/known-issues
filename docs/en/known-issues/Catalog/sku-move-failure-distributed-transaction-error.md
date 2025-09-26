---
title: SKU Move Failure: Distributed Transaction Error
slug: sku-move-failure-distributed-transaction-error
status: PUBLISHED
createdAt: 2025-09-26T19:40:52.584Z
updatedAt: 2025-09-26T19:40:52.584Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: sku-move-failure-distributed-transaction-error
locale: en
kiStatus: Backlog
internalReference: 1297799
---

## Summary


When a user attempts to move a SKU within a product, the action might fail. The user will receive an error message on the screen, and a log in the devtools will show the message "This platform does not support distributed transactions." This issue occurs intermittently.


#### Simulation


Try to move a SKU from one product to another. The error message "You can't move the SKU to another product. Try it again". The detailed message can be seen in the browser's DevTools Network tab.


#### Workaround


N/A. Some products will cause the error, and it won't be possible to move them.




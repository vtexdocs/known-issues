---
title: 'SKU Move Failure: Distributed Transaction Error'
slug: sku-move-failure-distributed-transaction-error
status: PUBLISHED
createdAt: 2025-09-29T13:14:51.696Z
updatedAt: 2025-09-29T13:14:51.696Z
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


When a user attempts to move a SKU within a product, the action might fail. The user will receive an error message on the screen, and a log in the DevTools will show the message "This platform does not support distributed transactions." This issue occurs intermittently.


#### Simulation


Via Catalog UI in Admin, enter in a SKU and try to move it to another product. The error message "You can't move the SKU to another product. Try it again" will be displayed in the Admin UI. The detailed message can be seen in the browser's DevTools Network tab.


#### Workaround


N/A. Some products will cause the error, and it won't be possible to move them.




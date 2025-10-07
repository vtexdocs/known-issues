---
title: O=OrderByBestDiscount brings the wrong order
slug: oorderbybestdiscount-brings-the-wrong-order
status: PUBLISHED
createdAt: 2025-10-07T19:51:14.186Z
updatedAt: 2025-10-07T19:51:14.186Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slugEN: oorderbybestdiscount-brings-the-wrong-order
locale: en
kiStatus: Backlog
internalReference: 409119
---

## Summary


OrderByBestDiscount is calculated taking into account the lowest `listPrice` and `price` among all available sales channels


#### Simulation



- Enter more than one price on the product. Ex: two different list prices on different sellers
- Put page sorting by discount (O=OrderByBestDiscount)
- See that the sorting is not in the order of the prices being displayed


#### Workaround


N/A
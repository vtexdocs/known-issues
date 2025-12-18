---
title: 'Checkout overwrites receiver name with customer name'
slug: checkout-overwrites-receiver-name-with-customer-name
status: PUBLISHED
createdAt: 2025-12-18T12:36:42.617Z
updatedAt: 2025-12-18T12:36:42.617Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: checkout-overwrites-receiver-name-with-customer-name
locale: en
kiStatus: Fixed
internalReference: 324792
---

## Summary


The receiver name is rewritten with the customer name after reloading the checkout page.


#### Simulation





- create a new cart
- go ahead as a new customer with a name "A"
- insert an address, filling the receiver with a name "B"
- go to the payment step
- reload the page


#### Workaround


N/A
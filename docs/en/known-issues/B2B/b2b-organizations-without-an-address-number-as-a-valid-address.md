---
title: B2B Organizations without an address number as a valid address
slug: b2b-organizations-without-an-address-number-as-a-valid-address
status: PUBLISHED
createdAt: 2025-10-16T15:50:49.601Z
updatedAt: 2025-10-16T15:50:49.601Z
contentType: knownIssue
productTeam: B2B
author: 2mXZkbi0oi061KicTExNjo
tag: B2B
slugEN: b2b-organizations-without-an-address-number-as-a-valid-address
locale: en
kiStatus: Backlog
internalReference: 1173874
---

## Summary


B2B Organizations allow you to add an address without a number to an organization, even though it's mandatory for Checkout. This prevents the buyer from proceeding with the purchase.

We noticed this behavior in Chile, but it's not limited to this country.


#### Simulation



- Create an organization;
- Add an address without the number;
- Try to finish a purchase; it won't allow you to move to the payment step.


#### Workaround


Add the number when registering the address.



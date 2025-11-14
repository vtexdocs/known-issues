---
title: 'Adding a new address on Invoice Address returns null API results'
slug: adding-a-new-address-on-invoice-address-returns-null-api-results
status: PUBLISHED
createdAt: 2025-11-14T19:15:48.743Z
updatedAt: 2025-11-14T19:15:48.743Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: adding-a-new-address-on-invoice-address-returns-null-api-results
locale: en
kiStatus: Backlog
internalReference: 748668
---

## Summary


When there is more than one address registered in the Profile System, there is a "null" request to the zip code service if you add a new address on "Invoice Address".


#### Simulation



- Have more than 1 address registered in the Profile System;
- Select a pickup point;
- Click on "Deliver to another address" to add a new address on "Invoice Address" without selecting any other option.

The request was `/api/checkout/pub/postal-code/null/postalcodenumber`, so it returns the 500 error. Due to this return, it doesn't autocomplete the address using the zip code service.


#### Workaround


Select an option already registered before adding a new address



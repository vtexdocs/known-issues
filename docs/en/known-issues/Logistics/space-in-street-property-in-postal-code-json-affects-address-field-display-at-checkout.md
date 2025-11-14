---
title: 'Space in street property in Postal Code JSON affects address field display at checkout'
slug: space-in-street-property-in-postal-code-json-affects-address-field-display-at-checkout
status: PUBLISHED
createdAt: 2025-11-14T19:23:44.579Z
updatedAt: 2025-11-14T19:23:44.579Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slugEN: space-in-street-property-in-postal-code-json-affects-address-field-display-at-checkout
locale: en
kiStatus: Backlog
internalReference: 872935
---

## Summary


When activating the use of the postal code API in the address form for countries that are not in the BR model (country, state, city, neighborhood, street), these countries that do not have all these fields filled in the API and need to be able to enter the other address data in the address form at checkout, the street field of the address block will not be available if the street property of JSON is with space, as it will be understood as filled and valid, which does not allow to proceed with the order.



#### Simulation


Create a cart in an EMEA store that uses Postal code and address form and in the postal code base the street field is with space " " .
The address field will not be available to be filled in.


#### Workaround


Does not exist




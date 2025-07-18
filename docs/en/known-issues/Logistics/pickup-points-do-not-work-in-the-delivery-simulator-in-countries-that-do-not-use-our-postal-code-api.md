---
title: Pick-up points do not work in the delivery simulator in countries that do not use our postal code API
slug: pickup-points-do-not-work-in-the-delivery-simulator-in-countries-that-do-not-use-our-postal-code-api
status: PUBLISHED
createdAt: 2025-07-18T19:47:11.562Z
updatedAt: 2025-07-18T19:47:11.562Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slugEN: pickup-points-do-not-work-in-the-delivery-simulator-in-countries-that-do-not-use-our-postal-code-api
locale: en
kiStatus: -
internalReference: 1262007
---

## Summary


The delivery simulator does not work with pick-up points in countries that do not use our postal code API.

You can check whether a country uses our postal code base here:

https://github.com/vtex/address-form/tree/main/react/country

Select the country and search for 'PostalcodeAPI'; if this field is set to 'false', the country does not use our postal code base.


#### Simulation



Make a shipping simulation (/admin/logistics#/freight-simulation), and the pickup point will not appear as an option.


#### Workaround


It will not affect the pickup point operation in the store, and the pickup point should work correctly in the checkout.



---
title: 'Catalog Brand API REST allows the client to break the information if sending request with wrong values'
slug: catalog-brand-api-rest-allows-the-client-to-break-the-information-if-sending-request-with-wrong-values
status: PUBLISHED
createdAt: 2020-07-29T15:32:38.000Z
updatedAt: 2023-05-11T18:00:29.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: catalog-brand-api-rest-allows-the-client-to-break-the-information-if-sending-request-with-wrong-values
locale: en
kiStatus: Fixed
internalReference: 269109
---

## Summary

There are a lot of routes that support some type of value, but if the costumer uses another type of value (for example, insert null instead of boolean) can broke the product / SKU / category / brand interface. Denying the client to update the information through admin.

## Simulation

For the routes `api/catalog/pvt/brand?an=`or` /api/catalog/pvt/brand/?an=`, the documentation says that the field `MenuHome` only accepts boolean values. But if we send a request with "null" for example, the route will return a 200 and we are able ti insert this value. After this, if we try to edit the brand on the admin interface, we will not be able. It will return a Something Went Wrong error with the `exception_message="Object cannot be cast from DBNull to other types."`

## Workaround

Update the information again, through the API.
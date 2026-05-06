---
title: 'Attribute meli_shipping_mode not being updated in MELI integration'
slug: attribute-melishippingmode-not-being-updated-in-meli-integration
status: PUBLISHED
createdAt: 2023-08-03T10:18:52.000Z
updatedAt: 2024-06-10T13:37:55.000Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: attribute-melishippingmode-not-being-updated-in-meli-integration
locale: en
kiStatus: Fixed
internalReference: 873993
---

## Summary

We currently have an issue with the product attribute named "meli_shipping_mode" which is not being updated in MELI integration

## Simulation

Inside the product specification the seller can use the attribute "meli_shipping_mode" and set ME1 or ME2 to define the shipping strategy in MELI.

But currently we can only sending this value while creating the SKU in MELI, and we are not updating with the correct value.

## Workaround

n/a
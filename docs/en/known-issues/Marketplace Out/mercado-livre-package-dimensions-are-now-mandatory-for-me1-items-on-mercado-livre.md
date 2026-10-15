---
title: 'Mercado Livre Package dimensions are now mandatory for ME1 items on Mercado Livre'
slug: mercado-livre-package-dimensions-are-now-mandatory-for-me1-items-on-mercado-livre
status: PUBLISHED
createdAt: 2026-10-15T16:41:43.000Z
updatedAt: 2026-10-15T16:43:31.000Z
contentType: knownIssue
productTeam: Marketplace Out
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace Out
slugEN: mercado-livre-package-dimensions-are-now-mandatory-for-me1-items-on-mercado-livre
locale: en
kiStatus: Backlog
internalReference: 1474056
---

## Summary

Mercado Livre now requires package dimensions and weight to be filled in for ME1 items as well, not only for ME2. Since the integration does not yet send this data for ME1 items, exporting and updating these SKUs is rejected.

## Simulation

Exporting or updating ME1 SKUs to Mercado Livre fails.
The error returned is: The attributes [seller_package_height, seller_package_width, seller_package_length, seller_package_weight] are all required.
The SKU is correctly classified as ME1, for example items longer than 70 cm on any side.
Observed in categories that require package dimensions, such as agricultural tires.

The integration only sends package dimensions and weight for ME2 items. Mercado Livre has stated that, for sellers who work with both ME1 and ME2, these fields are mandatory when creating any item, including ME1. Sellers who work with ME1 only are not required to send them.

Meli is rejecting it with "The attributes [seller_package_height, seller_package_width, seller_package_length, seller_package_weight] are all required", but the SKU is **me1** (correct for the item's size a 75x75x18cm tire, over the 70cm-per-side threshold that defines ME1).

## Workaround

There is no workaround available. Switching the item to ME2 does not help, as the item may not be eligible and would trigger an ME1/ME2 coexistence error.
---
title: 'Amazon Listing SKU can’t be sent through Product publication after its images are replaced in the catalog'
slug: amazon-listing-sku-cant-be-sent-through-product-publication-after-its-images-are-replaced-in-the-catalog
status: PUBLISHED
createdAt: 2026-11-16T22:08:26.000Z
updatedAt: 2026-11-16T22:08:26.000Z
contentType: knownIssue
productTeam: Marketplace Out
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace Out
slugEN: amazon-listing-sku-cant-be-sent-through-product-publication-after-its-images-are-replaced-in-the-catalog
locale: en
kiStatus: Backlog
internalReference: 1485622
---

## Summary

In Amazon Product publication, SKUs whose attributes were already saved and whose images were later replaced in the catalog can no longer be sent to Amazon. When clicking “Save and send”, the page shows “The SKU could not be sent to Amazon due to a technical problem”, and the SKU remains as “Incomplete registration”, even with all attributes filled in.
The error happens on every attempt. Meanwhile, the product isn’t created on Amazon, and the SKU’s price and inventory aren’t available for sale either.

## Simulation

1. In Amazon Product publication, open a SKU, fill in the attributes and save.
2. In the catalog, replace the SKU’s images.
3. Go back to Product publication and click “Save and send”.
4. The page shows “The SKU could not be sent to Amazon due to a technical problem”, and the SKU remains as “Incomplete registration”.

## Workaround

Open a ticket with VTEX Support listing the affected SKUs, so the submission can be redone with the current catalog images.
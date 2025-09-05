---
title: Mercado Livre Main Image not respected
slug: mercado-livre-main-image-not-respected
status: PUBLISHED
createdAt: 2025-09-05T16:26:41.723Z
updatedAt: 2025-09-05T16:26:41.723Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: mercado-livre-main-image-not-respected
locale: en
kiStatus: Backlog
internalReference: 1287784
---

## Summary


The main image set in VTEX admin isn't respected in the Mercado Livre integration. The main image shown on Netshoes is always the first image uploaded, based on upload order — regardless of the image marked as main in VTEX.



#### Simulation



- Access the VTEX admin and open a product.
- Upload two or more images to a SKU. Select one of them as the main image but not the first one added.
- After syncing with Mercado Livre, observe that the main image displayed on the marketplace is the first image uploaded, ignoring the main imagem defined in the admin.


#### Workaround



1. To control which image appears as the main image in the Marketplace, the seller must ensure that the desired main image is uploaded first when registering the product in VTEX.
2. Merchant also has the option to adjust the ordering directly in the Mercado Livre dashboard.
3. It's not possible to update the SKU image through the VTEX integration after it has been sent to Mercado Livre.




---
title: 'Netshoes - Main Image not respected'
slug: netshoes-main-image-not-respected
status: PUBLISHED
createdAt: 2025-05-06T17:10:23.000Z
updatedAt: 2026-06-23T16:02:44.000Z
contentType: knownIssue
productTeam: Marketplace Out
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace Out
slugEN: netshoes-main-image-not-respected
locale: en
kiStatus: Backlog
internalReference: 1220978
---

## Summary

The main image set in VTEX admin is **not respected** in the Netshoes integration. The main image shown on Netshoes is always the **first image uploaded**, based on upload order — regardless of the image marked as main in VTEX.

## Simulation

- Access the VTEX admin and open a product.
- Upload two or more images to a SKU. Mark one of them as the main image b**ut not the first one added**.
- After syncing with Netshoes, observe that the main image displayed on the marketplace is the **first image uploaded**, ignoring the main imagem defined in the admin.

## Workaround

To control which image is shown as the main one in Netshoes, the seller must **ensure the desired main image is uploaded first** when registering the product in VTEX.
Also, **it is not possible to update the SKU image via the VTEX integration once it has been sent to Netshoes**. Any image update must be **requested manually by opening a ticket directly with Netshoes**.
The current integration does **not support mapping or prioritizing main image**
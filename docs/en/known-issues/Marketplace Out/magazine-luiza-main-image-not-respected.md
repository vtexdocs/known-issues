---
title: 'Magazine Luiza - Main Image not respected'
slug: magazine-luiza-main-image-not-respected
status: PUBLISHED
createdAt: 2025-05-06T18:19:45.000Z
updatedAt: 2026-06-23T15:54:07.000Z
contentType: knownIssue
productTeam: Marketplace Out
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace Out
slugEN: magazine-luiza-main-image-not-respected
locale: en
kiStatus: Backlog
internalReference: 1221096
---

## Summary

The main image set in VTEX admin is **not respected** in the Magazine Luiza integration. The main image shown on Magazine Luiza is always the **first image uploaded**, based on upload order — regardless of the image marked as main in VTEX

## Simulation

- Access the VTEX admin and open a product.
- Upload two or more images to a SKU. Mark one of them as the main image b**ut not the first one added**.
- After syncing with Magazine Luiza, observe that the main image displayed on the marketplace is the **first image uploaded**, ignoring the main imagem defined in the admin.

## Workaround

To ensure that the desired image is displayed as the main one on Magazine Luiza, the seller must upload that image **first** in the VTEX admin, making sure it appears at the top of the list.
Although updating the main image after the SKU has been sent is technically possible through a new synchronization, the current behavior **does not prioritize the main image logic defined in the VTEX admin**.
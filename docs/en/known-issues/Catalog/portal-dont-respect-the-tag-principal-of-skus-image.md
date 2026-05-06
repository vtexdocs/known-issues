---
title: "Portal don't respect the tag \"Principal\" of SKU's Image"
slug: portal-dont-respect-the-tag-principal-of-skus-image
status: PUBLISHED
createdAt: 2022-12-07T17:47:12.000Z
updatedAt: 2022-12-08T13:43:57.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: portal-dont-respect-the-tag-principal-of-skus-image
locale: en
kiStatus: Backlog
internalReference: 712443
---

## Summary

A store needs to configure the **Principal** image regardless of the order in which it was loaded into the system. Currently the system does not respect the **Principal** tag and ends up taking the first registered image as the main one.

## Simulation

1. Configure two imagens in the SKU.

2. Try to change de main image since the button **Principal** in the list of images.

3. Look in the store front if the change works.

## Workaround

Always set the image you want to Main as the first registered image for the SKU. It involves more work on having to erase the images and reload them.
---
title: "Infocard mobile images won't apply"
slug: infocard-mobile-images-wont-apply
status: PUBLISHED
createdAt: 2023-09-28T17:38:46.000Z
updatedAt: 2024-02-19T19:12:02.000Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: infocard-mobile-images-wont-apply
locale: en
kiStatus: Backlog
internalReference: 909647
---

## Summary

When you change the image on an infocard to be displayed on the mobile version, it won't be shown. Instead, the main image stays being shown.

## Simulation

- Open an infocard on site-editor for editing.
- Change the main image of the infocard and apply.
- Change the image for the mobile version of the infocard and apply.
- Observe the results, the image will still be the main image instead of the one set for mobile when in mobile mode.

## Workaround

Instead, try to use a flex layout with a store image + other apps to create the desired banner.
---
title: 'RefId behavior not consistent between API and UI'
slug: refid-behavior-not-consistent-between-api-and-ui
status: PUBLISHED
createdAt: 2023-09-29T13:10:51.000Z
updatedAt: 2023-10-20T13:41:33.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: refid-behavior-not-consistent-between-api-and-ui
locale: en
kiStatus: Backlog
internalReference: 910050
---

## Summary

Currently, we have two behaviors for the refid code, via API it is not possible to be the same as other products, but via UI it allows us to insert the same value as other products already have.

## Simulation

Create a product with a redIf code
Create another product and try to use the same refId code as the other one, via API it won't be possible but via UI it will.

## Workaround

If you need to use the same refIds for different products, insert them via UI.
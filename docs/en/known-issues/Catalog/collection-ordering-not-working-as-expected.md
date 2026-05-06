---
title: 'Collection ordering not working as expected'
slug: collection-ordering-not-working-as-expected
status: PUBLISHED
createdAt: 2022-01-12T14:03:18.000Z
updatedAt: 2023-05-12T14:36:54.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: collection-ordering-not-working-as-expected
locale: en
kiStatus: Fixed
internalReference: 502409
---

## Summary

On Collections (Beta), we should be able to change the order of the products inside a collection using the feature "Move to Position":

https://help.vtex.com/tutorial/creating-collections-beta--yJBHqNMViOAnnnq4fyOye

However, this feature fails intermittently and does not work properly all the time.

## Simulation

- Go to any collection settings admin: `.myvtex.com/admin/collections`
- Try to change the order of a Product inside the collection;
- Wait until the product is automatically reindexed with the new order on the collection.

## Workaround

There is no workaround in Collections (Beta), but manually setting the order of products is possible in Collections created through the legacy CMS (Portal) with some restrictions:
https://help.vtex.com/en/known-issues/manual-sorting-of-collections-doesnt-work-as-expected--aGTNVDT6LKKoWuSceQWs0
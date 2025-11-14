---
title: 'Space in warehouse ID causes internal logistics requests to fail'
slug: space-in-warehouse-id-causes-internal-logistics-requests-to-fail
status: PUBLISHED
createdAt: 2025-11-14T19:23:58.631Z
updatedAt: 2025-11-14T19:23:58.631Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slugEN: space-in-warehouse-id-causes-internal-logistics-requests-to-fail
locale: en
kiStatus: Fixed
internalReference: 654370
---

## Summary


The logistics UI allows a user to create a Warehouse by registering an ID with space and this directly affects the requests made to this warehouse and may cause failures in the inventory update.


#### Simulation



1- Enter Inventory & Shipping - Shipping Strategy - Warehouses

2- Click on create a Warehouse

3- Enter an Id with space between the characters and save.

4- Do a get with the List all Warehouse API, see that the ID was saved with space;



#### Workaround


** **
To avoid or adjust these scenarios, when creating a warehouse, use underscores to separate characters, in case you need to have spaces between characters or words.




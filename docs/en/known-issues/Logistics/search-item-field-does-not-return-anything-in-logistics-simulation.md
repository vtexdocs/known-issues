---
title: 'Search item field does not return anything in logistics simulation'
slug: search-item-field-does-not-return-anything-in-logistics-simulation
status: PUBLISHED
createdAt: 2022-11-14T18:06:22.000Z
updatedAt: 2026-08-18T16:36:08.000Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slugEN: search-item-field-does-not-return-anything-in-logistics-simulation
locale: en
kiStatus: Backlog
internalReference: 697628
---

## Summary

When a user enters the name of an item in the

## Simulation

field to perform a simulation, the logistics system uses a route from the catalog to scan the catalog and bring up the items that contain the searched name, this query may take longer than the time logistics wait limit and with that it will not return any results, this delay can occur due to the structure of the store catalog x waiting time of the logistics API;


## **Simulation**

Login to Admin

Go to Shipping Simulator

In the "Select product" field, write the name of an existing item in the account catalog;

See that the "Select product" field will be loading;

In the console, you will see a 500 bad request error in the `textToSearch` query route;

## Workaround

Perform the search directly using the SKUId or ProductId.
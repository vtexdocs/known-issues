---
title: 'Timeout in Analytics Query Can Prevent Inventory Log from Loading'
slug: timeout-in-analytics-query-can-prevent-inventory-log-from-loading
status: PUBLISHED
createdAt: 2025-10-16T20:28:47.650Z
updatedAt: 2025-10-16T20:28:47.650Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slugEN: timeout-in-analytics-query-can-prevent-inventory-log-from-loading
locale: en
kiStatus: No Fix
internalReference: 1159693
---

## Summary


In the inventory UI, the update log sometimes fails to load for specific SKUs, displaying the error message: `There was an error loading the data. Please try again.` The request fails with the exception message: `Request failed with status code 500`, which indicates a timeout in the query to Analytics (where the data is stored). As a result, no log for the SKU is shown in the UI.

This timeout can occur due to high update volume for the SKU or other factors that can cause the query to exceed the maximum allowed execution time of 40 seconds.


#### Simulation


Due to the variable being the response time for the query to Analytics, it is not possible to replicate in a concise way.


#### Workaround


In some cases, refreshing the page will resolve the issue and allow the inventory log to load correctly.




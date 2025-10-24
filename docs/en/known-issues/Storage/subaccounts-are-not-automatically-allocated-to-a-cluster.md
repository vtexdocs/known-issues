---
title: 'Subaccounts are not automatically allocated to a cluster'
slug: subaccounts-are-not-automatically-allocated-to-a-cluster
status: PUBLISHED
createdAt: 2025-10-16T20:52:58.547Z
updatedAt: 2025-10-16T20:52:58.547Z
contentType: knownIssue
productTeam: Storage
author: 2mXZkbi0oi061KicTExNjo
tag: Storage
slugEN: subaccounts-are-not-automatically-allocated-to-a-cluster
locale: en
kiStatus: Backlog
internalReference: 1227332
---

## Summary


Subaccounts are not automatically allocated to a cluster upon creation. As a result, masterdata search do not function correctly for these subaccounts.


#### Simulation



1. Create or access a subaccount that has not been manually allocated to a cluster.
2.

Attempt to call the Masterdata Search API, such as:

    GET https://..com/api/dataentities/CL/search?_fields=id

3. Observe that the response returns an 500 error indicating that the masterdata search is not functioning.


#### Workaround


The API from this documentation can also allocate an account to a cluster - Customer and address forms do not exist in multistores. To use it the user must have the resource ADMIN_DS on its role.




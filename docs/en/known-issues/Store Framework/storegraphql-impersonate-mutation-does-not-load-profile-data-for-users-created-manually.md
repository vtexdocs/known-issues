---
title: 'Store-graphql impersonate mutation does not load profile data for users created manually'
slug: storegraphql-impersonate-mutation-does-not-load-profile-data-for-users-created-manually
status: PUBLISHED
createdAt: 2025-10-16T20:48:59.077Z
updatedAt: 2025-10-16T20:48:59.077Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: storegraphql-impersonate-mutation-does-not-load-profile-data-for-users-created-manually
locale: en
kiStatus: Backlog
internalReference: 1214877
---

## Summary


The impersonate mutation from the vtex.store-graphql app does not behave as expected when the customer was not created via the VTEX platform, but instead imported directly into Masterdata (regardless of whether it was via API, spreadsheet, or manual input). When this happens, the customer's profile data is not immediately available to the vtex.telemarketing app after impersonation.



#### Simulation


To reproduce the issue:

Import a user into Masterdata without (can be via API, manual entry, or spreadsheet).

Go to a store that uses vtex.telemarketing with a valid admin role of telemarketing.

Try to impersonate the new user.

Observe that the profile information is null in the mutation response.

Refresh the page manually. After that, the profile data appears correctly.



#### Workaround


**Refresh the page** after using the `impersonate` mutation, either manually or programmatically. This forces the profile data to be fetched properly.




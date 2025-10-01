---
title: Affiliation created in subaccount not listed in Admin; ‘Affiliation name is already used’ on retry
slug: affiliation-created-in-subaccount-not-listed-in-admin-affiliation-name-is-already-used-on-retry
status: PUBLISHED
createdAt: 2025-10-01T19:45:25.000Z
updatedAt: 2025-10-01T19:45:25.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: affiliation-created-in-subaccount-not-listed-in-admin-affiliation-name-is-already-used-on-retry
locale: en
kiStatus: -
internalReference: 1300974
---

## Summary


When creating a new Payment Provider affiliation in a **subaccount**, Admin may confirm the save but the affiliation does not appear in the Affiliations list. On retry with the same name, the UI returns “Affiliation name is already used”.
The affiliation does exist and can be accessed directly via its ID in the URL, confirming persistence in the backend but a listing/display inconsistency in the subaccount context.
This behavior prevents reusing the intended affiliation name and hides the record from the grid, causing confusion and blocking testing timelines.


#### Simulation


1- Access Admin > Affiliations in a subaccount.
2- Create a new Payment Provider affiliation and save.
3- Admin confirms the creation, but the new affiliation does not appear in the list at /admin/affiliations.
4- Attempt to create it again with the same name; the UI returns “Affiliation name is already used”.
5- Navigate directly using the exact affiliation ID in the URL; the affiliation loads, confirming that it exists in the backend but is not displayed in the subaccount list.


#### Workaround



- Use a different affiliation name in the principal account or a different account where the listing functions normally.
- If the exact affiliation ID is known, access the configuration directly via the URL to view/edit it despite it not appearing in the list. Note: This confirms existence but does not fix the listing behavior.




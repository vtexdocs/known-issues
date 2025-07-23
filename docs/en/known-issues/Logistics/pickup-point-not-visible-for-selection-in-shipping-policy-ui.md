---
title: 'Pickup point not visible for selection in shipping policy (UI)'
id: 84BhCZGoAxxuu1eljw0Uh
status: DRAFT
createdAt: 2021-12-28T14:52:46.105Z
updatedAt: 2024-02-16T20:27:08.666Z
publishedAt: 
firstPublishedAt: 2021-12-28T22:18:57.306Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: 
slugEN: pickup-point-not-visible-for-selection-in-shipping-policy-ui
locale: en
kiStatus: No Fix
internalReference: 449813
---

## Summary


When trying to select a pickup point in a shipping policy configuration, a few options might not be shown in the UI. This occurs when there are more than 999 pickup points registered, as the system has a lock to demonstrate only 999 results.



## Simulation


Consider an account with more than 999 pickup points configured.

- Create a new shipping policy or edit an existing one;
- In the "Link Pickup Point" Section, try choosing one pickup point;
- You will notice that only 999 Pickup Points will be available to be chosen, the remaining ones will be unavailable.



## Workaround


When the desired pickup point is not in the list, it is possible to make the association by tag, or else directly associate the PUP via the Update Shipping Policy API.


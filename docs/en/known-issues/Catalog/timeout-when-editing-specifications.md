---
title: Timeout when editing specifications
slug: timeout-when-editing-specifications
status: PUBLISHED
createdAt: 2025-10-02T19:54:41.975Z
updatedAt: 2025-10-02T19:54:41.975Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: timeout-when-editing-specifications
locale: en
kiStatus: Fixed
internalReference: 1192667
---

## Summary


The user is expected to be able to edit specifications by API and admin without errors. However, when editing a product specification in the category structure, an account with a large volume of products in the catalog may experience timeout events during the editing process, making it impossible to change this information.


#### Simulation



1. Access the specifications in a specific category;
2. Attempt to save a change (either through the UI or API);
3. See a timeout error in the response (UI or API)


#### Workaround


Contact VTEX support to edit the information.




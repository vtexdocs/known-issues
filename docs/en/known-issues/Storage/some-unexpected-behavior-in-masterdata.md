---
title: Some unexpected behavior in MasterData
slug: some-unexpected-behavior-in-masterdata
status: PUBLISHED
createdAt: 2025-10-10T16:12:05.352Z
updatedAt: 2025-10-10T16:12:05.352Z
contentType: knownIssue
productTeam: Storage
author: 2mXZkbi0oi061KicTExNjo
tag: Storage
slugEN: some-unexpected-behavior-in-masterdata
locale: en
kiStatus: Backlog
internalReference: 669048
---

## Summary


Even with data available (documents), the information is not returned as expected.
This behavior can impact some of the following functionalities:

- Images in the Site Editor (CMS) are not available, due error message "_Something went wrong. Please try again._";
- It is not possible to access entities and its documents due error message "_An unexpected error has occurred. Please try again. If the problem persists, contact support._";
- The `_sort` is not respected on Search documents API;
- No information is returned when using Search Documents API (an empty response, like `[]`), even when they contain documents.


#### Simulation


As this is an occasional behavior (cluster-related event), it cannot be simulated.


#### Workaround


A possible workaround is to perform the process described in the public documentation "_Customer and Address forms do not exist in multistores_."
If the problem persists, please open a ticket with VTEX support.



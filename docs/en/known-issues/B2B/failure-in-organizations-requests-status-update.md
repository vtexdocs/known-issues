---
title: Failure in Organizations Requests status update
slug: failure-in-organizations-requests-status-update
status: PUBLISHED
createdAt: 2025-10-14T13:31:31.912Z
updatedAt: 2025-10-14T13:31:31.912Z
contentType: knownIssue
productTeam: B2B
author: 2mXZkbi0oi061KicTExNjo
tag: B2B
slugEN: failure-in-organizations-requests-status-update
locale: en
kiStatus: Backlog
internalReference: 1275305
---

## Summary



When approving an Organization Request in the B2B Suite it is possible that the request status doesn't update correctly after creating the organization, leaving it in `Pending`.

This happens for unknown reason and two possible scenarios are known:

- The organization is correctly created but the request's status fails to update;
- The organization is incompletely created missing cost center and users information and the status fails to update.


#### Simulation



There is no way to replicate the issue.


#### Workaround



When the organization is correctly created (with user and cost center) you can request a status sync to VTEX's support teams.

When the organization is created with missing users and cost center, it must be deleted using a `deleteOrganization` request via graphQL. The organization request can be approved once more after deleting the faulty organization previously created.



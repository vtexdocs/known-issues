---
title: 'Paste action blocked on login and on the Pick and Pack picking search field'
slug: paste-action-blocked-on-login-and-on-the-pick-and-pack-picking-search-field
status: PUBLISHED
createdAt: 2025-12-22T19:09:04.504Z
updatedAt: 2025-12-22T19:09:04.504Z
contentType: knownIssue
productTeam: Pick and Pack
author: 2mXZkbi0oi061KicTExNjo
tag: Pick and Pack
slugEN: paste-action-blocked-on-login-and-on-the-pick-and-pack-picking-search-field
locale: en
kiStatus: Backlog
internalReference: 1343368
---

## Summary


Users are unable to paste text into specific fields in the Pick and Pack flow: the login fields (username/password) and the search field on the picking panel.

When trying to paste using either keyboard shortcuts (Ctrl+C / Ctrl+V) or the context menu paste option, nothing is inserted into these fields.

The behavior was reported on the **gruporamos** account; however, it occurs on all accounts that use Pick and Pack when accessing the picking app, and indicates that the paste action is being blocked or intercepted in these inputs.


#### Simulation


**Prerequisite:** Have access to the Pick and Pack picking application.
**Steps:**

1. Copy any text (for example: `129318231838`).
2. Access the picking page at `/tasks/picking` (reported at https://picking.pick-and-pack.com/tasks/picking).
3. Try to paste the copied text into the following fields:
  - Login fields (username and password).
  - Search field on the picking panel.
4. Observe that the paste action is not accepted in these inputs (no text is inserted).


#### Workaround


Type the data directly into the field.




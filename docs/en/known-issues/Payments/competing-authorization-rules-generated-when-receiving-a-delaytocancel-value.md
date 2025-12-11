---
title: 'Competing Authorization Rules generated when receiving a delayToCancel value'
slug: competing-authorization-rules-generated-when-receiving-a-delaytocancel-value
status: PUBLISHED
createdAt: 2025-12-11T16:09:08.786Z
updatedAt: 2025-12-11T16:09:08.786Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: competing-authorization-rules-generated-when-receiving-a-delaytocancel-value
locale: en
kiStatus: Backlog
internalReference: 1338614
---

## Summary


When the connector updates the delayToCancel field after the first authorization response, VTEX gateway enqueues a new authorization flow but keeps the original one active. The visible symptom is that two retry plans run in parallel, which can cancel the VTEX order by the lowest delay time.


#### Simulation



-

Start a transaction with an initial delayToCancel of 3 hours (10800s) on the authorization response.



-

Returns a new delayToCancel of 4 days (345600s) in a subsequent response.



-

Observe that both authorization “plans” continue: retries from the first plan keep occurring (e.g., every hour up to 3 attempts) while the second plan also schedules retries (e.g., every 4 hours up to 24 attempts). The order may be canceled by the first plan before the second plan’s retries complete





#### Workaround


Prefer sending the longest/most conservative delayToCancel in the first authorization response to avoid enqueuing a short plan that will cancel early.




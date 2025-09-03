---
title: Giftcard Hub call receives 500 error
slug: giftcard-hub-call-receives-500-error
status: PUBLISHED
createdAt: 2025-09-03T15:21:42.321Z
updatedAt: 2025-09-03T15:21:42.321Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: giftcard-hub-call-receives-500-error
locale: en
kiStatus: Backlog
internalReference: 1286257
---

## Summary


When the Giftcard Hub receives any error, it ends up returning a **500 error** to the user. This occurs because errors are handled in the Giftcard System code.

This behavior can happen across different requests, regardless of the HTTP verb. The root cause is that when the Giftcard System does not find content in the response, which is common in **4xx** and **5xx** responses, it clears the content from memory.
Later, when the code tries to access this element again, it has already been disposed of, resulting in the following error message:


    Cannot access a disposed object. Object name: 'System.Net.Http.StreamContent'.

##
With this, the user does not have clear information about what happened, which makes troubleshooting much more difficult.


#### Simulation


It is not possible to simulate this behavior.


#### Workaround


None.




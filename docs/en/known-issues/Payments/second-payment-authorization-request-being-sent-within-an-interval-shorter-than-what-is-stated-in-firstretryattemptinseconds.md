---
title: Second payment authorization request being sent within an interval shorter than what is stated in FirstRetryAttemptInSeconds.
slug: second-payment-authorization-request-being-sent-within-an-interval-shorter-than-what-is-stated-in-firstretryattemptinseconds
status: PUBLISHED
createdAt: 2025-10-16T20:30:31.769Z
updatedAt: 2025-10-16T20:30:31.769Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: second-payment-authorization-request-being-sent-within-an-interval-shorter-than-what-is-stated-in-firstretryattemptinseconds
locale: en
kiStatus: Backlog
internalReference: 1165831
---

## Summary


The Payment is canceled due to the second authorization request being sent by the gateway earlier then what is stated in the Authorization Rules. Typically, the payment partner cannot process the second request due to the short interval between the 2 requests, leading to a "denied" response and to the transaction being cancelled.


#### Simulation


It's not possible to simulate this scenario.


#### Workaround


One possible workaround would be at the partner connector side, making it more resilient to handle a possible second request within an interval shorter than what is stated in FirstRetryAttemptInSeconds.



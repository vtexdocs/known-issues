---
title: 'Race condition with GET OrderForm when user is authenticated and email is null'
slug: race-condition-with-get-orderform-when-user-is-authenticated-and-email-is-null
status: PUBLISHED
createdAt: 2026-03-31T19:07:03.731Z
updatedAt: 2026-03-31T19:07:03.731Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: race-condition-with-get-orderform-when-user-is-authenticated-and-email-is-null
locale: en
kiStatus: Backlog
internalReference: 1386397
---

## Summary

GET OrderForm may run concurrently with other orderForm update requests. If, upon request, the user is authenticated, the orderForm's `email` field is `null`, the GET OrderForm will load the user's profile data to the orderForm, which may generate conflict with the result of other concurrent requests.

Especially, when the GET runs concurrently with a POST `/attachments/clientProfileData` request and finishes after it, the `clientProfileData` passed on the attachment request may be overwritten and the user's profile data loaded by the GET request will prevail.

## Simulation

There is no simple way to simulate this issue, but it should happen if:


1. User is authenticated and the orderForm's `email` field is `null`
2. A request to POST `/attachments/clientProfileData` is made passing a different data from the user's profile
3.

A GET orderForm request is made _**before**_ and finishes _**after**_ the POST `/attachments/clientProfileData` has been finished



After both requests are finished, `clientProfileData` should be the one from the user's profile and not the one passed on POST `/attachments/clientProfileData`

## Workaround

N/A
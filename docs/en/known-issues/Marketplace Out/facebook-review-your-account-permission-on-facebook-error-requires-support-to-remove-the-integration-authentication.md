---
title: 'Facebook “Review your account permission on Facebook” error requires support to remove the integration authentication'
slug: facebook-review-your-account-permission-on-facebook-error-requires-support-to-remove-the-integration-authentication
status: PUBLISHED
createdAt: 2026-11-06T15:09:21.000Z
updatedAt: 2026-11-06T15:10:03.000Z
contentType: knownIssue
productTeam: Marketplace Out
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace Out
slugEN: facebook-review-your-account-permission-on-facebook-error-requires-support-to-remove-the-integration-authentication
locale: en
kiStatus: Backlog
internalReference: 1481964
---

## Summary

The error “Review your account permission on Facebook” happens when there is an authentication problem with Facebook. In some cases, SKUs also show this error:


```
{"error":{"message":"(#200) Permissions error","type":"OAuthException","code":200,
```



To fix it, the integration’s authentication has to be removed, the app has to be disabled in Facebook Business Extension (FBE), and the seller then has to go through the whole authentication process again. The merchant can’t remove the authentication on their own, so a support ticket is always needed. Every time the authentication process is redone, a new catalog is created.

## Simulation

1. The integration returns the error “Review your account permission on Facebook”.
2. In some cases, SKUs show the error `(#200) Permissions error` (`OAuthException`, code 200).
3. The merchant can’t remove the integration’s authentication on their own to redo the process.


 ![](https://vtexhelp.zendesk.com/guide-media/01HAZA5D67F68Z4C39ZF16BKEM)

 ![](https://vtexhelp.zendesk.com/guide-media/01HA5FQR9ZBH3ZE8SD7AC4MQYV)

## Workaround

1. Open a ticket with VTEX Support to remove the integration’s authentication.
2. Disable the app in Facebook Business Extension (FBE).
3. Redo the authentication process.
---
title: 'License Manager authorization checks intermittently time out, causing failures in dependent services'
slug: license-manager-authorization-checks-intermittently-time-out-causing-failures-in-dependent-services
status: PUBLISHED
createdAt: 2026-10-08T19:03:55.000Z
updatedAt: 2026-10-08T19:03:55.000Z
contentType: knownIssue
productTeam: Identity
author: 2mXZkbi0oi061KicTExNjo
tag: Identity
slugEN: license-manager-authorization-checks-intermittently-time-out-causing-failures-in-dependent-services
locale: en
kiStatus: Backlog
internalReference: 1471842
---

## Summary

A small share of requests to License Manager (LM) authorization endpoints, such as `/logins/{user}/granted` and `/resources/{resourceKey}/granted`, take longer than the timeout set by the service calling them. Most of these requests are answered in milliseconds, but some take several seconds. When that happens, the calling service gives up and fails its own request. Occasionally LM also returns 503 or 500 errors.

Because many VTEX services check permissions with LM before doing anything else, a slow or failed LM response makes those services fail too, even though the user or app has the right permissions. Services affected include Payment Gateway, Checkout, SOS, OMS, Master Data and Admin. Each one shows a different error, depending on its own timeout and error handling.

The most significant impact today is on **Payment Gateway**. It checks account access in LM on every request, with a 2-second limit. When LM doesn't answer in time, the gateway returns HTTP 500 `"A task was canceled"` without running the requested operation. The effect depends on the gateway route:

- `StartTransaction`, `SendAdditionalData` and `AuthorizeTransaction`: the transaction stops before reaching the acquirer, and the order may be canceled.
- `GetTransaction`, when Checkout calls it after payment approval: the order may be canceled even though payment was approved. With connectors that use manual refunds, the shopper stays charged until the store refunds them.
- Read routes (payments, settlements, refunds): these usually succeed when retried.

The issue is intermittent, happens every day, and is spread across accounts with no account-specific pattern. Retrying the same request usually succeeds.

## Simulation

This issue can't be reproduced on demand. It is intermittent and happens mainly when the calling service needs a new authorization result from License Manager. For example, Payment Gateway reuses a result for 5 minutes, then asks License Manager again. The failures appear in the logs of the service that called License Manager, not in License Manager's own logs.

- **Payment Gateway:** HTTP 500 `"A task was canceled"` after about 2,000 ms, logged as `CancelingRequestProcessing` / `GatewayRequestTimeoutException`.
  - If it fails while creating or authorizing the transaction, the acquirer has no record of the request.
  - If it fails on `GetTransaction` during the Checkout callback, the order is canceled even though the payment was approved.

- **Other services that call License Manager:** in the mesh logs (`vlm`), requests end with status `0` (the caller gave up) or `503`, at about the caller's own timeout.
- **License Manager:** on some days, `BrokenCircuitException` errors are returned as 500. These come from License Manager's user lookups in VTEX ID.

## Workaround

There is no workaround on the store side.

- Retrying the failed request usually succeeds.
- Orders canceled after an approved payment must be refunded through the connector flow.
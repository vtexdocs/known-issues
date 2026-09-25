---
title: 'Opt-in promotions can be configured with White Label sellers via API'
slug: optin-promotions-can-be-configured-with-white-label-sellers-via-api
status: PUBLISHED
createdAt: 2026-09-25T20:19:09.000Z
updatedAt: 2026-09-25T20:20:57.000Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: optin-promotions-can-be-configured-with-white-label-sellers-via-api
locale: en
kiStatus: Backlog
internalReference: 1466622
---

## Summary

White Label sellers (seller type 2) are not supported for promotions using the Opt-in functionality. The Admin UI intentionally prevents this configuration, as the Opt-in flow was not designed to support White Label sellers.
However, the configuration can currently be created or updated through the API. This allows unsupported Opt-in promotions with White Label sellers to be configured, but their behavior is not guaranteed and may not work as expected.

## Simulation

1. Create or edit a promotion with the Opt-in functionality.
2. Attempt to configure a White Label seller (seller type 2) as an opted-in seller through the Admin UI.
3. Observe that the Admin UI does not allow this configuration.
4. Configure the same seller through the Promotions API.
5. Observe that the API allows the White Label seller to be added to the Opt-in configuration.

The resulting promotion may be configured successfully, but this scenario is not supported and the promotion behavior cannot be guaranteed.

## Workaround

N/A
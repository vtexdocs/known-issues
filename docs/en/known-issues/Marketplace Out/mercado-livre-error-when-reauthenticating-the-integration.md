---
title: 'Mercado Livre Error when re-authenticating the integration'
slug: mercado-livre-error-when-reauthenticating-the-integration
status: PUBLISHED
createdAt: 2026-11-06T01:58:24.000Z
updatedAt: 2026-11-06T01:58:24.000Z
contentType: knownIssue
productTeam: Marketplace Out
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace Out
slugEN: mercado-livre-error-when-reauthenticating-the-integration
locale: en
kiStatus: Backlog
internalReference: 1481892
---

## Summary

When a store reconfigures its Mercado Livre integration and tries to authenticate the account again, the authentication doesn’t complete and the following error is shown:
`500 - Internal server error. Operation Id: [xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx]`
The integration stays disconnected from the Mercado Livre account.

## Simulation

1. Open the Mercado Livre integration settings for a store that was already authenticated before.
2. Reconfigure the integration and start a new authentication.
3. The authentication doesn’t complete and the error above is shown.

## Workaround

Open a ticket with VTEX Support with the account name and the listing type (Classic and/or Premium) of the integration. After Support makes the adjustment, authenticate again with the browser cache cleared.
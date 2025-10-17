---
title: My Credits displays agent’s balance, not customer’s, during telesales impersonation
slug: my-credits-displays-agents-balance-not-customers-during-telesales-impersonation
status: PUBLISHED
createdAt: 2025-10-02T12:44:55.995Z
updatedAt: 2025-10-02T12:44:55.995Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: my-credits-displays-agents-balance-not-customers-during-telesales-impersonation
locale: en
kiStatus: Unknown
internalReference: 1301293
---

## Summary


When a user with the Telesales role impersonates a customer and navigates to My Account > My Credits, the balance displayed corresponds to the telesales agent’s own credit instead of the impersonated customer’s credit.

This issue occurs specifically within the telesales impersonation flow and was reproduced internally. The behavior is caused by the My Credits app fetching the authenticated telesales user’s email from the session rather than the impersonated customer’s identity.

As a result, the incorrect balance may be shown to agents and customers during telesales-assisted purchases, creating confusion and risk of order errors.


#### Simulation


1) Log in as User A (telesales role).
2) Impersonate User B via Telesales (become User B in storefront).
3) Navigate to My Account > My Credits while impersonating User B.
4) Observe that the balance shown matches User A's credit (telesales agent), not User B's credit.


#### Workaround


For operational teams: avoid checking credits through the impersonation flow. Instead, confirm balances via back-office tools or APIs where the correct customer email/account can be specified.

For implementers: if customizing the front-end, ensure that when impersonation is active, the Customer Credit API is queried using the impersonated customer’s email while authenticating with the telesales agent’s session cookie.



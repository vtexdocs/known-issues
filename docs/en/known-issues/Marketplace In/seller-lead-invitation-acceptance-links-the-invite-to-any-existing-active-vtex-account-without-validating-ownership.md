---
title: 'Seller lead invitation acceptance links the invite to any existing active VTEX account without validating ownership'
slug: seller-lead-invitation-acceptance-links-the-invite-to-any-existing-active-vtex-account-without-validating-ownership
status: PUBLISHED
createdAt: 2026-10-27T15:40:24.000Z
updatedAt: 2026-10-27T15:40:24.000Z
contentType: knownIssue
productTeam: Marketplace In
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace In
slugEN: seller-lead-invitation-acceptance-links-the-invite-to-any-existing-active-vtex-account-without-validating-ownership
locale: en
kiStatus: Backlog
internalReference: 1477830
---

## Summary

When a seller lead accepts a marketplace invitation, the acceptance flow only checks whether the informed `sellerAccountName` exists and is active in License Manager. It does not check whether the account belongs to the invited seller, or whether it is already used by another company.
So if the name informed during acceptance matches an existing active account owned by a third party, the invite gets linked to that account. No new account is provisioned, and the invited seller never receives the access key needed to finish onboarding.

## Simulation

1. In the marketplace account, invite a new seller lead.
2. As the invited seller, accept the invitation and enter a `sellerAccountName` that already exists and is active in VTEX but belongs to another company.
3. The invite is linked to that pre-existing account.
4. No new account is created, and the invited seller doesn’t receive the access key.

## Workaround

N/A
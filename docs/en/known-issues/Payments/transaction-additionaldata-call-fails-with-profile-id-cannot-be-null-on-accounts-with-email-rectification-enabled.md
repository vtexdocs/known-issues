---
title: 'Transaction additional-data call fails with "profile Id cannot be null" on accounts with e-mail rectification enabled'
slug: transaction-additionaldata-call-fails-with-profile-id-cannot-be-null-on-accounts-with-email-rectification-enabled
status: PUBLISHED
createdAt: 2026-09-22T21:46:41.000Z
updatedAt: 2026-09-22T21:47:59.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transaction-additionaldata-call-fails-with-profile-id-cannot-be-null-on-accounts-with-email-rectification-enabled
locale: en
kiStatus: Backlog
internalReference: 1464703
---

## Summary

On accounts where the gateway's e-mail rectification feature flag is enabled, the call that sends additional data to a transaction fails whenever the `clientProfileData` object arrives without an `id`. Before storing the payload, the gateway tries to resolve the shopper's e-mail in the Profile System, and a missing identifier aborts the entire request — so `cart`, `shippingData`, `billingAddress` and `paymentRecipients` are never persisted on the transaction, not only the e-mail. The profile identifier is optional in the checkout order flow and is not declared as required anywhere in the additional-data contract.


- `POST /api/pvt/transactions/{transactionId}/additional-data` returns `500` with body `profile Id cannot be null`
- Variant: returns `404` with `the profile personal data was not found. Validate the profileId requested.` when `clientProfileData.id` is present but unknown to the Profile System
- Variant: returns `404` with `profile e-mail cannot be null` when the profile resolves but has no e-mail
- Transaction is left without its additional-data fields — no cart, shipping, billing address, or payment recipients stored
- Occurs only on accounts included in the `allow-email-rectification` allowlist; completely silent on every other account

## Simulation

1. Confirm the account is listed in the `allow-email-rectification` flag allowlist.
2. Initiate a transaction and keep it in `started` status.
3. `POST /api/pvt/transactions/{transactionId}/additional-data` with a `clientProfileData` field whose `id` is absent, `null` or empty.
4. Expected: `500` with body `profile Id cannot be null`.
5. Confirm none of the other fields in the same request were stored on the transaction.


To confirm an existing case is this KI, check all three: account is in the allowlist; the additional-data response body matches one of the three strings above; the transaction is missing the additional-data fields.

## Workaround

- **Open a ticket to Product Support:** request removal of the account from the `allow-email-rectification` allowlist. This restores the previous behavior — the e-mail sent in the request body is stored as-is.
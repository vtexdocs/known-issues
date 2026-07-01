---
title: 'Shopee Order code: 001 / Invalid Email'
slug: shopee-order-code-001-invalid-email
status: PUBLISHED
createdAt: 2026-06-24T16:41:04.000Z
updatedAt: 2026-07-01T17:03:43.000Z
contentType: knownIssue
productTeam: Marketplace Out
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace Out
slugEN: shopee-order-code-001-invalid-email
locale: en
kiStatus: Backlog
internalReference: 1425788
---

## Summary

Orders from Shopee fail to be created in VTEX/OMS with error `code: 001 / Invalid Email` when the buyer's `buyerUsername` contains characters that produce an RFC-invalid email address. Since Shopee does not provide the buyer's real email, the VTEX Shopee connector synthetically constructs one using the pattern `{buyerUsername}@email.com`.

## Simulation

- The Shopee connector receives the order
- The OMS rejects the order creation with `code: 001 / Invalid Email`.
- The order appears in Bridge with an error and cannot be imported into VTEX.
- Reprocessing the order in VTEX does not resolve the issue the same invalid email is sent again.

## Workaround

There is no workaround available for the merchant. The order cannot be imported into VTEX while the `buyerUsername` produces an RFC-invalid email. Contacting Shopee to change the buyer's username is not a viable path Shopee has no mechanism to update this field on an existing order. Engineering investigation is needed
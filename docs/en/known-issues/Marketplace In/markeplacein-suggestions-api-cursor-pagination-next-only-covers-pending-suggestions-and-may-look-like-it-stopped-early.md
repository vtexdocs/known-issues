---
title: 'Markeplace-IN Suggestions API cursor pagination (_next) only covers Pending suggestions and may look like it stopped early'
slug: markeplacein-suggestions-api-cursor-pagination-next-only-covers-pending-suggestions-and-may-look-like-it-stopped-early
status: PUBLISHED
createdAt: 2026-08-17T17:03:35.000Z
updatedAt: 2026-08-17T17:03:35.000Z
contentType: knownIssue
productTeam: Marketplace In
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace In
slugEN: markeplacein-suggestions-api-cursor-pagination-next-only-covers-pending-suggestions-and-may-look-like-it-stopped-early
locale: en
kiStatus: Backlog
internalReference: 1448547
---

## Summary

`GET /{accountName}/suggestions` cursor pagination (`_next`) implicitly restricts results to `status=pending`, making it impossible to scan an account's full suggestions base (all statuses) via cursor in a single pass — it stops with no error or warning once the Pending subset is exhausted, well before covering the account's total suggestion count.

## Simulation

- Pick an account with a large suggestions base (tens of thousands of records across multiple statuses and types).
- Call `GET https://api.vtex.com/{accountName}/suggestions?_from=1&_to=1` to confirm the total via `Range.Total` — note this includes all statuses and types.
- Call `GET https://api.vtex.com/{accountName}/suggestions` using only the `_next` cursor (no other query parameters), following each returned `Next` token until the response stops including `Next`.
- Compare the total items scanned via cursor to `Range.Total` from step 2 — the cursor total will be significantly smaller (in observed cases, roughly 10–20% of the account total), with no HTTP error at any point.

## Workaround

Yes. To read the full suggestions base (all statuses) for an account, use offset pagination (`_from`/`_to`) instead of cursor.

1. Always send `status` explicitly (documented values: `accepted`, `pending`, `denied` — confirm if any additional value applies before relying on it).
2. Always send `type` explicitly as well; it only accepts one value per call (`new` or `update`), so run one full pass per type.
3. Keep the page window constant for the entire scan (max 50 records per page) — changing it mid-scan can trigger a separate, already-known reordering issue.
4. Deduplicate results client-side (e.g. by `sellerId` + `sellerSkuId`), and re-run each status × type slice until a pass returns no new records, since ordering isn't guaranteed stable on a live/changing dataset.
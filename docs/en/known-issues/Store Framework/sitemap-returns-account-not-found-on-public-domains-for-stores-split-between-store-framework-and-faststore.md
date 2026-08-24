---
title: 'Sitemap returns "Account not found" on public domains for stores split between Store Framework and FastStore'
slug: sitemap-returns-account-not-found-on-public-domains-for-stores-split-between-store-framework-and-faststore
status: PUBLISHED
createdAt: 2026-08-24T17:38:37.000Z
updatedAt: 2026-08-24T17:38:37.000Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: sitemap-returns-account-not-found-on-public-domains-for-stores-split-between-store-framework-and-faststore
locale: en
kiStatus: Backlog
internalReference: 1451253
---

## Summary

Stores running an active traffic split between VTEX IO and FastStore cannot serve `/sitemap.xml` on their public domains (apex and `www`) — it returns `400 – Account not found`. Internal domains (`{account}.myvtex.com`, `{account}.vtexcommercestable.com.br`) work fine for the same account. Engineering confirmed the current split design is incompatible with sitemap serving for these stores.

## Simulation

- Have a store with an active IO/FastStore traffic split (any percentage).
- Request `https://{public-custom-domain}/sitemap.xml` (apex and/or `www`).
- Observe `400 Bad Request`, body `"Account not found"`.
- Compare with the same account on:
  - `https://{account}.vtexcommercestable.com.br/sitemap.xml` → works (200)
  - `https://{account}.myvtex.com/sitemap.xml` → works (200)

## Workaround

N/A
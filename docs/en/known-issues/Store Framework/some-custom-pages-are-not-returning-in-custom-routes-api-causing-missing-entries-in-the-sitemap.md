---
title: 'Some custom pages are not returning in Custom Routes API causing missing entries in the sitemap'
slug: some-custom-pages-are-not-returning-in-custom-routes-api-causing-missing-entries-in-the-sitemap
status: PUBLISHED
createdAt: 2025-11-05T20:23:46.000Z
updatedAt: 2026-08-07T16:55:08.000Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: some-custom-pages-are-not-returning-in-custom-routes-api-causing-missing-entries-in-the-sitemap
locale: en
kiStatus: Backlog
internalReference: 1319581
---

## Summary

In stores with a high volume of routes registered in the Rewriter, some custom pages don't appear in the Custom Routes API (`/_v/public/sitemap/custom-routes`) response and are missing from the generated sitemap. The generation process has a scan limit and can stop before reading all routes when the account has a large number of stale/expired entries, causing some valid pages to be silently skipped.

## Simulation

- Identify an account with a high volume of routes registered in the Rewriter.
- Call the Custom Routes API and confirm some known custom pages are missing from the response.
- Access the sitemap generated for the store and confirm the same pages are also absent there.

## Workaround

N/A
---
title: 'Sitemap returns NULL for all entries'
slug: sitemap-returns-null-for-all-entries
status: PUBLISHED
createdAt: 2021-08-04T00:45:26.000Z
updatedAt: 2026-08-14T23:20:07.000Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slugEN: sitemap-returns-null-for-all-entries
locale: en
kiStatus: Fixed
internalReference: 407007
---

## Summary

Some Account's sitemap returns empty (NULL) for all entries (category, brand, and product), even though the admin shows related items.

## Simulation

- Check the XML links: `.myvtex.com/sitemap.xml`

The expected is that the content of the client's account is returned when accessing the sitemap.

## Workaround

N/A
---
title: 'Filters hidden from the store are also hidden from Intelligent Search admin pages'
slug: filters-hidden-from-the-store-are-also-hidden-from-intelligent-search-admin-pages
status: PUBLISHED
createdAt: 2021-08-20T17:41:25.000Z
updatedAt: 2025-05-27T20:11:48.000Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: filters-hidden-from-the-store-are-also-hidden-from-intelligent-search-admin-pages
locale: en
kiStatus: Backlog
internalReference: 416638
---

## Summary

Some facets have internal usage or scenarios that need to be hidden, but the store needs that facet for purposes of the search, like using it for Merch Rules.

## Simulation

On some accounts, the SKU specification "color" does not appear as an option under "Use SKU specifications to display individual products in search results". We see that "color" is one of the specifications under "Hide facets".

## Workaround

In **Admin > Search Settings**, remove the facet (or filter) from the "Hide facets" configuration, create the merchandising rule or do the expected configuration, and hide the facet (or filter) again.
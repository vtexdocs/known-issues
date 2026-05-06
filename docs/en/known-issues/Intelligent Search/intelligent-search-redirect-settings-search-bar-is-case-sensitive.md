---
title: 'Intelligent Search Redirect settings search bar is case sensitive'
slug: intelligent-search-redirect-settings-search-bar-is-case-sensitive
status: PUBLISHED
createdAt: 2021-04-28T23:23:02.000Z
updatedAt: 2024-10-01T14:14:44.000Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: intelligent-search-redirect-settings-search-bar-is-case-sensitive
locale: en
kiStatus: Fixed
internalReference: 361894
---

## Summary

The Intelligent Search Redirect settings page has a search bar to help find specific redirect settings, but it is case sensitive and will only find terms if they match exactly.

## Simulation

Access `/admin/search/redirects`.

Search for a setting name, but changing one letter to uppercase. The search won't fetch any result.

## Workaround

Generate route names with a consistent pattern, only lower case, only uppercase or camel case.
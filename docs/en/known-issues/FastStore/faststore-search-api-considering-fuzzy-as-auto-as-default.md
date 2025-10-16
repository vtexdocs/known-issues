---
title: Faststore search api considering fuzzy as auto as default
slug: faststore-search-api-considering-fuzzy-as-auto-as-default
status: PUBLISHED
createdAt: 2025-10-16T20:25:52.144Z
updatedAt: 2025-10-16T20:25:52.144Z
contentType: knownIssue
productTeam: FastStore
author: 2mXZkbi0oi061KicTExNjo
tag: FastStore
slugEN: faststore-search-api-considering-fuzzy-as-auto-as-default
locale: en
kiStatus: Fixed
internalReference: 889321
---

## Summary


In package @fatstore/api, for the Intelligent Search resolver, we are considering fuzzy as auto by default when it should be 0, this is causing the behavior of fuzzy to be applied causing a "fake missmatch" in search results when we really have an exact match with the searched term, but, we display more results regardless that


#### Simulation


This is easy to be replicable when you search for any product, sku, or ref ID, the expected result is to display only products that matches with the ID, but, it will display more than one


#### Workaround


N/A




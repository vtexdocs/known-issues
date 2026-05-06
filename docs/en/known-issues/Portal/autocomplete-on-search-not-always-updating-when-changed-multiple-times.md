---
title: 'Autocomplete on Search not always updating when changed multiple times'
slug: autocomplete-on-search-not-always-updating-when-changed-multiple-times
status: PUBLISHED
createdAt: 2023-04-19T13:53:40.000Z
updatedAt: 2023-04-19T13:53:40.000Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slugEN: autocomplete-on-search-not-always-updating-when-changed-multiple-times
locale: en
kiStatus: Backlog
internalReference: 793275
---

## Summary

When searching for any term without clicking enter, the autocomplete brings results of products that contain that term.

The wrong scenario here happens when this term is changed multiple times without clicking enter. Eventually the autocomplete stops bringing results.

## Simulation

1. On an account using Portal Search try to search for a term without clicking enter;
2. Change this term and check that the autocomplete options also change;
3. Now continue to change multiple times, eventually no suggestions will appear on the autocomplete.

## Workaround

There is no workaround
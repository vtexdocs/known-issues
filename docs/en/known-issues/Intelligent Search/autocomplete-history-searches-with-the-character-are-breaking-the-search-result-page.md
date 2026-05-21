---
title: 'Autocomplete history searches with the "/" character are breaking the search result page'
slug: autocomplete-history-searches-with-the-character-are-breaking-the-search-result-page
status: PUBLISHED
createdAt: 2026-05-12T21:29:15.000Z
updatedAt: 2026-05-21T17:37:19.000Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: autocomplete-history-searches-with-the-character-are-breaking-the-search-result-page
locale: en
kiStatus: Fixed
internalReference: 1405490
---

## Summary

When performing searches on Store Framework stores, the autocomplete component may store the search history from the user's session. If the user has searched for terms that contained the "/" char before and searches it again using the autocomplete history list, the search will not URL-encode the search term and return a different result from what was searched or return an empty search page.

## Simulation

1. Search for products in a Store Framework store with terms containing the "/" character. For example: `blue shoes 1/2`.
2. See that the result will be expected according to what was searched, and the URL will encode the "/" character.
3. Return to the home page (or just erase the text searched from the search bar). The autocomplete history will appear containing the search term with the "/" character.
4. Click on it to search again for the term. The result page may bring results out of the context or to an empty search page.

## Workaround

N/A
---
title: 'Autocomplete Suggestion API removes special characters from the suggested results'
slug: autocomplete-suggestion-api-removes-special-characters-from-the-suggested-results
status: PUBLISHED
createdAt: 2025-10-31T17:47:16.652Z
updatedAt: 2025-10-31T17:47:16.652Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: autocomplete-suggestion-api-removes-special-characters-from-the-suggested-results
locale: en
kiStatus: Backlog
internalReference: 1014701
---

## Summary


This issue occurs when searching for a term, and the autocomplete suggestion returns terms without special characters, even if the search term contains any special character, resulting in incorrect search results.


#### Simulation



1. Request for the API route GET `https://..com.br/api/io/_v/api/intelligent-search/autocomplete_suggestions?query=` or use the search bar component to return suggestions for autocomplete for a giving search term(s).
2. Observe the autocomplete suggestions provided by the system.
3. Note that any special character is missing from the returned suggestions for autocomplete.

For example, if the term "headphone" is searched in the autocomplete suggestion API or search component, the suggestion results, if containing a special character in the name, will be displayed as "Headphone Bluetooth 5 0" instead of having the dot in the number "5.0". The correct format should be "Headphone Bluetooth 5.0". The same happens if a search already contains a special character, for example "headphone 5.0", it'll also return "Headphone Bluetooth 5 0".

When selecting this suggestion in the product_search API, will not return results.


#### Workaround


N/A


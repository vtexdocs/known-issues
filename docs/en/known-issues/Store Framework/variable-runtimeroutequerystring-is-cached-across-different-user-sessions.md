---
title: 'Variable __RUNTIME__.route.queryString is Cached Across Different User Sessions'
slug: variable-runtimeroutequerystring-is-cached-across-different-user-sessions
status: PUBLISHED
createdAt: 2025-08-13T14:36:13.932Z
updatedAt: 2025-08-13T14:36:13.932Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: variable-runtimeroutequerystring-is-cached-across-different-user-sessions
locale: en
kiStatus: Backlog
internalReference: 1275673
---

## Summary


The server caches query string parameters from the __RUNTIME__.route.queryString object across different user sessions. This can lead to a user's session incorrectly inheriting query string data from a previous user's session.


#### Simulation


This behavior can be reproduced in applications that read query string parameters from the `__RUNTIME__` variable.

1. Access a store page with a specific query string on machine A. For example: `https://www.examplestore.com/sale?targeting=affiliate_A`
2. The application running on the page reads the `targeting` parameter from `__RUNTIME__.route.queryString` and correctly identifies `affiliate_A`.
3. On a completely different machine B (and a new, clean session), access the _same_ store page, but **without** the query string. For example: `https://www.examplestore.com/sale`
4. The application on machine B reads the `targeting` parameter from `__RUNTIME__.route.queryString`.
5. **Expected behavior:** The `__RUNTIME__.route.queryString` object should be empty or not contain the `targeting` parameter, as it was not present in the URL for this session.
6. **Actual behavior:** Due to server-side caching, the `__RUNTIME__.route.queryString` object still contains `targeting=affiliate_A` from machine A's session. The application incorrectly attributes the session on machine B to `affiliate_A`.


#### Workaround



Do not use the `__RUNTIME__.route.queryString` object to read dynamic query string parameters expected to vary between users or sessions (such as affiliate, campaign, or user identifiers). This variable is subject to server-side page caching and is not session-specific.
The correct and recommended approach is to read parameters directly from the URL.

- **For client-side components (React):** Use browser APIs like `window.location.search` to get the current URL's query string and parse it.
- **For server-side rendering (Node.js):** Access the query string from the request context (e.g., `ctx.query`) instead of the `__RUNTIME__` object.
This ensures that the data is always specific to the user's current request and is not affected by the cache of a previous session.




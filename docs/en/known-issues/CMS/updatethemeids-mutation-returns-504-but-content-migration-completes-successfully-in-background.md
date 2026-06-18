---
title: 'updateThemeIds mutation returns 504 but content migration completes successfully in background'
slug: updatethemeids-mutation-returns-504-but-content-migration-completes-successfully-in-background
status: PUBLISHED
createdAt: 2026-06-18T16:36:11.000Z
updatedAt: 2026-06-18T16:36:11.000Z
contentType: knownIssue
productTeam: CMS
author: 2mXZkbi0oi061KicTExNjo
tag: CMS
slugEN: updatethemeids-mutation-returns-504-but-content-migration-completes-successfully-in-background
locale: en
kiStatus: Backlog
internalReference: 1423324
---

## Summary

When running the `updateThemeIds` mutation in `vtex.pages-graphql`, the request may return `504 Gateway Timeout` with an error such as `Request to vtex.pages-graphql@2.125.2 timed out after 11.0003652`. In some cases, especially for stores with a large amount of CMS content, this timeout affects only the HTTP response and not the migration itself. The content migration may continue in the background and finish successfully.

## Simulation

- Use a store with a large volume of CMS/Site Editor content.
- Install the new major version of the same theme app in a production workspace.
- In GraphQL IDE, select `vtex.pages-graphql@2.x`.
- Run the `updateThemeIds` mutation, for example:

- Observe that the response may return `504 Gateway Timeout` / `ProxyTimeout`, with a message stating that the request to `vtex.pages-graphql` timed out after about 11 seconds.
- After the timeout, validate the workspace in Admin and storefront. In affected cases, the migrated content may start appearing correctly even though the mutation response returned an error.

## Workaround

After receiving the `504`, wait a few moments and verify that the migration has completed before retrying the mutation. Check `CMS > Pages`, Site Editor content, and storefront rendering in the target workspace. If the content was migrated successfully, no further action is required. Avoid triggering the same mutation multiple times in sequence, since the background process may already be running or completed.
---
title: Users created in accounts with emailRectification feature are not created in VTEX ID
slug: users-created-in-accounts-with-emailrectification-feature-are-not-created-in-vtex-id
status: PUBLISHED
createdAt: 2025-10-16T20:31:33.313Z
updatedAt: 2025-10-16T20:31:33.313Z
contentType: knownIssue
productTeam: B2B
author: 2mXZkbi0oi061KicTExNjo
tag: B2B
slugEN: users-created-in-accounts-with-emailrectification-feature-are-not-created-in-vtex-id
locale: en
kiStatus: Backlog
internalReference: 1165203
---

## Summary


For accounts that have the Email Rectification feature active, users are created via either one of the methods below are not created in VTEX ID.

Known problematic user creation methods:

- B2B Organization UI in the store's admin;
- My Organization menu in the storefront;
- GraphQL createUserWithEmail mutation.


#### Simulation


In a store with the emailRectification feature active, create an user with one of the above methods, the user will not be created in VTEX ID.


#### Workaround


The user can be created in VTEX ID by:

- Logging in the storefront for the first time;
- Request user creation with the Create User API.




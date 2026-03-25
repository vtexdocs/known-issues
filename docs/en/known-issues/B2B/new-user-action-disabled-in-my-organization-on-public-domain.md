---
title: '“New user” action disabled in My Organization on public domain'
slug: new-user-action-disabled-in-my-organization-on-public-domain
status: PUBLISHED
createdAt: 2026-03-25T19:04:54.531Z
updatedAt: 2026-03-25T19:04:54.531Z
contentType: knownIssue
productTeam: B2B
author: 2mXZkbi0oi061KicTExNjo
tag: B2B
slugEN: new-user-action-disabled-in-my-organization-on-public-domain
locale: en
kiStatus: Backlog
internalReference: 1383616
---

## Summary

Admin users cannot add new members from the public storefront domain in My Account > My Organization because the “NEW” button remains disabled, while the same action works on the myvtex domain. The visible symptom is a disabled “NEW” button on the public subdomain for all users, even those who have the following permissions on the organization:

`"add-users-organization",`
`"remove-users-organization"`

## Simulation

- Access the store via the public domain and log in as a user with permissions `"add-users-organization"` and `"remove-users-organization"` for a given organization
- Navigate to My Account > My Organization > Users.
- Observe that the “NEW” button to add users is disabled on the public domain, even though the same user can add other users to the organization when accessing via the myvtex domain or via GraphQL.

## Workaround

Perform user management (adding users) from the myvtex domain where the “NEW” button is enabled or via the `AddUser` GraphQL mutation of the `vtex.b2b-organizations-graphql` app.
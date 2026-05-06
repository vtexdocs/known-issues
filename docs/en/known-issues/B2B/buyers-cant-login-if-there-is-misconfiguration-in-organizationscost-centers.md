---
title: "Buyers can't login if there is misconfiguration in organizations/cost centers"
slug: buyers-cant-login-if-there-is-misconfiguration-in-organizationscost-centers
status: PUBLISHED
createdAt: 2023-11-30T22:21:25.000Z
updatedAt: 2024-10-29T21:07:42.000Z
contentType: knownIssue
productTeam: B2B
author: 2mXZkbi0oi061KicTExNjo
tag: B2B
slugEN: buyers-cant-login-if-there-is-misconfiguration-in-organizationscost-centers
locale: en
kiStatus: Fixed
internalReference: 945609
---

## Summary

When a user has the first organization assigned to them is invalid with the wrong cost center id login fails with no message.

There will be the message `"App storefront-permissions failed, resulting in an error building the session"` in the session response.

## Simulation

- Create an organization with the wrong cost center id;
- Login in the site.

## Workaround

Fix the cost center id associated with the organization or delete the organization.
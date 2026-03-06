---
title: 'CatalogV2 User Roles not Applying'
slug: catalogv2-user-roles-not-applying
status: PUBLISHED
createdAt: 2026-03-06T19:25:33.473Z
updatedAt: 2026-03-06T19:25:33.473Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: catalogv2-user-roles-not-applying
locale: en
kiStatus: No Fix
internalReference: 489297
---

## Summary

When a user is linked to a role configured as read-only in License Manager, they can still edit products in Catalog V2.

## Simulation

1) Access the license manager UI for a store that has the CatalogV2 installed (/admin/license-manager/#/role-details)

2) Set a read-only user role

 ![](https://vtexhelp.zendesk.com/attachments/token/NpEBOSahA9ogF72lsW9kYRjyH/?name=inline441836406.png)

3) With these rules set, log in with the related user

4) Try to update a product, you will be able to, despite the read-only credentials.

## Workaround

Use the License Manager API to manage these permissions.
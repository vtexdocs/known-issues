---
title: 'Product form displays outdated user information in the Admin for last edit across Catalog'
slug: product-form-displays-outdated-user-information-in-the-admin-for-last-edit-across-catalog
status: PUBLISHED
createdAt: 2026-09-16T19:35:35.000Z
updatedAt: 2026-09-16T19:35:35.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: product-form-displays-outdated-user-information-in-the-admin-for-last-edit-across-catalog
locale: en
kiStatus: Backlog
internalReference: 1462086
---

## Summary

The Admin product form displays an outdated or deleted user attribution in the **Last Updated By** field. This occurs when products are modified through legacy Admin or Spreadsheet services, that do not update the **Last Updated By** field.

## Simulation

1. Open **Admin > Catalog > Products**.
2. Select a product that was recently edited through legacy Admin or bulk import.
3. View the product edit form.
4. Check the **Last Updated By** field.

**Expected behavior:** Field shows the user or API key that most recently modified the product.
**Actual behavior:** Field shows an outdated user, deleted user, or revoked API key. The date field may be newer than the attributed user's last action.

## Workaround

N/A. Note that legacy Admin screens are considered discontinued and should no longer be used. Use the current Admin interface to ensure proper field updates.
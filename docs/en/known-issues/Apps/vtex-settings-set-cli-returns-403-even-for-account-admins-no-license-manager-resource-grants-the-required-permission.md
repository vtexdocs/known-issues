---
title: 'vtex settings set (CLI) returns 403 even for account admins — no License Manager resource grants the required permission'
slug: vtex-settings-set-cli-returns-403-even-for-account-admins-no-license-manager-resource-grants-the-required-permission
status: PUBLISHED
createdAt: 2026-09-17T20:57:07.000Z
updatedAt: 2026-09-17T20:57:07.000Z
contentType: knownIssue
productTeam: Apps
author: 2mXZkbi0oi061KicTExNjo
tag: Apps
slugEN: vtex-settings-set-cli-returns-403-even-for-account-admins-no-license-manager-resource-grants-the-required-permission
locale: en
kiStatus: Backlog
internalReference: 1462810
---

## Summary

Running `vtex settings set <app> <field> <value>` fails with a 403 Forbidden (`Role User:<user> in <account>/ cannot perform action PUT on resource vrn:apps:...:/apps/<app>/settings`) even when the user holds the account's highest available role in License Manager (including "Allow APP configuration"). The Admin UI, used by the same user on the same account/workspace, saves settings successfully. This is not a misconfigured role — no resource currently exposed in License Manager grants the permission the CLI's direct write path requires.

## Simulation

- As a user with the account's highest configured role (including "Allow APP configuration" checked, under Infrastructure resources), run: `vtex settings set vtex.store <field> <value>`.
- Observe a 403 response: `Role User:<user> in <account>/ cannot perform action PUT on resource vrn:apps:...:/apps/vtex.store/settings`.
- Confirm the same field can be saved successfully via `/admin/cms/store` or `/admin/apps/vtex.store@.../setup` by the same user, same account/workspace.

## Workaround

Configure app settings via the Admin UI (`/admin/cms/store` or `/admin/apps/{app}@{version}/setup`) instead of the CLI.
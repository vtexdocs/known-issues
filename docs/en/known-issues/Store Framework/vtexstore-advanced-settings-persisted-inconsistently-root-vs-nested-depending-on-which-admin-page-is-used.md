---
title: 'vtex.store Advanced Settings persisted inconsistently (root vs. nested) depending on which Admin page is used'
slug: vtexstore-advanced-settings-persisted-inconsistently-root-vs-nested-depending-on-which-admin-page-is-used
status: PUBLISHED
createdAt: 2026-09-17T20:42:54.000Z
updatedAt: 2026-09-17T20:42:54.000Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: vtexstore-advanced-settings-persisted-inconsistently-root-vs-nested-depending-on-which-admin-page-is-used
locale: en
kiStatus: Backlog
internalReference: 1462792
---

## Summary

`vtex.store`'s Advanced Settings flags (`enableCriticalCSS`, `enableCSSConcatenation`, `enableMenuRenderingOptimization`, and others declared under `advancedSettings` in the app's schema) are persisted differently depending on which of two Admin pages was used to save them. `/admin/cms/store` (classic Store Settings, General/Advanced tabs) saves these flags flat at the root of the settings JSON. `/admin/apps/vtex.store@{version}/setup` (generic App Settings page) saves the same flags nested under `advancedSettings`, matching the app's declared schema literally. Storefront components that consume these flags read them only at the root, so a flag configured via `/admin/apps/vtex.store@@{version}/setup` appears enabled in the Admin UI but has no effect on the storefront.

## Simulation

- Go to `/admin/apps/vtex.store@{installed version}/setup` for any account/workspace.
- Enable "Enable menu rendering optimization" (`enableMenuRenderingOptimization`) and Save.
- Run `vtex settings get vtex.store` — the flag appears nested: `{"advancedSettings":{"enableMenuRenderingOptimization":true}}`.
- Observe that the rendering optimization (lazy submenu mount, reduced SSR links) does not take effect, even though the Admin UI shows it as enabled.
- Repeat the same toggle via `/admin/cms/store` → Advanced tab → Save. `vtex settings get vtex.store` now shows the flag flat at root (`{"enableMenuRenderingOptimization":true}`), and the `menu` block's optimization takes effect.

## Workaround

Configure these specific Advanced Settings flags via `/admin/cms/store` (classic Store Settings, Advanced tab) instead of `/admin/apps/vtex.store@.../setup`. Saving through the classic page persists the flags in the flat/root shape that storefront components (e.g. `menu`) actually read.
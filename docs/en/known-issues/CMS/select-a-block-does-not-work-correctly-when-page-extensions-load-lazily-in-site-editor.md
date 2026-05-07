---
title: '"Select a Block" Does Not Work Correctly When Page Extensions Load Lazily in Site Editor'
slug: select-a-block-does-not-work-correctly-when-page-extensions-load-lazily-in-site-editor
status: PUBLISHED
createdAt: 2026-05-07T17:22:03.000Z
updatedAt: 2026-05-07T17:26:54.000Z
contentType: knownIssue
productTeam: CMS
author: 2mXZkbi0oi061KicTExNjo
tag: CMS
slugEN: select-a-block-does-not-work-correctly-when-page-extensions-load-lazily-in-site-editor
locale: en
kiStatus: Backlog
internalReference: 1403234
---

## Summary

The "Select a block" feature in the Site Editor does not work correctly on pages where extensions finish loading after the initial render. After clicking the "Select a block" button, hovering over blocks in the storefront does not produce any highlight, and clicking blocks does not open the block editor. The issue is more likely to occur on pages with a large number of blocks or with performance optimization flags enabled (such as "Enable lazy runtime").

## Simulation

1. Access the Site Editor for a store with a page that has a large number of blocks or with the "Enable lazy runtime" flag active.
2. Navigate to the affected page via the Site Editor URL.
3. Click the "Select a block" button in the topbar.
4. Hover over elements in the storefront iframe.
5. Observe that no block highlights appear and clicking elements has no effect.

To confirm the issue is related to lazy extension loading, check whether the problem is consistent across page reloads and whether it occurs more frequently on heavier pages.

## Workaround

There is no workaround available.
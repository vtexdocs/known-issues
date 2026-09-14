---
title: 'Saving CMS content in a non-default binding locale can silently overwrite the default-locale content and hide the correct translation'
slug: saving-cms-content-in-a-nondefault-binding-locale-can-silently-overwrite-the-defaultlocale-content-and-hide-the-correct-translation
status: PUBLISHED
createdAt: 2026-09-14T22:05:22.000Z
updatedAt: 2026-09-14T22:05:22.000Z
contentType: knownIssue
productTeam: CMS
author: 2mXZkbi0oi061KicTExNjo
tag: CMS
slugEN: saving-cms-content-in-a-nondefault-binding-locale-can-silently-overwrite-the-defaultlocale-content-and-hide-the-correct-translation
locale: en
kiStatus: Backlog
internalReference: 1460967
---

## Summary

When editing page/block content in Site Editor on a store with multiple supported locales, saving a translation for a locale other than the store's default can, in some cases, overwrite the original default-locale content rather than create a separate translation. This corruption is usually not visible on its own, but if the affected text also has an extra space at the start or end, the storefront may display the wrong-language text for that content, even though the correct translation exists.

## Simulation

1. On a store with 2+ supported locales, save a text block in Site Editor while the language selector is on the store's **default** locale.
2. Reload the page, then edit and save the **same** block again with the language selector on a **different** (non-default) locale.
3. If the affected text has a leading or trailing space, viewing the page in the locale that should show the original content may instead display the text saved in the other locale — even though the correct translation still exists.

## Workaround

Manually trim leading/trailing spaces from the text before saving in Site Editor.
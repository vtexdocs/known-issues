---
title: 'oneOf Variant Switch Erases Field Data and Defaults to First Variant on Load'
slug: oneof-variant-switch-erases-field-data-and-defaults-to-first-variant-on-load
status: PUBLISHED
createdAt: 2026-07-06T20:26:16.000Z
updatedAt: 2026-07-06T20:26:16.000Z
contentType: knownIssue
productTeam: CMS
author: 2mXZkbi0oi061KicTExNjo
tag: CMS
slugEN: oneof-variant-switch-erases-field-data-and-defaults-to-first-variant-on-load
locale: en
kiStatus: Backlog
internalReference: 1430638
---

## Summary

The Headless CMS content entry form handles `oneOf` fields partially: it validates the schema correctly, but the UI always defaults to rendering only the first variant defined in `oneOf`. When the editor switches to a different variant, all previously entered data is erased.

## Simulation

1. Create or open a content type whose schema includes an array whose items use `oneOf` to define two or more possible object shapes.
2. Open the content entry form for that content type.
3. Observe that the UI renders only the **first** variant of `oneOf` by default, regardless of the data already saved in the entry.
4. Fill in data for the currently displayed variant.
5. Switch to a different variant using the variant selector.
6. Observe that all previously entered data is **erased** and replaced by an empty form for the newly selected variant.
7. Switching back to the first variant confirms the data is gone — it does not persist across variant changes

## Workaround

Define the intended variant **before** filling in any content and do not change it afterwards. If a variant change is unavoidable, note down the existing field values manually before switching.
As a schema-level alternative, remove `oneOf` and flatten both variants into a single object with all fields optional, using a discriminator field (e.g. `"groupType": { "enum": ["default", "faq"] }`) to indicate which shape is active. This loses schema strictness but avoids the UI issue entirely.
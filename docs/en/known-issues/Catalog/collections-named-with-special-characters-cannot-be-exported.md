---
title: 'Collections named with special characters cannot be exported'
slug: collections-named-with-special-characters-cannot-be-exported
status: PUBLISHED
createdAt: 2026-03-24T18:10:59.200Z
updatedAt: 2026-03-24T18:10:59.200Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: collections-named-with-special-characters-cannot-be-exported
locale: en
kiStatus: Fixed
internalReference: 683343
---

## Summary

It is expected that a collection can be exported on the admin. However, collections with names that contain symbols such as `$` , `+`  or `,` cannot be exported.

## Simulation

- Create a collection with `$` , `+`  or `,`  on the name
- Try to export the collection
- An error will be displayed on the admin

## Workaround

Remove the character
---
title: 'Legacy CMS does not create folders with less than 3 characters in the name'
slug: legacy-cms-does-not-create-folders-with-less-than-3-characters-in-the-name
status: PUBLISHED
createdAt: 2023-05-15T14:32:48.000Z
updatedAt: 2023-05-15T14:32:48.000Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slugEN: legacy-cms-does-not-create-folders-with-less-than-3-characters-in-the-name
locale: en
kiStatus: Backlog
internalReference: 825530
---

## Summary

Legacy CMS does not create folders with less than 3 characters in the name

## Simulation

- Go to the legacy CMS
- Create a new folder
- Write a folder name with less than 3 characters
- Try to save the folder

A error will be shown:

    Folder name is invalid. Check the instructions to create folder name.The name is required and must contain only letters, numbers, "@" and “-” (hyphen).The caracter "@" must be used at the begining and at the end.The hyphen cannot be used to start the name or at the end.

## Workaround

Use a folder name with 3 or more characters
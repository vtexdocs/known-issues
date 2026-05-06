---
title: 'File Manager upload with two one more existent files does not update all the files, only the first'
slug: file-manager-upload-with-two-one-more-existent-files-does-not-update-all-the-files-only-the-first
status: PUBLISHED
createdAt: 2021-08-24T14:19:36.000Z
updatedAt: 2024-01-23T18:32:23.000Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slugEN: file-manager-upload-with-two-one-more-existent-files-does-not-update-all-the-files-only-the-first
locale: en
kiStatus: No Fix
internalReference: 418253
---

## Summary

File Manager upload with two one more existent files does not update all the files, only the first

## Simulation

- Go to /admin/a, file manager, and add 2 or more files to upload;
- Now upload two other files with the same name:
- We will receive a warning telling usthat the file exists, asking us if we want to replace it.

This warning is telling us only about one file, the second one is not being validated.

- Both files upload, but only one will replace the older one.

## Workaround

Update one file per time.
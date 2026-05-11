---
title: 'Intelligent Search Synonyms does not re-create deleted synonyms'
slug: intelligent-search-synonyms-does-not-recreate-deleted-synonyms
status: PUBLISHED
createdAt: 2025-04-15T17:30:12.000Z
updatedAt: 2026-05-11T17:54:35.000Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: intelligent-search-synonyms-does-not-recreate-deleted-synonyms
locale: en
kiStatus: Fixed
internalReference: 1211321
---

## Summary

Intelligent Search Synonyms does not re-create a synonym after deleting it.

This behavior happens when creating or importing a deleted synonym.

## Simulation

Follow the steps hereafter to simulate the scenario:


1. Delete a synonym.
2. Then, try to re-import/re-create the synonym.


Intelligent Search Synonyms will reload the page without creating the synonym.

## Workaround

N/A
---
title: 'Unsupported fields by the Intelligent Search API returning empty'
slug: unsupported-fields-by-the-intelligent-search-api-returning-empty
status: PUBLISHED
createdAt: 2024-05-14T00:02:59.000Z
updatedAt: 2026-06-29T18:14:06.000Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: unsupported-fields-by-the-intelligent-search-api-returning-empty
locale: en
kiStatus: Backlog
internalReference: 1032531
---

## Summary

The Intelligent Search API is mainly based on the legacy Catalog Search API for compatibility reasons, but not every property returns the same information. In some cases, it is different or empty.

Some affected properties:


- ".items.attachments" (returns empty)
- ".items.isKit" (always return false)
- ".items.kitItems" (returns empty)
- ".items.estimatedDateArrival" (returns empty)
- ".items.modalType" (returns empty)
- ".items.images.imageText" (returns the same as "imageLabel")

## Simulation

- register value for an affected field in the Catalog module
- compare the response for the specific field between the Catalog Search and Intelligent Search APIs

## Workaround

N/A
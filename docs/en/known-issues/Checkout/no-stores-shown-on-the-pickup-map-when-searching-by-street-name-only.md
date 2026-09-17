---
title: 'No stores shown on the pickup map when searching by street name only'
slug: no-stores-shown-on-the-pickup-map-when-searching-by-street-name-only
status: PUBLISHED
createdAt: 2021-07-14T20:40:18.000Z
updatedAt: 2026-09-17T15:35:30.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: no-stores-shown-on-the-pickup-map-when-searching-by-street-name-only
locale: en
kiStatus: No Fix
internalReference: 395867
---

## Summary

When the buyer searches the pickup map with only the street name, no stores are returned. Searching the same street with a number, or searching by postal code, returns the stores normally. Intermittent: some addresses work, others do not.

## Simulation

1. Open a cart and go to the pickup map.
2. Search for a street name only (e.g. "Rua Senador Pompeu") — no stores are returned.
3. Search the same street with a number — stores are returned.
4. Search by postal code — stores are returned.

## Workaround

N/A
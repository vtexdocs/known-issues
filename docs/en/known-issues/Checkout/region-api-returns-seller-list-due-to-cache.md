---
title: 'Region API returns seller list due to cache'
slug: region-api-returns-seller-list-due-to-cache
status: PUBLISHED
createdAt: 2024-01-22T17:34:00.000Z
updatedAt: 2024-01-22T17:48:27.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: region-api-returns-seller-list-due-to-cache
locale: en
kiStatus: Backlog
internalReference: 969692
---

## Summary

When using a subaccount structure with region, if the API Get sellers by region or address is used in both accounts for the same sales channel, and one of them is not available for that sales channel, it will return a seller list due to cache.

## Simulation

- Create a new store;
- Set different sales channel for the store;
- Use the API Get sellers by region or address in the store;
- Use again the API for the same sales channel in the other store.

## Workaround

N/A
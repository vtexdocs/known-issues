---
title: 'Catalog fullcleanup does not trigger a new Intelligent Search indexation'
slug: catalog-fullcleanup-does-not-trigger-a-new-intelligent-search-indexation
status: PUBLISHED
createdAt: 2021-10-14T15:22:47.000Z
updatedAt: 2023-03-13T12:34:54.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: catalog-fullcleanup-does-not-trigger-a-new-intelligent-search-indexation
locale: en
kiStatus: Fixed
internalReference: 449763
---

## Summary

When running a full cleanup (https://{AccountName}.myvtex.com/admin/Site/fullcleanup.aspx) on catalog, the broadcaster doesn't send the update notification to the Intelligent Search indexer, and product data can become outdated, causing discrepancies between PDP and PLP content.

## Simulation

Run a fullcleanup in Catalog, and the deleted products will still be active in Intelligent Search.

## Workaround

VTEX doesn't recommend deleting products from the Catalog, a better way to deal with this scenario is flagging the products as Inactive.

If a fullcleanup is necessary, call VTEX Support and ask for a forced indexation in Intelligent Search.
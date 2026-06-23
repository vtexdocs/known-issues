---
title: 'Shopee Catalog Sync Blocked Due to Excess Variation Attributes'
slug: shopee-catalog-sync-blocked-due-to-excess-variation-attributes
status: PUBLISHED
createdAt: 2025-05-16T18:03:05.000Z
updatedAt: 2026-06-23T15:53:19.000Z
contentType: knownIssue
productTeam: Marketplace Out
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace Out
slugEN: shopee-catalog-sync-blocked-due-to-excess-variation-attributes
locale: en
kiStatus: Backlog
internalReference: 1227978
---

## Summary

Some SKUs are not being synchronized with Shopee due to catalog items containing more than two variation attributes, which is not supported by the marketplace. This is preventing affected products from being listed.

## Simulation

1. Access the Bridge panel for the affected account
2. Identify products returning the error:

The error is triggered during the catalog sync process with Shopee, specifically when the payload contains more than two attributes in the TierVariation object.

1. This scenario is recurrent for migrated stores whose catalog structure may have more than two variation attributes

## Workaround

N/A
---
title: 'Shopee Mapper does not support dynamic categories — attributes that unlock additional required subcategories'
slug: shopee-mapper-does-not-support-dynamic-categories-attributes-that-unlock-additional-required-subcategories
status: PUBLISHED
createdAt: 2026-06-29T18:16:36.000Z
updatedAt: 2026-06-29T18:16:36.000Z
contentType: knownIssue
productTeam: Marketplace Out
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace Out
slugEN: shopee-mapper-does-not-support-dynamic-categories-attributes-that-unlock-additional-required-subcategories
locale: en
kiStatus: Backlog
internalReference: 1427436
---

## Summary

The Shopee integration does not support the platform's dynamic category behavior. When a product attribute unlocks an additional subcategory in Shopee's category tree, the required attributes of that subcategory are not reflected in the mapper, causing persistent mapping errors in the Bridge even after reprocessing and cache clearing.

## Simulation

- Have a SKU registered under a Shopee category that contains attributes capable of unlocking dynamic subcategories (e.g., category "Door Hardware & Locks")
- Fill in the attribute that triggers the subcategory (e.g., attribute `Wireless` = true for wireless locks). This attribute unlocks new required attributes (e.g., `Manufacturer`, `Brand Name`, `Homologation Number`, `Product Model`)
- When processing the SKU, the Bridge will return mapping errors for the required attributes of the dynamic subcategory, as they cannot be filled in by the mapper

## Workaround

N/A
---
title: 'Amazon category implementation'
slug: amazon-category-implementation
status: PUBLISHED
createdAt: 2022-03-25T14:32:41.000Z
updatedAt: 2025-06-23T15:58:12.000Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: amazon-category-implementation
locale: en
kiStatus: Fixed
internalReference: 549924
---

## Summary

We are having below errors when trying to integrate some SKUs, we have tested with global categories: 166, 167 e 169 none of them are working, but these categories should be available in Amazon.

Erro "Category 169 not found in browse node mapping for SKU's department specification, choose a more specific global category" persistente

## Simulation

Inside bridge products we can see below error:

Erro "Category 169 not found in browse node mapping for SKU's department specification, choose a more specific global category" persistente

## Workaround

Change global category, until we fix this one.
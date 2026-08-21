---
title: 'Quickorder App concurrency issues when adding items'
slug: quickorder-app-concurrency-issues-when-adding-items
status: PUBLISHED
createdAt: 2026-08-21T22:16:42.000Z
updatedAt: 2026-08-21T22:16:42.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: quickorder-app-concurrency-issues-when-adding-items
locale: en
kiStatus: Backlog
internalReference: 1450887
---

## Summary

Quickorder App splits item addition to cart on batches of 10 items and calls checkout APIs in parallel.

This may lead to concurrency issues for large batches of items.

## Simulation

This issue is not easily replicable, concurrency may or may not happen.

## Workaround

N/A
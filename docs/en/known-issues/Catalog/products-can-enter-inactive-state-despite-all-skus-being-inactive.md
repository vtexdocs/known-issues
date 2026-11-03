---
title: 'Products can enter inactive state despite all skus being inactive'
slug: products-can-enter-inactive-state-despite-all-skus-being-inactive
status: PUBLISHED
createdAt: 2026-11-04T00:25:13.000Z
updatedAt: 2026-11-04T00:25:13.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: products-can-enter-inactive-state-despite-all-skus-being-inactive
locale: en
kiStatus: Backlog
internalReference: 1480822
---

## Summary

Currently, there is a state of inconsistency, of unknown origin, where the catalog can have an inactive product with 1+ active skus. This should not, according to the catalog rules, be possible.

The origin of how products may enter this state has not yet been identified and it seems to be a rare occasion.

## Simulation

N/A (the simulation steps are still not identified, this KI is a statement that some database inconsistencies have been noted and a

## Workaround

placeholder)


## **Workaround**
Editing any data of the product (i.e. updating its description) automatically changes it to the correct, expected state (active)
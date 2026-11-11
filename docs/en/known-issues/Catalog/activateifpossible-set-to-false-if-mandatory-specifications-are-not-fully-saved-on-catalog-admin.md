---
title: 'ActivateIfPossible set to "False" if mandatory specifications are not fully saved on catalog admin'
slug: activateifpossible-set-to-false-if-mandatory-specifications-are-not-fully-saved-on-catalog-admin
status: PUBLISHED
createdAt: 2026-11-12T01:23:15.000Z
updatedAt: 2026-11-12T01:23:15.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: activateifpossible-set-to-false-if-mandatory-specifications-are-not-fully-saved-on-catalog-admin
locale: en
kiStatus: Backlog
internalReference: 1484224
---

## Summary

Currently, the product ActivateIfPossible field in the catalog admin, of a product, is incorrectly set to "false" when an user tries to save the product specifications and there is still a mandatory specification not yet filled upon saving

## Simulation

1 - create an inactive product with at least one sku and mandatory specifications (2+) not yet filled.

2 - also, for this product, create it with the activateIfPossible field set to "True"

3 - after its creation, on the catalog admin, edit the product and attempt to save it with some, but not all, mandatory specifications filled.

4 - The activateIfPossible field will beset to "false" incorrectly and consequently the product will not be automatically set to active after all fields and other criteria are met.

## Workaround

Use APIs to save the specifications or save all mandatory specifications at once in the admin
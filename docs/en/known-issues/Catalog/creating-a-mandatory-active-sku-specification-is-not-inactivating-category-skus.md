---
title: 'Creating a mandatory, active, sku specification is not inactivating category skus'
slug: creating-a-mandatory-active-sku-specification-is-not-inactivating-category-skus
status: PUBLISHED
createdAt: 2026-07-30T21:47:00.000Z
updatedAt: 2026-07-30T21:47:00.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: creating-a-mandatory-active-sku-specification-is-not-inactivating-category-skus
locale: en
kiStatus: Backlog
internalReference: 1441624
---

## Summary

Currently, when a mandatory specification is created **after** active skus are already present on a given category, they are not being inactivated.

The expected scenario, as per the UI warning below, is that when a mandatory specification is created on a category, all active skus on this given category are inactivated until the given specification has its values filled.

 ![](https://vtexhelp.zendesk.com/attachments/token/YYcHzuU2WkcD7DP1ZvcAOYm0J/?name=image.png)

Result

 ![](https://vtexhelp.zendesk.com/attachments/token/Gn0CO1DGe9fxU0w066bZblOcX/?name=image.png)

## Simulation

1 - For a category that has 1+ active skus, go to the category menu (https://myaccount.myvtex.com/admin/Site/Campo.aspx)

2 - create a new sku field filling in the "isMandatory" and "isActive" fields as true

3 - The aforementioned display message of "all skus will be inactivated" will be shown

4 - reacess the sku within this category no note that nothign has really happened, it will have reached an incorrect state of active skus with mandatory fields left empty.

## Workaround

-
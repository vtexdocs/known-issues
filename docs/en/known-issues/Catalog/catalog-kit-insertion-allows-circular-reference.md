---
title: 'Catalog Kit Insertion Allows Circular Reference'
slug: catalog-kit-insertion-allows-circular-reference
status: PUBLISHED
createdAt: 2026-06-24T18:49:40.000Z
updatedAt: 2026-06-24T18:49:40.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: catalog-kit-insertion-allows-circular-reference
locale: en
kiStatus: Backlog
internalReference: 1425901
---

## Summary

Currently, when creating a skukit in the catalog UI, it is possible to insert a skukit referencing itself as a component.

For instance, let's say a skukit with id 123 was created.

it's both possible to add other skus as components, but also the kit itself (father = 123, component = 123) which creates unmapped side effects.

So far, the known side effect is that this impedes the loading of data in the portal application, such as the skuJSON in the vtexJS.

## Simulation

1 - create a sku that is marked as a kit (bundle) https://help.vtex.com/en/docs/tutorials/bundle-registration

2 - add, in the component tab, its own sku id as a component

3 - in the product page, open the developer tools and check the console. look for the vtexjs.skujson property - it should return data, but it returns as null

## Workaround

-
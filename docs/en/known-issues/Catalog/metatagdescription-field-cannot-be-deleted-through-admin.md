---
title: "'MetaTagDescription' field cannot be deleted through Admin"
slug: metatagdescription-field-cannot-be-deleted-through-admin
status: PUBLISHED
createdAt: 2024-02-08T20:20:42.000Z
updatedAt: 2024-02-08T20:20:42.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: metatagdescription-field-cannot-be-deleted-through-admin
locale: en
kiStatus: Backlog
internalReference: 979691
---

## Summary

There is an inconsistent behavior in the `MetaTagDescription` field within the product registration, which cannot be deleted through the Admin but is possible to delete through API. In the Admin, when clicking "save" with this field empty, the value from the field `Description` is copied. This scenario doesn't happen when using the API, the value is correctly deleted.

## Simulation

- Click on the product to edit
- Delete the value from the field `MetaTagDescription`
- Click "save" and return to the product
- Check that the original value is not there anymore, but the value from the `description` was duplicated

## Workaround

Use the API to delete the undesired value after updating the product in the Admin
https://developers.vtex.com/docs/api-reference/catalog-api#put-/api/catalog/pvt/product/-productId-?endpoint=put-/api/catalog/pvt/product/-productId-
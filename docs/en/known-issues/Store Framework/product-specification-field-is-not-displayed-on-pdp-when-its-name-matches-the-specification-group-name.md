---
title: 'Product specification field is not displayed on PDP when its name matches the specification group name'
slug: product-specification-field-is-not-displayed-on-pdp-when-its-name-matches-the-specification-group-name
status: PUBLISHED
createdAt: 2026-08-26T15:34:13.000Z
updatedAt: 2026-08-26T15:34:13.000Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: product-specification-field-is-not-displayed-on-pdp-when-its-name-matches-the-specification-group-name
locale: en
kiStatus: Backlog
internalReference: 1452333
---

## Summary

When a product has a specification field (technical data sheet) with the same name as the specification group to which it belongs, the Store Framework displays only one specification on the PDP, ignoring the others even though the Catalog API returns all values correctly. This behavior occurs in the Store Framework; in the Portal/Legacy CMS, all specifications are displayed on the PDP as usual.

## Simulation

- Create (or use) a set of specifications, for example `Especificações`.
- Add two or more fields to this group (ex.: `Material`, `Tipo de fio`) - in this scenario, both specifications are displayed correctly on the Store Framework's PDP.
 ![](https://vtexhelp.zendesk.com/attachments/token/8z5Igx1ng1y4N3cbE0V10t7Ry/?name=image.png)
 ![](https://vtexhelp.zendesk.com/attachments/token/JCaTTHt0OuzS6K75iELZfbwtf/?name=image.png)
- Add a third field to the same group with the **same name as the group** (e.g., a field named `Especificações` within the `Especificações` group).
 ![](https://vtexhelp.zendesk.com/attachments/token/uTAFSbKbpjK4WmbfQ00rGFVdC/?name=image.png)
- Reindex the product after filling out this new specification
- Check the PDP in the Store Framework - only one specification is displayed, even if the response from the `catalog_system/pub/products/search/{slug}/p` endpoint returns all values.
 ![](https://vtexhelp.zendesk.com/attachments/token/yyDSIHMYmdJIjvb6v4YSDMqsE/?name=image.png)

- Compare it with vtexcommercestable (Legacy CMS). There, all the specifications appear correctly, confirming that the problem is limited to the Store Framework.
 ![](https://vtexhelp.zendesk.com/attachments/token/GAa1YetuNh0thiUcwjSsGkFsq/?name=image.png)

## Workaround

Rename the specification field so that its name does not match the name of the specification group to which it belongs.
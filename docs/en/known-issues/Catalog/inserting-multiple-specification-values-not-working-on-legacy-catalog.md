---
title: 'Inserting multiple specification values not working on legacy catalog'
slug: inserting-multiple-specification-values-not-working-on-legacy-catalog
status: PUBLISHED
createdAt: 2025-09-15T23:29:28.360Z
updatedAt: 2025-09-15T23:29:28.360Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: inserting-multiple-specification-values-not-working-on-legacy-catalog
locale: en
kiStatus: Backlog
internalReference: 1246453
---

## Summary


There is a function in the legacy catalog experience in which you can add multiple values to a field by using a line break (Example URL path: https://mystore.vtexcommercestable.com.br/admin/site/CampoValorForm.aspx?idCategoria=123&idCampo=456&flagSku=0#).

The UI says you can add multiple values by using a line break, such as:
"Value A
Value B
Values C"

And this would add three distinct values. However, this usability is not currently functional. The UI is refreshed upon attempting to do so, and a "Try this Tip!" message is shown instead (which gives no useful information).

The data itself is not saved.

This may not affect every store.


#### Simulation


1 - Access the field value UI for the legacy catalog (Categories --> Fields (either product or SKU) --> Values --> Add values)

2 - Try adding multiple values via a linebreak, such as the example below:

 ![](https://vtexhelp.zendesk.com/attachments/token/6pVnoX8kHuMUq0fXp571JIBtZ/?name=image.png)

3 - You will not be able to, and a "Try this tip" message will be shown.


#### Workaround


There are multiple workarounds:

1 - Add these fields one by one using the same UI
2 - Add them via API
3 - Add them via sheet import




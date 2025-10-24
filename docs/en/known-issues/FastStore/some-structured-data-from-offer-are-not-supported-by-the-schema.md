---
title: 'Some structured data from Offer are not supported by the schema'
slug: some-structured-data-from-offer-are-not-supported-by-the-schema
status: PUBLISHED
createdAt: 2025-10-16T19:30:19.455Z
updatedAt: 2025-10-16T19:30:19.455Z
contentType: knownIssue
productTeam: FastStore
author: 2mXZkbi0oi061KicTExNjo
tag: FastStore
slugEN: some-structured-data-from-offer-are-not-supported-by-the-schema
locale: en
kiStatus: Backlog
internalReference: 1244839
---

## Summary


Some fields from the Offer type are not being correctly validated by the schema.org. Some properties with this problem are:

- **listPriceWithTaxes**
- **priceWithTaxes**
- **quantity**


#### Simulation


You can see this behavior on our default store https://www.fast.store/ by checking for any PDP on schema.org, for example:
https://validator.schema.org/#url=https%3A%2F%2Fwww.fast.store%2Fwireless-controller-white-10000000%2Fp
 ![](https://vtexhelp.zendesk.com/attachments/token/2O5AHNwwktZmy2LXC8isSVWpt/?name=image.png)


#### Workaround


N/A




---
title: 'Mercado Livre Os atributos seller_package_height, seller_package_width, seller_package_length e seller_package_weight são obrigatórios.'
slug: mercado-livre-os-atributos-sellerpackageheight-sellerpackagewidth-sellerpackagelength-e-sellerpackageweight-sao-obrigatorios
status: PUBLISHED
createdAt: 2026-01-07T14:15:19.231Z
updatedAt: 2026-01-07T14:15:19.231Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: mercado-livre-os-atributos-sellerpackageheight-sellerpackagewidth-sellerpackagelength-e-sellerpackageweight-sao-obrigatorios
locale: en
kiStatus: Backlog
internalReference: 1325344
---

## Summary


Mercado Libre has made dimension attributes mandatory for ME2 items in some categories. However, this requirement may be extended to new categories without prior notice. Therefore, it's important to consider dimensions as mandatory for any product category that has ME2 delivery.

For the feature to work correctly, the merchant must configure the ME2 specification at the product level and provide the dimensions at the SKU level.
The dimensions must reflect real values (e.g., L 20, H 30, W 10, D 5) and only values in centimeters and grams are accepted. If they aren't accepted by Mercado Libre, the item will be moderated and the product will not be published.

The integration reads the dimension attributes directly from the VTEX catalog at the SKU level.
Any mapping of these fields in the mapper will be ignored. This rule applies to all SKUs configured as ME2.


#### Simulation


 ![](https://vtexhelp.zendesk.com/attachments/token/OdzY5BXVY5FvGgfTL4HgAbVqd/?name=image.png)


#### Workaround


n/a



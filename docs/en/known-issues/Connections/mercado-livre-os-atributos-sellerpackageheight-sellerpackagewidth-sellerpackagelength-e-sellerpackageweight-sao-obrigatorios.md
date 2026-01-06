---
title: 'Mercado Livre Os atributos seller_package_height, seller_package_width, seller_package_length e seller_package_weight são obrigatórios.'
slug: mercado-livre-os-atributos-sellerpackageheight-sellerpackagewidth-sellerpackagelength-e-sellerpackageweight-sao-obrigatorios
status: PUBLISHED
createdAt: 2026-01-06T18:33:11.822Z
updatedAt: 2026-01-06T18:33:11.822Z
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



1. Mercado Libre has made ME2 dimension attributes mandatory for the categories related to the item.
2. To enable the feature, the merchant must configure the ME2 specification at the product level, in addition to providing the dimension specifications at the SKU level.
3. Dimension values must be real and valid; items with incorrect or inconsistent dimensions may be moderated by Mercado Libre.
4. The integration will only recognize values provided in **cm** and **g**.
5. Only integer numbers are accepted.
6. The integration will read dimension attributes directly from the VTEX catalog; mapping these fields in the mapper will be ignored.
These rules apply to all SKUs configured with ME2.


#### Simulation


 ![](https://vtexhelp.zendesk.com/attachments/token/OdzY5BXVY5FvGgfTL4HgAbVqd/?name=image.png)


#### Workaround


Adjust the MELI category mapping to a category that does not require these sellerpackage* attributes, if business-acceptable.



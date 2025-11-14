---
title: 'Mercado Livre Os atributos seller_package_height, seller_package_width, seller_package_length e seller_package_weight são obrigatórios.'
slug: mercado-livre-os-atributos-sellerpackageheight-sellerpackagewidth-sellerpackagelength-e-sellerpackageweight-sao-obrigatorios
status: PUBLISHED
createdAt: 2025-11-14T14:19:23.574Z
updatedAt: 2025-11-14T14:19:23.574Z
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


Products fail to publish to Mercado Libre because the category now requires package dimensions and weight, but VTEX’s native MELI integration is not sending these attributes yet. The visible symptom in Bridge is an error message stating that seller_package_height, seller_package_width, seller_package_length, and seller_package_weight are all required. This affects sellers exporting items to MELI categories where these attributes became mandatory, even when category and attribute mappings appear correct.


#### Simulation



-

Prerequisites: An account integrated with Mercado Libre using VTEX’s native connector and a product mapped to a MELI category that now requires package dimensions/weight.



-

Steps:
1) In Admin, ensure the product is mapped to the intended MELI category via Category Mapper and has attribute mappings set as usual.

2) Attempt to export/publish the product to MELI (Classic or Premium) via Bridge.

3) In Bridge, open the product error card under Marketplace > Connections > Products and check the returned message from MELI. You should see an error indicating the required attributes: seller_package_height, seller_package_width, seller_package_length, seller_package_weight.


 ![](https://vtexhelp.zendesk.com/attachments/token/OdzY5BXVY5FvGgfTL4HgAbVqd/?name=image.png)


#### Workaround


Adjust the MELI category mapping to a category that does not require these sellerpackage* attributes, if business-acceptable.




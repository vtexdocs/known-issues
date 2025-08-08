---
title: 'Automatic update of deliveries tracking by Correios'
id: 7hKUU5Qp4AyCW2QaMQC0S6
status: PUBLISHED
createdAt: 2017-08-16T22:07:06.254Z
updatedAt: 2024-02-29T18:16:47.090Z
publishedAt: 2024-02-29T18:16:47.090Z
firstPublishedAt: 2017-08-16T23:00:56.342Z
contentType: knownIssue
productTeam: Post-purchase
author: authors_4
tag: Order Management
slugEN: automatic-update-of-deliveries-tracking-by-correios
locale: en
kiStatus: Backlog
internalReference: 
---

## Summary

The OMS has a tool for the automatic follow-up of mail deliveries (and those using other methods of transport), registering changes in the order, emailing the latest position to the customer and, finally, marking the package as delivered – this information is also passed on to the marketplaces.

Recent changes at the Post Office have made our integration stop working, and the service responsible for this task will have to be rewritten.

## Simulation

The only thing necessary is a valid tracking code for each order. On the following days, as this tracking code is updated, emails should be sent, and this will obviously not happen.

## Workaround

It's possible to send tracking updates via API, with emails continuing to be sent. The same is true for the delivery confirmation, which can also be done on the OMS interface.

![2017-08-16 195850](https://raw.githubusercontent.com/vtexdocs/known-issues/refs/heads/main/docs/en/known-issues/Post-purchase/automatic-update-of-deliveries-tracking-by-correios_1.jpg)

Delivery confirmation via OMS is also passed on to the marketplaces.

>ℹ️ Now, we offer the [VTEX Shipping Network](https://help.vtex.com/pt/subcategory/vtex-shipping-network--5n5MnINzWTQUX1I2EZl4Ib), a logistics solution to integrate your operation with Correios and/or carriers with partnerships with VTEX. All of your store's orders linked to this solution will have the tracking automatically updated. (Valid only for Brazil)

Another option is to use solutions developed by partners to track deliveries by Correios, such as [XP Agência's tracking system](https://rastreio.xpagencia.com.br/).


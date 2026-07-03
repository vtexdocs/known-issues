---
title: 'Checkout orderPlaced Boleto Bank Invoice MOIP'
slug: checkout-orderplaced-boleto-bank-invoice-moip
status: PUBLISHED
createdAt: 2021-06-02T23:18:59.000Z
updatedAt: 2026-07-03T16:06:43.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: checkout-orderplaced-boleto-bank-invoice-moip
locale: en
kiStatus: Fixed
internalReference: 376951
---

## Summary

The orderPlaced has an automatic feature that injects the PDF of the "Boleto - Bank Invoice" into an iframe inside the page of finished order.
But especially type Moip does not allow embedding the file in another page.

We also see this error below, where it will not be possible to display the boleto.
"`because its MIME type ('text/html') is not a supported MIME type stylesheet, and strict MIME checking is enabled.`"

## Simulation

Bank Invoice as type MOIP is the payment method should be selected to make an purchase.
And will  not see the Bank invoice type Moip because is not possible to see the file in the orderplaced page.

## Workaround

There is no workaround, the way to avoid for those who use moip is to hide the "Boleto - Bank Invoice" with CSS.
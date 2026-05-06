---
title: 'Checkout UI goes to Payment with an incomplete invoice address for shoppers with complete profile'
slug: checkout-ui-goes-to-payment-with-an-incomplete-invoice-address-for-shoppers-with-complete-profile
status: PUBLISHED
createdAt: 2023-11-16T17:45:44.000Z
updatedAt: 2023-12-12T15:46:24.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: checkout-ui-goes-to-payment-with-an-incomplete-invoice-address-for-shoppers-with-complete-profile
locale: en
kiStatus: Fixed
internalReference: 937615
---

## Summary

When a shopper has a complete profile and the store is configured to use an invoice address for pick-up, UI will move forward to Payment with an incomplete invoice address.

## Simulation

- Configure the invoice address for pick-up;
 ![](https://vtexhelp.zendesk.com/attachments/token/1zJ19Lq9oJ5CHdkaHUfw4SAka/?name=image.png)

- After adding products to the cart, use an email with a complete profile;
- UI will move forward to Payment even with an incomplete invoice address in the Profile System.

## Workaround

Update the invoice address via Master Data.
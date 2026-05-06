---
title: 'Change order link on checkout/orderPlaced is leading to myAccount instead of the order page'
slug: change-order-link-on-checkoutorderplaced-is-leading-to-myaccount-instead-of-the-order-page
status: PUBLISHED
createdAt: 2023-06-15T16:12:50.000Z
updatedAt: 2023-06-15T16:12:50.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: change-order-link-on-checkoutorderplaced-is-leading-to-myaccount-instead-of-the-order-page
locale: en
kiStatus: Backlog
internalReference: 844893
---

## Summary

When the account has setup the possibility of the shopper changing the order by themselves the change order link will appear on the checkout/orderPlaced template.

However, this link is not redirecting the customer to the edit page, but to the myAccount, which appears empty.

## Simulation

Setup the Allow customers to make changes to orders flag on Admin -> settings -> order settings
 ![](https://vtexhelp.zendesk.com/attachments/token/GqrSJ7cBhZc844LR3kXH7WMlX/?name=image.png)

The shopper fulfills an order and goes to the checkout/orderPlaced

Check that the link will not redirect them to the order edit area.

## Workaround

1. The shopper has to click on My Orders in the myAccount section;
2. Choose again the order they want to change;
3. Click on change order.
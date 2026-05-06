---
title: 'Checkout UI shows free shipping when the user switches the delivery options'
slug: checkout-ui-shows-free-shipping-when-the-user-switches-the-delivery-options
status: PUBLISHED
createdAt: 2023-09-11T14:07:03.000Z
updatedAt: 2023-10-02T19:34:53.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: checkout-ui-shows-free-shipping-when-the-user-switches-the-delivery-options
locale: en
kiStatus: Backlog
internalReference: 897109
---

## Summary

The checkout UI shows free delivery when the user switches the delivery method from normal dispatch to scheduled delivery. The problem only occurs in the delivery box and when the account has the LeanShipping feature configured. although the UI shows free shipping, the purchase total values are correctly displayed and charged.

## Simulation

1. Go to the checkout page by purchasing a random item
2. in the shipping section, select schedule delivery and then select normal dispatch again and the free delivery price will appear on the delivery section

## Workaround

There's no workaround.
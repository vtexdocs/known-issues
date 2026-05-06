---
title: 'Maximum quantity setting of the same item in the cart cannot be changed by franchise accounts'
slug: maximum-quantity-setting-of-the-same-item-in-the-cart-cannot-be-changed-by-franchise-accounts
status: PUBLISHED
createdAt: 2021-01-18T18:00:30.000Z
updatedAt: 2025-04-22T22:36:34.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: maximum-quantity-setting-of-the-same-item-in-the-cart-cannot-be-changed-by-franchise-accounts
locale: en
kiStatus: Backlog
internalReference: 325273
---

## Summary

The configuration of the maximum quantity of the same item in the cart cannot be changed by franchise accounts (seller whitelabel) and seller portal, as it takes place in a legacy catalog screen (/admin/Site/ConfigForm.aspx) – module that is removed from franchise accounts, as they inherit the products of the parent account.

## Simulation

- Enter a franchise or whitelabel seller account environment
- Access the screen "CMS > Settings > General tab" from the admin, or go directly to the page /admin/Site/ConfigForm.aspx
- Note that it is not possible to access the content of this area

## Workaround

Request the configuration via ticket to VTEX.
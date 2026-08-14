---
title: 'Sitemap from subaccounts including products from other subaccounts and mainaccount'
slug: sitemap-from-subaccounts-including-products-from-other-subaccounts-and-mainaccount
status: PUBLISHED
createdAt: 2022-07-14T21:51:49.000Z
updatedAt: 2026-08-14T23:23:09.000Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slugEN: sitemap-from-subaccounts-including-products-from-other-subaccounts-and-mainaccount
locale: en
kiStatus: Fixed
internalReference: 617974
---

## Summary

The sitemap generated is showing all the products from subaccounts and accounts, not taking into consideration the sales channel of the products and if the subaccount has a website of its own.

## Simulation

1. Enter a account or subaccount and generate the sitemap by going to the link http://{accountName}.myvtex.com/sitemap/product-1.xml
2. Verify that the list of products also contain products from subaccounts that have different sales channels.

## Workaround

No workaround.
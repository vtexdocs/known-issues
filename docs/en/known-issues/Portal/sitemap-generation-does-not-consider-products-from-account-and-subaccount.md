---
title: 'Sitemap generation does not consider products from Account and SubAccount'
slug: sitemap-generation-does-not-consider-products-from-account-and-subaccount
status: PUBLISHED
createdAt: 2021-11-19T14:51:35.000Z
updatedAt: 2026-08-14T23:23:54.000Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slugEN: sitemap-generation-does-not-consider-products-from-account-and-subaccount
locale: en
kiStatus: Fixed
internalReference: 471748
---

## Summary

Today at VTEX we can have one account showing products from a specific store and another account (subaccount) showing products from another store. The sitemap will be generated only taking into account products from a specific store (main account or subaccount, the first one generated) and when we try to access the sitemap from the other store, it will show the products from the first store generated.

## Simulation

- Set a store for the MainAccount and other store for the Subaccount, each one of them using a specific SalesChannel.;
- Check that we are showing products from the other store (subAccount) on the MaintAccount;

## Workaround

There is no workaround.
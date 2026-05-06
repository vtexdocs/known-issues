---
title: "Marketplace tax hub request doesn't consider manual price for discounts"
slug: marketplace-tax-hub-request-doesnt-consider-manual-price-for-discounts
status: PUBLISHED
createdAt: 2023-11-08T17:59:26.000Z
updatedAt: 2023-12-06T19:27:36.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: marketplace-tax-hub-request-doesnt-consider-manual-price-for-discounts
locale: en
kiStatus: Fixed
internalReference: 932657
---

## Summary

When the account has isMarketplaceResponsibleForTaxes configured, the tax hub request doesn't consider manual prices for item discounts.

## Simulation

- Configure taxConfiguration.isMarketplaceResponsibleForTaxes in the orderForm configuration;
- Set manual price for an item;
- The tax hub request won't apply the difference as a discount.

## Workaround

NA
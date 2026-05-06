---
title: "Marketplace tax hub request doesn't consider some discount types"
slug: marketplace-tax-hub-request-doesnt-consider-some-discount-types
status: PUBLISHED
createdAt: 2023-11-30T21:13:56.000Z
updatedAt: 2023-12-06T19:26:49.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: marketplace-tax-hub-request-doesnt-consider-some-discount-types
locale: en
kiStatus: Fixed
internalReference: 945580
---

## Summary

When the account has isMarketplaceResponsibleForTaxes configured, the tax hub request doesn't consider some discount types: Nominal, Percentage, and Maximum price per item. This impacts the tax calculation, and the final price is higher than expected.

## Simulation

- Configure taxConfiguration.isMarketplaceResponsibleForTaxes in the orderForm configuration;
- Configure one of the discount types Nominal, Percentage, or Maximum price per item from regular promotion;
- The tax hub request won't apply the discount.

## Workaround

N/A
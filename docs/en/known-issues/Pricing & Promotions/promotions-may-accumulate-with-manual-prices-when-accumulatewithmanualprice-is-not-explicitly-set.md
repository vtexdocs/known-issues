---
title: 'Promotions may accumulate with manual prices when accumulateWithManualPrice is not explicitly set'
slug: promotions-may-accumulate-with-manual-prices-when-accumulatewithmanualprice-is-not-explicitly-set
status: PUBLISHED
createdAt: 2026-09-28T16:41:03.000Z
updatedAt: 2026-09-28T16:47:59.000Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: promotions-may-accumulate-with-manual-prices-when-accumulatewithmanualprice-is-not-explicitly-set
locale: en
kiStatus: Backlog
internalReference: 1467018
---

## Summary

Some promotions may be applied to items with manual prices even when the `accumulateWithManualPrice` field is not explicitly configured in the promotion.
According to the current product behavior, price promotions should not accumulate with manual prices by default. However, when the field is `null` or omitted, the RnB engine does not consistently enforce this restriction across all promotion types.
The actual behavior depends on the promotion's effects and how it is evaluated. As a result, promotions that should not accumulate with manual prices may still be applied to manually priced items.

## Simulation

1. Create a regular promotion with a fixed-amount discount based on a formula.
2. Notice that the `Allow combining with manual prices` checkbox is disabled in the promotion configuration.
3. Add an eligible product to the cart and meet the promotion's eligibility conditions.
4. Verify that the promotion is applied to the item.
5. Send a manual price for the same item.
6. Notice that the promotion remains applied even after the item receives the manual price.

## Workaround

Explicitly configure the `accumulateWithManualPrice` field through the Promotions API.
To prevent the promotion from accumulating with manual prices, set:

```
{ "accumulateWithManualPrice": false}
```


Use the promotion update endpoint to apply the configuration: Create or update promotion or tax. This allows the intended behavior to be enforced without relying on the default handling of an undefined field.
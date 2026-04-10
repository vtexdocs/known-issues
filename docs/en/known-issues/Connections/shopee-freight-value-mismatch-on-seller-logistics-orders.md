---
title: 'Shopee Freight value mismatch on seller logistics orders'
slug: shopee-freight-value-mismatch-on-seller-logistics-orders
status: PUBLISHED
createdAt: 2026-04-10T19:08:44.540Z
updatedAt: 2026-04-10T19:08:44.540Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: shopee-freight-value-mismatch-on-seller-logistics-orders
locale: en
kiStatus: Backlog
internalReference: 1391278
---

## Summary

In seller logistics orders, when Shopee covers the shipping cost (free shipping campaign), the freight value becomes zero. However, this is not being correctly recognized by VTEX, so the shipping value ends up incorrect in the store.
The total order value does not seem to be impacted, since the field used already includes the shipping discount. When combined with the store’s shipping value, the final total still matches.

## Simulation

1. Create or identify a seller logistics order in Shopee where the marketplace covers the shipping cost (freight = 0 – free shipping campaign).
2. Let the order be integrated into VTEX.
3. Check the shipping value in VTEX.
4. Notice that the freight value does not reflect the expected value (it should be zero, but it isn’t).

## Workaround

N/A.
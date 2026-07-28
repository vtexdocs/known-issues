---
title: 'Mercado Livre Ads Incorrectly Re-created as Cross-docking for Full SKUs with Zero Stock'
slug: mercado-livre-ads-incorrectly-recreated-as-crossdocking-for-full-skus-with-zero-stock
status: PUBLISHED
createdAt: 2026-07-28T23:42:34.000Z
updatedAt: 2026-07-28T23:42:34.000Z
contentType: knownIssue
productTeam: Marketplace Out
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace Out
slugEN: mercado-livre-ads-incorrectly-recreated-as-crossdocking-for-full-skus-with-zero-stock
locale: en
kiStatus: Backlog
internalReference: 1440697
---

## Summary

Marketplace ads are incorrectly re-created as "Drop-off/Cross-docking" for products sold under the Full (fulfillment) model when stock at the marketplace's fulfillment center runs out.

## Simulation

- Register a SKU under the Full operation, with the logistic type set by the marketplace as Full (fulfillment).
- Set the physical stock of that product at the marketplace's fulfillment center to zero.
- Wait for the next product update/export cycle.
- Observe that a new ad is created for the same product, now classified as "Cross-docking", with a stock quantity far above the actual amount.
- Pause or remove that incorrect ad in the marketplace seller panel.
- Wait for the next cycle the "Cross-docking" ad is re-created again, repeating the cycle.

## Workaround

There is no workaround available. Pausing or removing the incorrect ad does not resolve the issue, as it gets automatically re-created.
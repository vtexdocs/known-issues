---
title: 'Amazon Inactive or out-of-commercial-policy SKUs remain published (Match/new listing) on Amazon after the connector sends them'
slug: amazon-inactive-or-outofcommercialpolicy-skus-remain-published-matchnew-listing-on-amazon-after-the-connector-sends-them
status: PUBLISHED
createdAt: 2026-07-28T17:05:56.000Z
updatedAt: 2026-07-28T17:05:56.000Z
contentType: knownIssue
productTeam: Marketplace Out
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace Out
slugEN: amazon-inactive-or-outofcommercialpolicy-skus-remain-published-matchnew-listing-on-amazon-after-the-connector-sends-them
locale: en
kiStatus: Backlog
internalReference: 1440366
---

## Summary

SKUs that are inactive in the VTEX catalog, or that no longer belong to the commercial policy configured for the Amazon channel, can continue to appear as published on Amazon either matched to an existing product (Match) or as a new listing created by the connector even after they no longer meet those conditions. The existing validation prevents a SKU in that situation from being published for the first time, but it does not remove from Amazon a SKU that was already published (via Match or as a new listing) before becoming inactive or falling outside the commercial policy.

## Simulation

- Publish a SKU on Amazon while it is active and within the commercial policy configured for the channel either through a Match with an existing product or as a new listing.
- Deactivate that SKU in the VTEX catalog, or change its commercial policy so it no longer belongs to the sales channel configured for the Amazon integration.
- Check the Match screen or the listing for that SKU in the seller's Amazon account.
- The SKU continues to appear as published, in both the Match and new-listing scenarios, even though it should no longer be available.

## Workaround

There is no way to automatically remove the SKU from Amazon through the connector in this situation, in either scenario (Match or new listing). As a partial mitigation, the SKU's stock tends to be updated to zero during availability updates (preventing new sales)
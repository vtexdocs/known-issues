---
title: 'Tax Service getting different values from Marketplace and Fullfilment when a More for Less promotion is used.'
slug: tax-service-getting-different-values-from-marketplace-and-fullfilment-when-a-more-for-less-promotion-is-used
status: PUBLISHED
createdAt: 2023-11-16T22:22:05.000Z
updatedAt: 2026-11-24T18:19:00.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: tax-service-getting-different-values-from-marketplace-and-fullfilment-when-a-more-for-less-promotion-is-used
locale: en
kiStatus: Backlog
internalReference: 937730
---

## Summary

When using tax service, if there is a **More for Less** promotion applied in the cart and an item split happens,  depending on the number of items involved in the promotion, the purchase will not finish and the error message "**The requested order could not be created. Please try again**" will show.

## Simulation

- Create a **More for Less** promotion (e.g. Buy 6 of the same item get 1 free);
- Add items to the cart, make sure the items split;
- Try to finish the purchase.

## Workaround

N/A
---
title: "AmazonMatch In some cases, SKU reverts to \"Pending Review\" after match confirmation, with no indication of Amazon's rejection reason"
slug: amazonmatch-in-some-cases-sku-reverts-to-pending-review-after-match-confirmation-with-no-indication-of-amazons-rejection-reason
status: PUBLISHED
createdAt: 2026-09-04T00:37:34.000Z
updatedAt: 2026-09-04T00:37:34.000Z
contentType: knownIssue
productTeam: Marketplace Out
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace Out
slugEN: amazonmatch-in-some-cases-sku-reverts-to-pending-review-after-match-confirmation-with-no-indication-of-amazons-rejection-reason
locale: en
kiStatus: Backlog
internalReference: 1456640
---

## Summary

In the ad matching flow, some SKUs go back to showing "Pending Review" shortly after being approved, with no message explaining why on the screen. The screen doesn't indicate when Amazon rejects the match for a reason that requires seller action (for example, when the product's brand requires prior authorization to be sold by that seller).


1. In Bridge, this error message may appear, but it can be replaced if the SKU receives any other update, and the real reason ends up getting lost.
2. In the match, the "Pending Review" status looks identical to a SKU that simply hasn't been processed yet, so the user ends up confirming the same match repeatedly without understanding why it never completes.


**Important:** this scenario doesn't happen with every SKU it only occurs in specific cases.

## Simulation

- Go to Marketplace > Amazon > Product Publication.
- Find a SKU with a suggested match for a product whose brand requires direct authorization from the owner (not recoverable through a simple request within Amazon itself).
- Open the suggestion details and click "Confirm and publish".
- Wait some time after publishing (processing is asynchronous).
- No warning is shown on the screen before confirmation, and the button remains enabled normally.
- The SKU goes back to showing "Pending Review" in the listing, with no indication that Amazon rejected the ad.
- Check whether the error message was logged in Bridge in some cases it may not appear, having been replaced by another SKU update.

## Workaround

Check whether the error message was logged in Bridge in some cases it may not appear, having been replaced by another SKU update.
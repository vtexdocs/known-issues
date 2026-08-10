---
title: 'Amazon SKU matching status reverts to "Pending review" after manual confirmation'
slug: amazon-sku-matching-status-reverts-to-pending-review-after-manual-confirmation
status: PUBLISHED
createdAt: 2026-08-10T22:33:52.000Z
updatedAt: 2026-08-10T22:33:52.000Z
contentType: knownIssue
productTeam: Marketplace Out
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace Out
slugEN: amazon-sku-matching-status-reverts-to-pending-review-after-manual-confirmation
locale: en
kiStatus: Backlog
internalReference: 1446100
---

## Summary

In some accounts with the Amazon integration, SKUs whose matching had already been manually confirmed by the seller go back to showing as "Pending review" in the Publication Panel days or weeks later, with no action taken by the seller. The matching screen shows no indication of why this happened behind the scenes, an error reported by Amazon about the listing causes the status displayed in VTEX to regress, while the link with Amazon remains active. In other words, the product hasn't actually lost its match it just stopped selling because of that error, which isn't visible on that screen.

## Simulation

- The seller manually confirms the matching of a SKU on the "Confirmar e publicar" ("Confirm and Publish") screen of the Publication Panel.
- Days or weeks later, Amazon reports an error related to that same product's listing (for example, pending brand approval or pending issues on the seller's Amazon account). This error is not shown on the matching screen.
- Upon receiving this error notification, the SKU's status in VTEX automatically reverts to "Revisão pendente" ("Pending review") even though the match is still active and valid on Amazon's side. In most cases, this is a status display discrepancy (the SKU is matched, but not selling because of the error), not an actual loss of the match.


 ![](https://vtexhelp.zendesk.com/attachments/token/2OByFRa6E3rhMwqafpYoKvGsY/?name=image.png)

## Workaround

Since the error isn't shown on the matching screen, it's necessary to check the Bridge tool to identify what Amazon reported. Instruct the seller to fix that error directly on Amazon, then redo the match confirmation on the publication screen. There is currently no permanent fix to prevent the status from regressing again.
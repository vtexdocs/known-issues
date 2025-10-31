---
title: 'Shipping Strategy stuck in Processing due to extremely large weight-range combinations (Logistics shipping spreadsheets)'
slug: shipping-strategy-stuck-in-processing-due-to-extremely-large-weightrange-combinations-logistics-shipping-spreadsheets
status: PUBLISHED
createdAt: 2025-10-31T16:42:36.330Z
updatedAt: 2025-10-31T16:42:36.330Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slugEN: shipping-strategy-stuck-in-processing-due-to-extremely-large-weightrange-combinations-logistics-shipping-spreadsheets
locale: en
kiStatus: Backlog
internalReference: 1304893
---

## Summary


Shipping policies uploaded through the Logistics spreadsheet may remain in Processing indefinitely when the file contains a large combination of weight ranges per zip code range, resulting in an excessive number of shipping strategy combinations.

The visible symptom is that the Shipping Strategy status never changes from Processing after importing the spreadsheet.
Accounts with shipping tables with thousands of weight ranges per zip code range are affected, even if the total spreadsheet rows are large but structurally repetitive.

## Simulation


To reproduce the issue:

- Set a Logistics shipping spreadsheet with numerous weight steps and multiple zip/price ranges, resulting in a very large set of combinations.
- Try to upload the spreadsheet into the account’s Shipping Policies
-

Observe that the Shipping Strategy created from this spreadsheet remains in Processing and does not complete, even after extended time intervals.


## Workaround



- Reduce the spreadsheet complexity before upload:
- Merge contiguous weight ranges that have the same price and SLA
- After reducing the number of weight ranges per destination, re-upload the spreadsheet and reprocess the policy.
- If the current strategy is already stuck, cancel/remove the pending strategy and re-upload a simplified spreadsheet version.
-

If simplification is not feasible: No workaround available at this time.
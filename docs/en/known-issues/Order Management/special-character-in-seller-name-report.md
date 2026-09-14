---
title: 'Special character in Seller name Report'
slug: special-character-in-seller-name-report
status: PUBLISHED
createdAt: 2023-02-17T16:18:06.000Z
updatedAt: 2026-09-14T22:45:30.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: special-character-in-seller-name-report
locale: en
kiStatus: Fixed
internalReference: 756243
---

## Summary

Specifically for the special character ":", when we have a seller with this special character in the name, and we try to filter it for reporting, we have the following when we view it in "devtools":

"Cannot return null for non-nullable field ReportDetails.rowNumber."

## Simulation

To simulate this behavior, it is necessary to select a seller that contains this special character in the name and try to remove a report from it.

## Workaround

For Workaround, this special character must be removed from the seller's name.
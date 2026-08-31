---
title: 'Fixed Prices import may incorrectly report success when SKU column is formatted as a number'
slug: fixed-prices-import-may-incorrectly-report-success-when-sku-column-is-formatted-as-a-number
status: PUBLISHED
createdAt: 2026-09-01T00:05:14.000Z
updatedAt: 2026-09-01T00:05:14.000Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: fixed-prices-import-may-incorrectly-report-success-when-sku-column-is-formatted-as-a-number
locale: en
kiStatus: Backlog
internalReference: 1454505
---

## Summary

When importing Fixed Prices using a spreadsheet where the **SKU column is formatted as a number**, the import may behave unexpectedly.
Two behaviors have been identified:

- The SKU may be incorrectly saved with a decimal suffix, such as `77,0`, instead of the expected SKU value.
- If there is also a validation error in the spreadsheet, the validation may fail silently for the affected item. The import report can incorrectly return an **"OK" status**, even though the fixed price was not actually saved.

This can cause confusion because the merchant receives a successful import report while the corresponding fixed price is not updated in the Admin.

## Simulation

1. Prepare a Fixed Prices import spreadsheet.
2. Format the **SKU column as a number** instead of text/string.
3. Include a valid fixed price to be imported.
4. Import the spreadsheet through the Fixed Prices import flow.
5. Check the import result and the corresponding fixed price in the Admin.

In scenarios where the SKU is interpreted as a numeric value, it may be saved with a decimal suffix.
The issue can become more severe when the spreadsheet also contains an input validation error. In this case, the affected item may fail validation without the error being properly reflected in the import result, while the report still shows **"OK"**.

##

## Workaround

Before importing the spreadsheet, make sure that the **SKU column is formatted as text/string**, rather than as a number.
After the import, merchants should also validate the updated fixed prices in the Admin instead of relying exclusively on the import report.
This workaround helps avoid the scenario identified in the investigation while the underlying validation behavior is being addressed
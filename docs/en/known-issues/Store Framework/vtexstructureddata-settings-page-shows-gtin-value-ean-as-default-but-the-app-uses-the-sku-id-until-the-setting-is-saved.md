---
title: 'vtex.structured-data Settings page shows GTIN Value “EAN” as default, but the app uses the SKU ID until the setting is saved'
slug: vtexstructureddata-settings-page-shows-gtin-value-ean-as-default-but-the-app-uses-the-sku-id-until-the-setting-is-saved
status: PUBLISHED
createdAt: 2026-11-09T21:15:34.000Z
updatedAt: 2026-11-09T21:15:34.000Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: vtexstructureddata-settings-page-shows-gtin-value-ean-as-default-but-the-app-uses-the-sku-id-until-the-setting-is-saved
locale: en
kiStatus: Backlog
internalReference: 1482707
---

## Summary

The settings page of `vtex.structured-data` shows **EAN** as the default selected GTIN Value. However, if no one has saved the app settings, the app falls back to a different default (`itemId`, i.e. the VTEX SKU ID). The default in `manifest.json` (`"ean"`) and the default in the code (`DEFAULT_GTIN_VALUE = 'itemId'`) are not the same.

As a result, stores that never saved the setting send the SKU ID in the JSON-LD `gtin` field, padded with leading zeros (e.g., SKU ID 512839 becomes `00512839`), and the `sku` field shows the same value. The EAN registered in the catalog is not used.

## Simulation

1. Use an account where `vtex.structured-data` is installed and the app settings were never saved.
2. In the Admin, open the app settings (`/admin/apps/vtex.structured-data@<version>/setup`). The GTIN Value shows **EAN** as selected.
3. Without saving, open a PDP of a product that has an EAN registered in the catalog.
4. Inspect the `application/ld+json` script.
5. Result: `gtin` and `sku` (in `Product` and `Offer`) show the SKU ID padded with zeros, not the EAN.

## Workaround

1. Make sure the app is installed in the account (`vtex install vtex.structured-data`). If it is only a dependency, the settings can’t be changed.
2. In the Admin, open the app settings, select **EAN** as the GTIN Value and click **Save**.


After saving, `gtin` shows the EAN. If the product has no valid EAN, `gtin` is left empty and `sku` shows the SKU ID.
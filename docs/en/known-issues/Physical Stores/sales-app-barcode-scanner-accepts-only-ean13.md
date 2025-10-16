---
title: Sales App barcode scanner accepts only EAN-13
slug: sales-app-barcode-scanner-accepts-only-ean13
status: PUBLISHED
createdAt: 2025-10-16T20:47:40.320Z
updatedAt: 2025-10-16T20:47:40.320Z
contentType: knownIssue
productTeam: Physical Stores
author: 2mXZkbi0oi061KicTExNjo
tag: Physical Stores
slugEN: sales-app-barcode-scanner-accepts-only-ean13
locale: en
kiStatus: Backlog
internalReference: 1211334
---

## Summary


The barcode scanner in the Sales App just accepts EAN-13.

If a product has registered a UPC-A (12 digits), the barcode scanner will add a 0 to the barcode, leading to an empty search.


#### Simulation



- Access the Sales App native app;
- Use the barcode scanner and read a UPC-12;
- A leading zero is added, and an empty search is shown.


#### Workaround


Add a leading zero to the barcode in the SKU registration.



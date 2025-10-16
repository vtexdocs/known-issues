---
title: El escáner de código de barras de Sales App sólo acepta EAN-13
slug: el-escaner-de-codigo-de-barras-de-sales-app-solo-acepta-ean13
status: PUBLISHED
createdAt: 2025-10-16T20:47:43.056Z
updatedAt: 2025-10-16T20:47:43.056Z
contentType: knownIssue
productTeam: Physical Stores
author: 2mXZkbi0oi061KicTExNjo
tag: Physical Stores
slugEN: sales-app-barcode-scanner-accepts-only-ean13
locale: es
kiStatus: Backlog
internalReference: 1211334
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


El escáner de código de barras de la aplicación de ventas sólo acepta EAN-13.

Si un producto tiene registrado un UPC-A (12 dígitos), el escáner de código de barras añadirá un 0 al código de barras, dando lugar a una búsqueda vacía.

## Simulación



- Acceda a la aplicación nativa Sales App;
- Utilice el escáner de código de barras y lea un UPC-12;
- Se añade un cero a la izquierda y se muestra una búsqueda vacía.

## Workaround


Añada un cero a la izquierda al código de barras en el registro SKU.



---
title: 'El producto en el portal del vendedor no se carga cuando no hay imágenes.'
slug: el-producto-en-el-portal-del-vendedor-no-se-carga-cuando-no-hay-imagenes
status: PUBLISHED
createdAt: 2023-05-02T16:58:34.000Z
updatedAt: 2026-09-23T17:17:59.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: seller-portal-product-doesnt-load-when-without-images
locale: es
kiStatus: Backlog
internalReference: 800480
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

En las cuentas del portal de vendedores, si un producto no tiene imágenes para ninguna de sus referencias (SKU), la interfaz de usuario del producto no se cargará correctamente.

## Simulación

1. Crea un producto sin imágenes para ninguna de sus referencias (SKU) usando el panel de administración del portal de vendedores ( /admin/products ).
2. Intenta acceder a la información del producto; los datos se cargarán indefinidamente.

## Workaround

Añade imágenes a los artículos.
---
title: 'El producto no se carga en el portal del vendedor cuando no hay imágenes'
slug: el-producto-no-se-carga-en-el-portal-del-vendedor-cuando-no-hay-imagenes
status: PUBLISHED
createdAt: 2023-05-02T13:58:34.000Z
updatedAt: 2023-05-02T13:58:34.000Z
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

En las cuentas del portal del vendedor, si tienes un producto sin imágenes para todas sus referencias (SKU), la interfaz de usuario del producto no se cargará correctamente.

## Simulación

1. Crea un producto sin imágenes en ninguna de sus referencias (SKU) a través del panel de administración del portal del vendedor (/admin/products).
2. Intenta acceder a la información del producto; los datos se seguirán cargando indefinidamente.

## Workaround

provisional**
Añade imágenes a los artículos.
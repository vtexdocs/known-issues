---
title: Shopee El nivel de tier-variación no cambia
slug: shopee-el-nivel-de-tiervariacion-no-cambia
status: PUBLISHED
createdAt: 2025-09-08T20:33:33.561Z
updatedAt: 2025-09-08T20:33:33.561Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: shopee-the-level-of-tiervariation-not-change
locale: es
kiStatus: Backlog
internalReference: 1262367
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


En algunos casos, al crear un producto con variaciones en Shopee, se produce un error en el que parte de la estructura se crea correctamente, pero las variaciones (SKU) no. Esto impide que las actualizaciones de precios y existencias se apliquen al producto y registra el siguiente mensaje de error en Bridge: **"El nivel de la variación no cambia "**.

## Simulación



- El producto se crea con éxito en Shopee.
- La creación de variaciones (Modelos) falla.
- En el reintento, el sistema intenta volver a crear la estructura y recibe el error **"El nivel de nivel-variación no cambia "** en Bridge.

## Workaround


N/A



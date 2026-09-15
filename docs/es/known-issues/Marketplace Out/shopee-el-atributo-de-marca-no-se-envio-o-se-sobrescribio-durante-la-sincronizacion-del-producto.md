---
title: 'Shopee El atributo de marca no se envió o se sobrescribió durante la sincronización del producto.'
slug: shopee-el-atributo-de-marca-no-se-envio-o-se-sobrescribio-durante-la-sincronizacion-del-producto
status: PUBLISHED
createdAt: 2025-11-12T17:15:38.000Z
updatedAt: 2026-09-15T15:46:15.000Z
contentType: knownIssue
productTeam: Marketplace Out
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace Out
slugEN: shopee-brand-attribute-not-sent-or-overwritten-during-product-sync
locale: es
kiStatus: Backlog
internalReference: 1323634
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Los productos enviados desde VTEX a Shopee se publican sin el atributo _Marca_, incluso cuando este campo está correctamente completado en VTEX y la marca ya existe en Shopee. Además, el conector sobrescribe las marcas añadidas manualmente en Shopee, lo que provoca que los artículos vuelvan a aparecer como "sin marca".

## Simulación

1. Procese un producto en Bridge para enviarlo a Shopee desde la cuenta afectada.

2. Observe que el producto se crea o actualiza en Shopee sin el atributo _Marca_.

3. En Shopee, configure manualmente la marca mediante carga masiva o de archivo.

4. Espere a la siguiente sincronización VTEX → Shopee y observe que la integración elimina o restablece el campo de marca.

## Workaround

N/A
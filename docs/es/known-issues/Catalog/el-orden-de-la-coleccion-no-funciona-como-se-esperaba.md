---
title: 'El orden de la colección no funciona como se esperaba'
slug: el-orden-de-la-coleccion-no-funciona-como-se-esperaba
status: PUBLISHED
createdAt: 2022-01-12T14:03:18.000Z
updatedAt: 2023-05-12T14:36:54.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: collection-ordering-not-working-as-expected
locale: es
kiStatus: Fixed
internalReference: 502409
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

En «Colecciones» (Beta), deberíamos poder cambiar el orden de los productos dentro de una colección utilizando la función «Mover a la posición»:

https://help.vtex.com/tutorial/creating-collections-beta--yJBHqNMViOAnnnq4fyOye

Sin embargo, esta función falla de forma intermitente y no funciona correctamente en todo momento.

## Simulación

- Accede a la configuración de cualquier colección desde el panel de administración: `.myvtex.com/admin/collections`
- Intenta cambiar el orden de un producto dentro de la colección;
- Espera a que el producto se reindexe automáticamente con el nuevo orden en la colección.

## Workaround

No hay ninguna solución alternativa en Colecciones (Beta), pero es posible establecer manualmente el orden de los productos en las colecciones creadas a través del CMS heredado (Portal) con algunas restricciones:
https://help.vtex.com/en/known-issues/manual-sorting-of-collections-doesnt-work-as-expected--aGTNVDT6LKKoWuSceQWs0
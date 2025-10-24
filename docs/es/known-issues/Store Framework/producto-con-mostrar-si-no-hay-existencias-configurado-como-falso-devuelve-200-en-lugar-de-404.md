---
title: 'Producto con ''Mostrar si no hay existencias'' configurado como falso devuelve 200 en lugar de 404'
slug: producto-con-mostrar-si-no-hay-existencias-configurado-como-falso-devuelve-200-en-lugar-de-404
status: PUBLISHED
createdAt: 2025-10-16T20:54:14.765Z
updatedAt: 2025-10-16T20:54:14.765Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: product-with-show-when-out-of-stock-set-as-false-returns-200-instead-of-404
locale: es
kiStatus: Backlog
internalReference: 1233974
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

## Simulación




1. Asegurarse de que existe un producto en VTEX.
2. Poner a cero el inventario del producto.
3. 3. Establecer la bandera `Mostrar cuando no hay existencias` a `false`.
4. Intente acceder a la URL PDP del producto.
5. 5. Observe que la petición devuelve un estado `200 OK` y redirige a una página con `ProductLinkNotFound` en la URL.

## Workaround


N/A




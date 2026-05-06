---
title: 'La función de autocompletado de artículos no se muestra en la marca blanca del vendedor (cambiar el orden)'
slug: la-funcion-de-autocompletado-de-articulos-no-se-muestra-en-la-marca-blanca-del-vendedor-cambiar-el-orden
status: PUBLISHED
createdAt: 2021-03-25T18:55:18.000Z
updatedAt: 2025-06-30T22:53:38.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: item-autocomplete-not-shown-in-seller-whitelabel-change-order
locale: es
kiStatus: Backlog
internalReference: 348841
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Al modificar un artículo (cambiar un pedido) desde una cuenta de vendedor de marca blanca o del Portal del vendedor, la función de autocompletar no muestra el artículo como se esperaba.

## Simulación

- Acceda a un pedido desde una cuenta de vendedor WhiteLabel y solicite la opción de cambio de artículo:
- Al introducir el nombre del SKU en la búsqueda, no aparece en el autocompletado:
- Lo mismo ocurre con los vendedores WhiteLabel que utilizan la nueva versión de admin-orders:

## Workaround

Puede realizar el cambio de artículo a través de la API «Register Change on Order».
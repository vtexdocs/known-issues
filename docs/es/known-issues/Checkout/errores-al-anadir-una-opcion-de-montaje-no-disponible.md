---
title: 'Errores al añadir una opción de montaje no disponible'
slug: errores-al-anadir-una-opcion-de-montaje-no-disponible
status: PUBLISHED
createdAt: 2026-04-09T13:37:20.519Z
updatedAt: 2026-04-09T13:37:20.519Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: broken-carts-when-adding-unavailable-assembly-option
locale: es
kiStatus: Fixed
internalReference: 1308431
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Al añadir un artículo con opciones de montaje a un carrito que:

- Tiene una ubicación conocida del comprador;
- Ya contiene un artículo disponible con la misma opción de montaje;
- Selecciona un vendedor que no puede gestionar el artículo añadido debido a esta situación.

El carrito entrará en un estado defectuoso en el que no se podrá acceder a él ni realizar ninguna operación.

## Simulación

Esto no es fácil de reproducir, y hay múltiples factores que pueden influir en la selección del vendedor.


- Crea un carrito y añade datos de ubicación;
- Añade un artículo disponible con una opción de montaje;
- Añade un artículo con el mismo montaje que seleccione un vendedor que no pueda gestionar el carrito;
- Se producirá un error de comunicación y el carrito entrará en estado de error.

## Workaround

N/A
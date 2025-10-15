---
title: Carros rotos al añadir la opción de montaje no disponible
slug: carros-rotos-al-anadir-la-opcion-de-montaje-no-disponible
status: PUBLISHED
createdAt: 2025-10-15T20:35:40.979Z
updatedAt: 2025-10-15T20:35:40.979Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: broken-carts-when-adding-unavailable-assembly-option
locale: es
kiStatus: Backlog
internalReference: 1308431
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario



Al añadir un artículo con opciones de montaje a un carrito que:

- Tiene una ubicación de comprador conocida;
- Ya tiene un artículo disponible en el carro con la misma opción de montaje;
- Selecciona un vendedor que no puede suministrar el artículo añadido debido a esta situación.

El carro entrará en un estado defectuoso en el que no se podrá acceder a él y no se podrá realizar ninguna operación en él.


#### Simulación



Esto no es fácil de reproducir, y múltiples factores pueden influir en la selección del vendedor.


- Cree un carrito y añada datos de ubicación;
- Añada un artículo disponible con una opción de montaje;
- Añada un artículo con el mismo montaje que seleccione un vendedor que no pueda abastecer el carro;
- Se producirá un error de comunicación y el carro entrará en estado defectuoso.

## Workaround


N/A




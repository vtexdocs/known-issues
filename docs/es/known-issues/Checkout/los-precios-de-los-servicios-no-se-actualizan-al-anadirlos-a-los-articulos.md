---
title: 'Los precios de los servicios no se actualizan al añadirlos a los artículos'
slug: los-precios-de-los-servicios-no-se-actualizan-al-anadirlos-a-los-articulos
status: PUBLISHED
createdAt: 2023-05-09T14:27:21.000Z
updatedAt: 2023-06-23T18:37:20.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: services-prices-are-not-updated-when-added-to-items
locale: es
kiStatus: Backlog
internalReference: 822107
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Los precios de los servicios no se actualizan si se han añadido a un artículo antes de modificar el precio del servicio en el panel de administración. Esto provocará que el pedido se cree con un precio desactualizado.

## Simulación

- Crea un servicio;
- Añade un artículo con el servicio al carrito;
- Modifica el precio del servicio;
- Comprueba el carrito creado anteriormente; el servicio no se ha actualizado.

## Workaround

provisional**
Elimina y vuelve a añadir el servicio.
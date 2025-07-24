---
title: 'La interfaz de usuario no muestra la selección de la ventana de entrega para los puntos de recogida cuando un artículo de un vendedor está entre artículos para recoger de otro vendedor.'
id: 5SyIw04UtNiZhmy0ELNLCD
status: PUBLISHED
createdAt: 2023-12-15T20:18:48.433Z
updatedAt: 2023-12-15T20:18:49.218Z
publishedAt: 2023-12-15T20:18:49.218Z
firstPublishedAt: 2023-12-15T20:18:49.218Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: ui-doesnt-show-delivery-window-selection-for-pickup-points-when-an-item-from-a-seller-is-between-items-for-pickup-from-another-seller
locale: es
kiStatus: Backlog
internalReference: 954108
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


En un carro con al menos tres productos, donde los pedidos de artículos son: El 1º es para recogida programada 1, el 2º para recogida programada 2 (vendedor diferente), y el 3º es para recogida programada 1, la UI no mostrará las ventanas de entrega para seleccionar la fecha/hora de la 2ª recogida. Esto sucede porque la API agrupará el 1er artículo y el 3er artículo ya que es el mismo SLA.

No es posible ir al paso de pago y finalizar la compra.


##

## Simulación



- Añadir un artículo al carrito para recogerlo del vendedor A;
- Añadir un artículo a la cesta para recoger del vendedor B;
- Añadir otro artículo a la cesta para recoger del vendedor A;
- En el paso de envío, las ventanas de entrega de recogida para seleccionar la fecha/hora no se mostrarán.



## Workaround


N/A





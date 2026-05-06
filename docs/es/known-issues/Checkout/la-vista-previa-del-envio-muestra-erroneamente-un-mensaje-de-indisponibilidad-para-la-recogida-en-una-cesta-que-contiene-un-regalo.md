---
title: 'La vista previa del envío muestra erróneamente un mensaje de indisponibilidad para la recogida en una cesta que contiene un regalo'
slug: la-vista-previa-del-envio-muestra-erroneamente-un-mensaje-de-indisponibilidad-para-la-recogida-en-una-cesta-que-contiene-un-regalo
status: PUBLISHED
createdAt: 2023-03-03T19:53:54.000Z
updatedAt: 2025-01-29T14:16:35.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: shipping-preview-wrongly-showing-unavailability-message-for-pickup-in-a-cart-with-gift
locale: es
kiStatus: Backlog
internalReference: 764457
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando se añaden los campos «selectedSla» (debe ser una recogida) y «selectedAddresses» a través de la API en un carrito con una promoción de regalo, y la tienda está configurada para la geolocalización y utiliza polígonos, la vista previa del envío mostrará un mensaje de indisponibilidad para la recogida, que se seleccionó a través de la API. Este comportamiento afectará al flujo de compra, ya que no permitirá continuar tras el envío.

## Simulación

- Configura la geolocalización y los polígonos;
- Configura una promoción de regalo para un artículo;
- Añade el artículo al carrito;
- Envía «selectedSla» como recogida y «selectedAddresses» a través de la API;
- Acceda al carrito en la interfaz de usuario; verá un mensaje de indisponibilidad aunque la API sea correcta.

## Workaround

Cambie la opción a Entrega y vuelva a Recogida
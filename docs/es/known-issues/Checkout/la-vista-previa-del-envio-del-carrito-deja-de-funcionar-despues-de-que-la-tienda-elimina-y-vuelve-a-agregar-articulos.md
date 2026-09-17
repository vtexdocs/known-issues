---
title: 'La vista previa del envío del carrito deja de funcionar después de que la tienda elimina y vuelve a agregar artículos.'
slug: la-vista-previa-del-envio-del-carrito-deja-de-funcionar-despues-de-que-la-tienda-elimina-y-vuelve-a-agregar-articulos
status: PUBLISHED
createdAt: 2021-03-24T18:07:23.000Z
updatedAt: 2026-09-17T15:40:41.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: cart-shipping-preview-stops-working-after-items-are-removed-and-added-back-by-the-storefront
locale: es
kiStatus: No Fix
internalReference: 348152
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando la tienda elimina y vuelve a añadir artículos del carrito mediante programación, la vista previa del envío deja de funcionar. O bien no se muestra, o bien aparece una alerta indicando que el código postal introducido no se ha reconocido. Cambiar a la opción de recogida puede provocar que el proceso falle por completo.

## Simulación

1. Abra la página del carrito en una tienda que elimina y vuelve a añadir artículos mediante programación.
2. Elimine todos los artículos del carrito.

3. Añada un artículo.

4. Compruebe la vista previa del envío: no aparece o aparece una alerta indicando que el código postal no se ha reconocido.

5. Cambie a la opción de recogida: el proceso no se carga.

## Workaround

Recargue la página: el problema desaparece.
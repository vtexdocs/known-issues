---
title: La promoción se aplica a todos los ANS en lugar de sólo al método de envío seleccionado
slug: la-promocion-se-aplica-a-todos-los-ans-en-lugar-de-solo-al-metodo-de-envio-seleccionado
status: PUBLISHED
createdAt: 2025-07-24T18:03:13.683Z
updatedAt: 2025-07-24T18:03:13.683Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: promotion-applies-to-all-slas-instead-of-only-selected-shipping-method
locale: es
kiStatus: Backlog
internalReference: 1265187
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

## Simulación



- Cree una promoción con un descuento restringido a un método de envío específico y válido utilizando el nuevo formulario Promoción regular.
- En el carrito, añada un producto y asegúrese de que los métodos de envío específicos están disponibles para el carrito.
- Observe que incluso si el método de envío seleccionado no es el configurado en los ajustes de la promoción, el descuento seguirá aplicándose.
- El comportamiento esperado es que el descuento sólo se aplique si el método de envío específico está realmente seleccionado.
- Esto sólo funciona correctamente si la bandera obsoleta `isSlaSelected` se establece en `true` (que no es posible a través de la nueva interfaz de usuario).

## Workaround


Establezca `isSlaSelected = true` a través de la API. Esto garantiza que la promoción sólo se aplique después de seleccionar el ANS correspondiente.




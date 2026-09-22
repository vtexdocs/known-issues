---
title: 'La promoción se aplica a todos los SLA en lugar de solo a un método de envío seleccionado.'
slug: la-promocion-se-aplica-a-todos-los-sla-en-lugar-de-solo-a-un-metodo-de-envio-seleccionado
status: PUBLISHED
createdAt: 2025-07-24T15:49:56.000Z
updatedAt: 2026-09-22T23:46:37.000Z
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

Las promociones que deberían estar restringidas a un método de envío específico (SLA) no funcionan correctamente a menos que la bandera `isSlaSelected` (obsoleta) se establezca explícitamente en `true`. La nueva interfaz de usuario de Promociones Regulares ya no muestra esta bandera y, al crear promociones a través de ella, la bandera se establece por defecto en `false`. Esto provoca un comportamiento incorrecto, donde el descuento se aplica a cualquier método de envío disponible, siempre que el método especificado aparezca entre las opciones en la

## Simulación

del carrito.

## **Simulación**

- Cree una promoción con un descuento restringido a un método de envío específico y válido utilizando el nuevo formulario de Promociones Regulares.

- En el carrito, agregue un producto y verifique que los métodos de envío específicos estén disponibles.

- Se observó que, incluso si el método de envío seleccionado no es el configurado en los ajustes de la promoción, el descuento se aplica igualmente.
- El comportamiento esperado es que el descuento solo se aplique si se selecciona el método de envío específico. Esto solo funciona correctamente si el indicador obsoleto `isSlaSelected` está configurado como `true` (lo cual no es posible con la nueva interfaz de usuario).

## Workaround

Configure `isSlaSelected = true` mediante la API. Esto garantiza que la promoción solo se aplique después de seleccionar el SLA correspondiente.
---
title: 'La selección de vendedores de marca blanca no excluye a los vendedores de valor incalculable.'
slug: la-seleccion-de-vendedores-de-marca-blanca-no-excluye-a-los-vendedores-de-valor-incalculable
status: PUBLISHED
createdAt: 2021-01-26T17:03:43.000Z
updatedAt: 2026-09-21T17:23:22.000Z
contentType: knownIssue
productTeam: Order Allocation
author: 2mXZkbi0oi061KicTExNjo
tag: Order Allocation
slugEN: whitelabel-seller-selection-does-not-rule-out-priceless-sellers
locale: es
kiStatus: Fixed
internalReference: 327853
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

La lógica para elegir un vendedor de marca blanca no excluye a aquellos cuyo producto no tiene precio. En un escenario con más de un vendedor disponible, el proceso de pago devuelve al vendedor con `disponibilidad: "sin precio"`. Esto provoca que la interfaz de usuario sea intermitente, simulando a veces con un vendedor sin precio y otras veces con otro vendedor con precio. De esta forma, el usuario recibe una notificación de que no puede comprar el producto, pero aun así logra completar la compra (gracias al vendedor que sí tenía precio).

En este contexto, el proceso de pago debería descartar inmediatamente al vendedor sin precio y devolver solo a los que sí lo tienen.

Nota: Este comportamiento puede provocar que se elijan vendedores de marca blanca sin precio en lugar de vendedores con precio, lo que hará que el producto aparezca como no disponible cuando podría estar disponible en otra opción.

## Simulación

Considere dos vendedores para un mismo producto, uno con precio registrado y el otro sin él.

## Workaround

La tienda debe habilitar la herencia de precios O retirar el producto del inventario.

Una vez hecho esto, es importante tener en cuenta que no influye en el algoritmo de selección del vendedor, ya que no considera el precio. Por lo tanto, son dos cosas distintas.
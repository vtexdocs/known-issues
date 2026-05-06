---
title: 'Entrega fraccionada con Lean Shipping con un SLA no válido'
slug: entrega-fraccionada-con-lean-shipping-con-un-sla-no-valido
status: PUBLISHED
createdAt: 2024-02-27T19:18:52.000Z
updatedAt: 2024-02-27T19:26:11.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: delivery-split-with-lean-shipping-offering-invalid-sla
locale: es
kiStatus: Backlog
internalReference: 990155
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando un carrito de la compra incluye productos de diferentes vendedores, con distintos canales de entrega y diferentes ID de SLA, la interfaz de pago activa la función «Lean Shipping», que resume los SLA disponibles para mostrar únicamente las opciones «más rápidas» y «más baratas» para cada artículo.

Sin embargo, si hay una opción de entrega programada pero no es la más rápida ni la más barata, el botón de programación seguirá apareciendo en la interfaz de usuario, aunque Lean Shipping no la seleccione como opción viable.

## Simulación

- Crea un carrito con al menos 2 vendedores diferentes, en el que un artículo tenga 3 SLA, y la entrega programada no sea ni la opción más rápida ni la más barata (y, por lo tanto, no se ofrecerá a través de Lean Shipping).
- Selecciona la recogida en tienda.
- Utiliza la interfaz de programación de la interfaz de usuario para la entrega del otro artículo.
- Observa que sigue aplicando el SLA más rápido/barato (no programado), en lugar del programado, ignorando de hecho tu selección de franja horaria de entrega del paso anterior.

## Workaround

N/A
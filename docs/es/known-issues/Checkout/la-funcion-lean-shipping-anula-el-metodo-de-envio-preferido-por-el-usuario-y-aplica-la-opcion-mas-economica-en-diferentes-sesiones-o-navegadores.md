---
title: 'La función «Lean Shipping» anula el método de envío preferido por el usuario y aplica la opción más económica en diferentes sesiones o navegadores'
slug: la-funcion-lean-shipping-anula-el-metodo-de-envio-preferido-por-el-usuario-y-aplica-la-opcion-mas-economica-en-diferentes-sesiones-o-navegadores
status: PUBLISHED
createdAt: 2022-06-29T14:27:09.000Z
updatedAt: 2023-02-01T21:06:08.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: lean-shipping-overrides-user-preferred-shipping-method-to-cheapest-option-in-different-sessionsbrowsers
locale: es
kiStatus: Backlog
internalReference: 607411
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

En nuevas sesiones (navegadores diferentes) para el mismo formulario de pedido, no se tiene en cuenta la opción seleccionada anteriormente, sino que siempre se sustituye por la opción «más barata», lo que afecta especialmente a los casos de carritos compartidos

## Simulación

- Realice el proceso de compra hasta llegar al carrito, haga una simulación de envío y seleccione la opción más rápida que incluya el coste de envío a cobrar
- Genere el enlace de venta social (carrito compartido) y ábralo en una nueva pestaña anónima, por ejemplo
- Observe que el coste de envío es la opción más barata en lugar de la opción seleccionada anteriormente

## Workaround

provisional**
N/A
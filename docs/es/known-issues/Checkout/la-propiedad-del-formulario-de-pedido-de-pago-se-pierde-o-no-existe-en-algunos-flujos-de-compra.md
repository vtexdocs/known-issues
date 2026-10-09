---
title: 'La propiedad del formulario de pedido de pago se pierde o no existe en algunos flujos de compra.'
slug: la-propiedad-del-formulario-de-pedido-de-pago-se-pierde-o-no-existe-en-algunos-flujos-de-compra
status: PUBLISHED
createdAt: 2024-05-24T01:06:29.000Z
updatedAt: 2026-10-09T18:35:47.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: checkoutorderformownership-is-lostdoesnt-exist-in-some-purchase-flows
locale: es
kiStatus: Backlog
internalReference: 1038692
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

La cookie CheckoutOrderFormOwnership se pierde o no se crea en algunos flujos de compra.

La pérdida de la cookie CheckoutOrderFormOwnership provoca que se devuelvan datos enmascarados e impide la edición del carrito.

## Simulación

- Cuentas con información personal identificable (PII)

- Venta social:

- Al compartir el carrito mediante la venta social, no se genera una clave de acceso (passKey) para compartir la propiedad del carrito con el nuevo usuario.

- Paso a paso:

- Crear carrito

- Añadir datos personales y de envío (verá los datos normalmente)

- Compartir carrito mediante el enlace creado por la aplicación de venta social

- Abrir el nuevo carrito en una ventana anónima: no se creará ninguna cookie de propiedad y todos los datos estarán enmascarados.

- FastStore:

- La cookie CheckoutOrderFormOwnership no se crea, ya que FastStore v1 no admite cookies.

## Workaround

No aplica. Contacte con el soporte técnico para solicitar la desactivación e indicar en qué casos se aplica.
---
title: 'La propiedad del formulario de pedido de pago se pierde o no existe en algunos flujos de compra.'
slug: la-propiedad-del-formulario-de-pedido-de-pago-se-pierde-o-no-existe-en-algunos-flujos-de-compra
status: PUBLISHED
createdAt: 2024-05-24T01:06:29.000Z
updatedAt: 2026-08-06T22:53:50.000Z
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

La cookie CheckoutOrderFormOwnership se pierde o no se crea en algunos procesos de compra.

La pérdida de la cookie CheckoutOrderFormOwnership provoca que se devuelvan datos enmascarados e impide la edición del carrito.

## Simulación

- Cuentas PII

- Venta social:

- Al compartir el carrito mediante venta social, no se genera una clave de acceso (passKey) para transferir la propiedad del carrito al nuevo usuario.

- Paso a paso:

- Crear carrito

- Agregar datos personales y de envío (verá los datos normalmente)

- Compartir el carrito mediante el enlace creado por la aplicación de venta social

- Abrir el nuevo carrito en una ventana anónima: no se creará ninguna cookie de propiedad y todos los datos estarán enmascarados.

- FastStore:

- No se crea la cookie de propiedad del formulario de pedido de compra, ya que FastStore v1 no admite cookies.

- Pago con GraphQL:

- Al usar `vtex.checkout-graphql` para agregar una dirección mediante las funciones `selectDeliveryOption` / `updateSelectedAddress`, no se crea la cookie.

- Paso a paso (usando el tema nativo de Store Framework):

- Agregar artículo al carrito mediante la página de detalles del producto (addToCart)

- Agregar código postal mediante la página de detalles del producto

- Seleccionar la opción de envío mediante la página de detalles del producto Simulador de envío (updateSelectedAddress). No se creará la cookie de propiedad y los datos de la dirección se ocultarán en el carrito.

- B2B:

- `vtex.storefront-permissions` / `vtex.store-graphql` al agregar una dirección mediante `updateOrderFormShipping`

- `vtex.storefront-permissions` al agregar datos de perfil mediante `updateOrderFormProfile`

- Paso a paso:

- Inicie sesión en una tienda con el tema nativo de tienda B2B (`storefront-permissions` agregará automáticamente la dirección y los datos de perfil al formulario de pedido).

- Después, verá que no se ha configurado ninguna cookie de propiedad.

- La cookie solo se configura al acceder al carrito, mediante las solicitudes realizadas por la interfaz de pago (antes de eso, no hay cookie, e intentar acceder a los datos personales a través de la API resultará en datos enmascarados).

- Incluso después de la creación de la cookie, intentar acceder al formulario de pedido usando la cookie resultará en datos de dirección enmascarados.

## Workaround

No aplica. Comuníquese con el soporte técnico para solicitar la desactivación e indicar en cuál de los casos se aplica.
---
title: 'Pedidos sin dirección de facturación creados a través de la interfaz de usuario nativa'
slug: pedidos-sin-direccion-de-facturacion-creados-a-traves-de-la-interfaz-de-usuario-nativa
status: PUBLISHED
createdAt: 2020-11-16T17:31:41.000Z
updatedAt: 2023-12-19T21:34:01.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: orders-without-invoiceaddress-created-through-native-ui
locale: es
kiStatus: Fixed
internalReference: 306140
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

En algunos casos, sigue siendo posible crear pedidos sin `invoiceAddress` a través de la interfaz de pago.
La dirección de facturación debe ser un campo obligatorio en la interfaz de todas las tiendas que tengan esta funcionalidad habilitada.

## Simulación

Hasta ahora, los pasos conocidos para reproducir el escenario son:


1. Acceder a la tienda sin haber iniciado sesión ni haberse identificado
2. Añadir un producto al carrito
3. En el carrito, hacer clic en «Cerrar pedido»
4. En la pantalla de correo electrónico, introducir una dirección de correo electrónico de un comprador existente; es probable que el usuario sea redirigido al paso de pago
5. Hacer clic para editar el paso de entrega y seleccionar «retirada»
6. No rellenar la dirección de nota
7. Hacer clic para editar «Datos personales»
8. Se le pedirá que inicie sesión.
9. Tras iniciar sesión, en el paso de edición de «Datos personales» aparecerá el botón para ir directamente al pago, incluso si no se ha rellenado la dirección de facturación.

Además de lo anterior, este comportamiento se puede observar cuando el usuario se encuentra en la fase de envío y, al recargar la página, se le redirige automáticamente al pago sin haber rellenado los datos de facturación.
Otro escenario que provoca este comportamiento es cambiar entre la lista de direcciones registradas previamente y una nueva dirección, lo que permite al usuario pasar al pago sin rellenar el código postal (de una nueva dirección).

## Workaround

provisional**
No se conoce ninguna solución provisional para evitar el escenario principal.
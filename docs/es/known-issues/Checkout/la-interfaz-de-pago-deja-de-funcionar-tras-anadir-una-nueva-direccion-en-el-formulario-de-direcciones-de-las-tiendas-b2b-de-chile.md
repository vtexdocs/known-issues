---
title: 'La interfaz de pago deja de funcionar tras añadir una nueva dirección en el formulario de direcciones de las tiendas B2B de Chile'
slug: la-interfaz-de-pago-deja-de-funcionar-tras-anadir-una-nueva-direccion-en-el-formulario-de-direcciones-de-las-tiendas-b2b-de-chile
status: PUBLISHED
createdAt: 2026-03-13T19:50:37.366Z
updatedAt: 2026-03-13T19:50:37.366Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: checkout-ui-breaks-after-new-address-is-added-on-address-form-in-chile-b2b-stores
locale: es
kiStatus: Backlog
internalReference: 1378467
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

En las tiendas chilenas que utilizan la suite B2B, tras añadir una nueva dirección a través de la opción «Entregar en otra dirección» del formulario de direcciones de la interfaz de usuario e introducir la región y el barrio, no es posible introducir la calle y el número a través de la interfaz de usuario, lo que provoca un fallo en la interfaz e impide completar el pedido (el botón «Finalizar pedido» se queda cargando indefinidamente)

## Simulación

1. Inicie sesión en el sitio B2B en un espacio de trabajo no personalizado, con el tema nativo de B2B, utilizando un perfil completo vinculado a una organización con direcciones registradas en su centro de costes. 2. Cree un carrito con un artículo aleatorio y siga hasta el paso de envío. 3. Seleccione «Cambiar opciones de entrega» -> «Entregar en otra dirección».
4. Seleccione «Estado» y «Barrio» (en Chile, «Región» y «Comuna», respectivamente). 5. Se producirá uno de los siguientes escenarios: 1. El formulario de dirección muestra la opción de añadir «número» y «calle», pero, al añadirlos a través de la interfaz de usuario, no se realiza la solicitud `/shippingData` con esta información. 2. El formulario de dirección no muestra la opción para añadir «número» y «calle». En ambos casos, la última solicitud «/shippingData» realizada actualiza el formulario de pedido solo con «barrio» y «región»; «calle» y «número» permanecen vacíos, lo que impide realizar el pedido.

## Workaround

Actualmente no hay ninguna solución alternativa.
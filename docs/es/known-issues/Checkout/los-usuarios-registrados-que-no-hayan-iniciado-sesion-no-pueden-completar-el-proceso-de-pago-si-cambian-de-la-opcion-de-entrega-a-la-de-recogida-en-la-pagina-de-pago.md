---
title: 'Los usuarios registrados (que no hayan iniciado sesión) no pueden completar el proceso de pago si cambian de la opción de entrega a la de recogida en la página de pago'
slug: los-usuarios-registrados-que-no-hayan-iniciado-sesion-no-pueden-completar-el-proceso-de-pago-si-cambian-de-la-opcion-de-entrega-a-la-de-recogida-en-la-pagina-de-pago
status: PUBLISHED
createdAt: 2023-07-28T19:49:03.000Z
updatedAt: 2024-04-17T15:46:39.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: registered-users-not-logged-in-cannot-finish-checkout-when-changing-from-delivery-to-pickup-on-the-checkout-page
locale: es
kiStatus: Fixed
internalReference: 870845
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando un usuario registrado (que no ha iniciado sesión) inicia el proceso de pago seleccionando «Entrega» como opción de envío y, posteriormente, cambia a «Recogida», al intentar finalizar el proceso de pago aparece el mensaje de error «El campo Número del anexo de envío no es válido» y no permite realizar el pedido.

## Simulación

1. Ve al proceso de pago y añade un nuevo artículo
2. Introduce un código postal para calcular los gastos de envío y mantén seleccionada la opción **Entrega**
3. Continúa con el proceso de pago y, cuando se te pida que introduzcas un correo electrónico, utiliza uno de un usuario registrado
4. El proceso de pago mostrará un mensaje emergente informando de que tus datos personales se han recuperado de compras anteriores
5. Cambia de Entrega a Recogida e intenta completar el pedido (aparecerá el mensaje de error)

## Workaround

provisional**
N/A
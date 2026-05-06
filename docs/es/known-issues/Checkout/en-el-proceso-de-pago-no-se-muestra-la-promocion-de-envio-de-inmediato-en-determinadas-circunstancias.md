---
title: 'En el proceso de pago no se muestra la promoción de envío de inmediato en determinadas circunstancias'
slug: en-el-proceso-de-pago-no-se-muestra-la-promocion-de-envio-de-inmediato-en-determinadas-circunstancias
status: PUBLISHED
createdAt: 2020-08-20T16:42:07.000Z
updatedAt: 2024-01-15T14:35:22.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: checkout-does-not-display-shipping-promotion-at-first-instant-for-specific-condition
locale: es
kiStatus: No Fix
internalReference: 280144
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

El proceso de pago (backend) está configurado para preseleccionar el mejor método de envío para el usuario tan pronto como se introduce el código postal.

Las promociones que utilizan la restricción «Aplicar el descuento solo cuando el cliente seleccione uno de los transportistas anteriores» solo se aplican, de hecho, después de que el cliente elija el método de envío específico.

Ocurre que, si la opción de envío seleccionada automáticamente por el proceso de pago se ajusta a alguna promoción con la restricción anterior, el descuento no se aplicará. La opción mencionada es aquella que dice «Aplicar el descuento solo cuando el cliente seleccione uno de los transportistas anteriores».

Esto solo ocurre en un primer momento, ya que el proceso de pago no recalcula las promociones al realizar esta elección automática de entrega. Esto se debe a que, si se recalculan las promociones, es posible que la mejor opción de entrega acabe siendo otra, lo que dejaría al sistema en un bucle, buscando siempre la mejor opción. En la futura actualización de orderForm, se recalculará todo su contexto, esta vez con el formulario de entrega realmente seleccionado, y entonces se aplicará la promoción.

Además de esto, la

## Simulación

de envío del carrito (vista previa del envío) realiza solicitudes adicionales a la API, no solo utilizando el contexto del formulario de pedido. Esto hace que reciba la promoción, mientras que los totales del carrito se limitan al contexto del formulario de pedido, que aún no cuenta con la promoción, lo que da lugar a valores divergentes.


## **Simulación**
- tener una promoción de envío gratuito restringida a la opción «A», y con la opción adicional anterior habilitada
- tener un carrito y un código postal con dos o más tipos de envío, donde «A» es el envío más barato (por ejemplo, A = 10 R$; B = 20 R$)
- introducir el código postal y observar que «A» (el más barato) se seleccionará automáticamente, pero seguirá apareciendo como 10 R$
- Seleccione el envío «B» (20 BRL) y vuelva al envío «A» (10 BRL).
- En ese momento, el valor de «A» se recalculará y se mostrará como gratuito.

## Workaround

No se recomienda utilizar esta restricción en las promociones de envío.


%0A
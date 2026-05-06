---
title: 'La interfaz de pago muestra el envío gratuito cuando el usuario cambia las opciones de entrega'
slug: la-interfaz-de-pago-muestra-el-envio-gratuito-cuando-el-usuario-cambia-las-opciones-de-entrega
status: PUBLISHED
createdAt: 2023-09-11T14:07:03.000Z
updatedAt: 2023-10-02T19:34:53.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: checkout-ui-shows-free-shipping-when-the-user-switches-the-delivery-options
locale: es
kiStatus: Backlog
internalReference: 897109
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

La interfaz de pago muestra el envío gratuito cuando el usuario cambia el método de envío de «envío normal» a «entrega programada». El problema solo se produce en el cuadro de envío y cuando la cuenta tiene configurada la función LeanShipping. Aunque la interfaz muestra el envío gratuito, los valores totales de la compra se muestran y se cobran correctamente.

## Simulación

1. Ve a la página de pago comprando un artículo aleatorio.
2. En la sección de envío, selecciona «entrega programada» y, a continuación, vuelve a seleccionar «envío normal»; el precio del envío gratuito aparecerá en la sección de entrega.

## Workaround

provisional**
No hay ninguna solución provisional.
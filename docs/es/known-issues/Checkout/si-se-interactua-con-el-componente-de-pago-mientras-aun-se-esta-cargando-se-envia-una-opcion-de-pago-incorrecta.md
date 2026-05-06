---
title: 'Si se interactúa con el componente de pago mientras aún se está cargando, se envía una opción de pago incorrecta'
slug: si-se-interactua-con-el-componente-de-pago-mientras-aun-se-esta-cargando-se-envia-una-opcion-de-pago-incorrecta
status: PUBLISHED
createdAt: 2023-12-12T22:07:44.000Z
updatedAt: 2023-12-12T22:07:44.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: interacting-with-the-payment-component-while-is-still-in-a-loading-state-sends-the-wrong-payment-option
locale: es
kiStatus: Backlog
internalReference: 952086
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando el comprador cambia el método de pago mientras el componente de pago aún se está cargando en la página, si dicho método tiene opciones, los datos de pago enviados al formulario de pedido son incorrectos. Cuando se produce este comportamiento, el pedido no se crea y aparece un mensaje para revisar la información de pago.

## Simulación

- Añade artículos al carrito y desplázate hasta los datos de pago;
- Haz clic en un método de pago diferente mientras se carga la página y selecciona otra opción dentro del componente;
- El pago enviado al formulario de pedido es incorrecto, ya que se muestra la primera opción.

## Workaround

provisional**
N/A
---
title: 'Interactuar con el componente de pago mientras aún se encuentra en estado de carga envía la opción de pago incorrecta.'
slug: interactuar-con-el-componente-de-pago-mientras-aun-se-encuentra-en-estado-de-carga-envia-la-opcion-de-pago-incorrecta
status: PUBLISHED
createdAt: 2023-12-13T01:07:44.000Z
updatedAt: 2026-07-09T14:54:00.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: interacting-with-the-payment-component-while-is-still-in-a-loading-state-sends-the-wrong-payment-option
locale: es
kiStatus: No Fix
internalReference: 952086
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando un comprador selecciona una subopción de pago (p. ej., EFECTY, PSE, Boleto) mientras el componente de pago aún se está cargando en la página de pago, una condición de carrera provoca que se envíe la opción incorrecta al formulario de pedido. En lugar de la opción seleccionada por el comprador, se envía la primera subopción disponible. El pedido no se crea y el comprador ve un error que le pide que revise su información de pago.

## Simulación

- Añada artículos al carrito y proceda al paso de pago.

- Mientras el componente de pago aún se está cargando, haga clic en un método de pago que tenga varias subopciones.

- Seleccione cualquier subopción que no sea la primera de la lista.

- Intente realizar el pedido.

- Observe que el pedido falla; se envió la primera subopción de la lista en lugar de la seleccionada.

- Nota: este comportamiento es intermitente, ya que depende del tiempo durante la carga.

## Workaround

Espere a que la sección de pagos se cargue por completo antes de seleccionar un método de pago o cualquiera de sus subopciones. Continúe con la selección solo cuando todas las opciones sean visibles y el indicador de carga haya desaparecido.
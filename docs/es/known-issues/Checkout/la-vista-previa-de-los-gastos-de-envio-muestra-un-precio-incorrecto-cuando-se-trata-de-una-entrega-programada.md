---
title: 'La vista previa de los gastos de envío muestra un precio incorrecto cuando se trata de una entrega programada'
slug: la-vista-previa-de-los-gastos-de-envio-muestra-un-precio-incorrecto-cuando-se-trata-de-una-entrega-programada
status: PUBLISHED
createdAt: 2022-02-25T18:08:32.000Z
updatedAt: 2024-03-27T15:39:49.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: shipping-preview-wrongly-displaying-the-price-when-its-scheduled-delivery
locale: es
kiStatus: Fixed
internalReference: 532487
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

El precio de envío que se muestra en la vista previa del envío (carrito) es incorrecto cuando los artículos tienen entrega programada y todos ellos se envían con el mismo SLA. Aunque la API devuelva el valor correcto, la interfaz de usuario no refleja esta información y muestra un valor incorrecto.

## Simulación

Añade dos o más artículos al carrito con entrega programada; la interfaz de usuario mostrará un valor diferente al que devuelve la API.

## Workaround

provisional**
N/A
---
title: 'Los métodos de pago que se muestran al finalizar la compra difieren de las condiciones de pago vigentes'
slug: los-metodos-de-pago-que-se-muestran-al-finalizar-la-compra-difieren-de-las-condiciones-de-pago-vigentes
status: PUBLISHED
createdAt: 2022-09-27T16:25:08.000Z
updatedAt: 2024-06-07T21:23:12.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: payment-methods-displayed-at-checkout-differ-from-active-payment-conditions
locale: es
kiStatus: Backlog
internalReference: 666469
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Este problema se manifiesta de dos formas durante el proceso de pago:

1. Los métodos de pago **no** aparecen en la página de pago, incluso cuando la condición de pago asociada lleva activa más de 10 minutos.
2. Los métodos de pago **permanecen** en la página de pago incluso cuando la condición de pago asociada lleva desactivada más de 10 minutos.

Se trata de un problema intermitente y no hay indicios de cómo reproducir este comportamiento. La incidencia es mayor en los métodos de pago personalizados.

## Simulación

N/A

## Workaround

provisional**

1. Volver a guardar la regla.
2. Reindexar todos los sistemas de pago en la página de pago a través de la API.
---
title: 'Transición retrasada a "pago aprobado" para métodos de pago de aprobación rápida/automática (el flujo de trabajo no está listo cuando llega la notificación de autorización).'
slug: transicion-retrasada-a-pago-aprobado-para-metodos-de-pago-de-aprobacion-rapidaautomatica-el-flujo-de-trabajo-no-esta-listo-cuando-llega-la-notificacion-de-autorizacion
status: PUBLISHED
createdAt: 2026-09-11T20:31:22.000Z
updatedAt: 2026-09-11T20:31:22.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: delayed-paymentapproved-transition-for-fastautoapproval-payment-methods-workflow-not-ready-when-authorization-notification-arrives
locale: es
kiStatus: Backlog
internalReference: 1460238
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Hemos detectado un problema que afecta a los pedidos pagados con métodos de pago de aprobación rápida/automática (por ejemplo, pagaré, PSE y métodos similares de confirmación instantánea) en los que la notificación de autorización de pago llega antes de que el flujo de trabajo del pedido esté listo para procesarla.

Cuando se produce esta condición de carrera, la transición automática de `pago pendiente` a `pago aprobado` falla con un error como el siguiente:

"Error en la transición automática. El contador de reintentos actual es 1. Error con el mensaje: No se pudo ejecutar la acción 'aprobar pago'. Contenido: '{"error":{"code":"001","message":"No se pudo comunicar con el vendedor {sellerId}"},"operationId":"{operationId}","fields":null}'"

El pedido solo se recupera cuando se ejecuta el siguiente reintento programado del flujo de trabajo, por defecto, **900 segundos (15 minutos)** después del intento fallido, sin que se haya configurado ninguna anulación para esta transición. Durante este lapso, el pedido permanece bloqueado mostrando un estado anterior, aunque el pago ya haya sido autorizado.

Esto difiere de los retrasos causados ​​por la pasarela de pago o el análisis antifraude en los pagos con tarjeta. En los casos de pago con tarjeta, el flujo de trabajo espera correctamente el tiempo de autorización real y reacciona a él, sin que exista ningún error. Este informe de conocimiento solo cubre la condición de carrera del método de aprobación automática.

## Simulación

1. Realice un pedido utilizando un método de pago con aprobación instantánea/automática (p. ej., pagaré, PSE).

2. Si la confirmación de autorización llega antes de que el paso del flujo de trabajo del pedido esté listo para procesar la transición de «aprobación de pago», la transición automática falla con el error «No se puede comunicar con el vendedor» mencionado anteriormente.

3. El estado del pedido solo se actualiza a «pago aprobado» después del siguiente reintento programado (aproximadamente 15 minutos después, según la política de reintentos predeterminada), aunque el pago se haya autorizado inmediatamente.

## Workaround

Actualmente no disponemos de una solución alternativa. El pedido se recupera automáticamente en el siguiente intento programado (hasta ~15 minutos), por lo que no se requiere intervención manual, pero la cuenta/cliente final verá el pedido en estado "no aprobado" durante ese período.
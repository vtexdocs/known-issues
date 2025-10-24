---
title: 'Ausencia de retroalimentación por fallos en el cambio de pedido en Pick and Pack (comunicación con OMS)'
slug: ausencia-de-retroalimentacion-por-fallos-en-el-cambio-de-pedido-en-pick-and-pack-comunicacion-con-oms
status: PUBLISHED
createdAt: 2025-08-13T19:01:16.953Z
updatedAt: 2025-08-13T19:01:16.953Z
contentType: knownIssue
productTeam: Pick and Pack
author: 2mXZkbi0oi061KicTExNjo
tag: Pick and Pack
slugEN: absence-of-feedback-for-order-change-failures-in-pick-and-pack-communication-with-oms
locale: es
kiStatus: Unknown
internalReference: 1275957
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario



El flujo de modificación de pedidos en Pick and Pack, integrado con el OMS (Sistema de Gestión de Pedidos), tiene limitaciones significativas en cuanto a la comunicación de resultados y errores al preparador de pedidos (picker).

Independientemente del motivo -ya sea que el rechazo se deba al pago, a restricciones de límite o a errores del sistema-, la aplicación Pick and Pack no proporciona ningún tipo de notificación directa ni retroalimentación explícita al preparador sobre el resultado del intento de modificación. Todo el procesamiento y la validación de estos cambios tienen lugar en los sistemas backend y se envían a través de la API (changeOrderV2), pero el resultado nunca se comunica al usuario final.

En consecuencia, el recolector puede operar basándose en información de pedido obsoleta, sin saber si su acción fue realmente aceptada, rechazada o si es necesaria alguna acción correctiva, y el comerciante no sabrá que el pedido en el OMS no incluía los cambios realizados durante el proceso de Picking y Embalaje.


#### Simulación




1. El recogedor solicita una modificación de pedido (añadir, eliminar o sustituir un artículo) mediante la aplicación Recoger y Embalar.
2. La solicitud se envía al OMS, que valida si el cambio es posible y, cuando es necesario, activa sistemas externos (por ejemplo, pasarela de pago, motor de reglas, límites o disponibilidad de existencias).
3. Si existe algún impedimento (saldo insuficiente, regla comercial, límite de producto/cantidad, error del sistema), la OMS rechaza el cambio.
4. La aplicación de picking y embalaje sigue mostrando la versión del pedido tras el proceso de picking y embalaje, sin indicar al responsable del picking que el cambio ha sido rechazado o no se ha aplicado de ningún modo.

## Workaround




- El equipo operativo debe implementar una supervisión activa del OMS tras los intentos de cambio, identificando los pedidos cuya modificación fue rechazada.
- Los preparadores de pedidos o los comerciantes deben ser informados manualmente mediante rutinas internas o mensajería cuando no se hayan aplicado los cambios, de modo que quede clara la situación real del pedido, especialmente cuando se requieran anulaciones.
- Se recomienda establecer listas de comprobación para confirmar los pedidos antes de cerrar el embalaje, validando en OMS si se aplicaron efectivamente los cambios previstos.



%0A
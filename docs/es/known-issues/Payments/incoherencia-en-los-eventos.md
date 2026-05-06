---
title: 'Incoherencia en los eventos'
slug: incoherencia-en-los-eventos
status: PUBLISHED
createdAt: 2020-07-22T21:31:52.000Z
updatedAt: 2024-05-23T12:45:28.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: event-inconsistency
locale: es
kiStatus: Fixed
internalReference: 267299
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando el usuario realiza un pedido al finalizar la compra, se inicia un nuevo flujo de pedido. A partir de ese momento, se consulta la pasarela VTEX cuando se detectan los siguientes estados del pedido: «Pago pendiente» y «Verificando factura». En el estado «Pago pendiente», se espera que se envíe una notificación de pago al módulo de Pedidos. Durante este periodo, pueden surgir algunos problemas con el procesamiento de eventos. Aunque no existe una única causa raíz directamente relacionada con el problema de procesamiento de eventos, cualquier otro problema interno o externo vinculado al sistema de notificaciones puede provocar que el flujo de pedidos se bloquee en el estado «Pago pendiente».

La cola de mensajes proporciona un protocolo de comunicación asíncrono, en el que los eventos se colocan en una cola para ser consumidos en un momento predeterminado en el futuro. Por lo tanto, ya hemos identificado algunos escenarios en los que existe una inconsistencia en este flujo para clasificarlos y resolverlos uno por uno.


- Pérdida de eventos o eventos no generados;
- Eventos atascados y no procesados;
- Errores de procesamiento que pueden provocar inconsistencias en la base de datos.

Este KI se refiere explícitamente a los escenarios mencionados anteriormente y no pretende agotar todas las posibilidades de problemas de procesamiento de eventos que puedan surgir. Nuevas causas raíz o problemas relacionados, como respuestas erróneas del proveedor (lo cual ocurre con frecuencia), pueden dar lugar a situaciones en las que el pedido se queda atascado. Cada caso debe investigarse individualmente para determinar la causa raíz del problema.

## Simulación

No hay forma de simular este comportamiento.

## Workaround

Póngase en contacto con nuestro equipo de soporte para volver a procesar manualmente el evento.
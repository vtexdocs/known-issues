---
title: Pedido bloqueado en estado Pendiente de pago por falta de notificación de pago aprobado
slug: pedido-bloqueado-en-estado-pendiente-de-pago-por-falta-de-notificacion-de-pago-aprobado
status: PUBLISHED
createdAt: 2025-09-05T12:09:47.658Z
updatedAt: 2025-09-05T12:09:47.658Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: order-stuck-in-payment-pending-status-due-to-missing-payment-approved-notification
locale: es
kiStatus: Backlog
internalReference: 1031035
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario



Cuando un pedido se encuentra en estado "Pendiente de Pago", se espera que se registre una notificación de pago en el módulo de Pedidos. Durante esta etapa, pueden producirse problemas en el procesamiento de eventos.
La OMS recibe una notificación a través de un punto final de devolución de llamada que se activa cuando la pasarela recibe un mensaje de devolución. Este mensaje se genera cada vez que una transacción alcanza estados específicos (como _Approved_) y, a continuación, es procesado por un trabajador que indica a la pasarela que llame al punto final de devolución de llamada, actualizando la OMS sobre el nuevo estado de la transacción.
En estos casos, el postback se envía correctamente, el OMS lo recibe y responde con éxito, pero el pedido permanece atascado debido a un error no registrado en el OMS.
En otras palabras, la pasarela completa su función correctamente, mientras que algún error en el procesamiento de la OMS impide que el pedido avance.

## Simulación



No hay forma de simular este comportamiento.

## Workaround



Póngase en contacto con nuestro equipo de soporte para que puedan utilizar la herramienta interna de solución de problemas




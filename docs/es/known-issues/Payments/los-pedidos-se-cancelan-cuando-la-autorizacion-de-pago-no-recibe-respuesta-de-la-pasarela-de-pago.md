---
title: 'Los pedidos se cancelan cuando la autorización de pago no recibe respuesta de la pasarela de pago.'
slug: los-pedidos-se-cancelan-cuando-la-autorizacion-de-pago-no-recibe-respuesta-de-la-pasarela-de-pago
status: PUBLISHED
createdAt: 2026-10-08T17:32:21.000Z
updatedAt: 2026-10-08T17:32:21.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: orders-cancelled-when-payment-authorization-gets-no-response-from-the-payment-gateway
locale: es
kiStatus: Backlog
internalReference: 1471795
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Los pedidos pagados con tarjeta se cancelan aproximadamente 100 segundos después de realizarse, aunque la transacción se haya creado y los datos de pago se hayan recibido correctamente. En el pedido, el motivo de la cancelación es «Error de creación: No se pudo crear el pedido solicitado. Inténtelo de nuevo. :: Se ha producido un error de comunicación con la pasarela de pago». En la transacción, el pago permanece en estado «Recibido», nunca llega a la fase de «Autorizando», no hay respuesta del conector (se muestra como «N/A (Sin autorización de pago)» en los informes de transacciones) y se cancela unos 5 minutos después con el mensaje «El pago se ha cancelado correctamente. Este pago no tiene autorización». El adquirente no tiene registro de la solicitud y no se cobra al comprador; este espera en la pantalla de procesamiento de pago hasta que el pedido falla.

Afecta únicamente a la fase de autorización: No se trata de un problema generalizado; otros pedidos de la misma cuenta se autorizan correctamente, y la misma compra realizada de nuevo unos minutos después se procesa sin problemas.

## Simulación

No es posible realizar una simulación.

## Workaround

No hay solución alternativa disponible. El comprador debe realizar el pedido nuevamente.
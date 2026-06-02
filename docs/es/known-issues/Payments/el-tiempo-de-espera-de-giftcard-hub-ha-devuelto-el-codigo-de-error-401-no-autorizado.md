---
title: 'El tiempo de espera de Giftcard Hub ha devuelto el código de error 401 (No autorizado)'
slug: el-tiempo-de-espera-de-giftcard-hub-ha-devuelto-el-codigo-de-error-401-no-autorizado
status: PUBLISHED
createdAt: 2026-06-03T00:09:25.000Z
updatedAt: 2026-06-03T00:09:25.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: giftcard-hub-timeout-returned-as-401-unauthorized
locale: es
kiStatus: Backlog
internalReference: 1416045
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando una solicitud enviada al proveedor de Giftcard Hub agota el tiempo de espera, Giftcard Hub devuelve un error `401 No autorizado` al solicitante en lugar de un código de estado adecuado relacionado con el tiempo de espera. Esta respuesta engañosa dificulta el diagnóstico correcto de la causa raíz de los fallos en los pagos relacionados con tarjetas regalo.

Los errores observados en el registro de transacciones de interacción se encuentran en las siguientes rutas:

- `https://janus-payments-link.vtex.com.br//giftcardproviders/{provider}/giftcards/{giftcard}`
- `https://janus-payments-link.vtex.com.br//giftcardproviders`

## Simulación

Cualquier flujo de pago que utilice una tarjeta regalo a través del Giftcard Hub en el que la respuesta del proveedor supere los 15 segundos.

**Pasos para reproducir el error:**

1. Añade un producto al carrito y procede al pago.
2. En el paso de pago, selecciona una tarjeta regalo como método de pago.
3. Completa el pago para que el Giftcard Hub envíe una solicitud al proveedor de la tarjeta regalo.
4. Si el proveedor no responde en **15 segundos**, Giftcard Hub cancela la solicitud y devuelve `401 No autorizado` en lugar de un error relacionado con el tiempo de espera.
5. Compruebe los registros de Giftcard para ver si aparece el siguiente mensaje y confirmar la causa raíz:

 La solicitud se canceló debido a que transcurrió el tiempo de espera configurado en HttpClient.Timeout de 15 segundos.

## Workaround

provisional**
No hay ninguna solución provisional disponible.
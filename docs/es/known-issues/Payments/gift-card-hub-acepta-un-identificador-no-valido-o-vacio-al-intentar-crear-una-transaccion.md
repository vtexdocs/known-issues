---
title: 'Gift Card HUB acepta un identificador no válido o vacío al intentar crear una transacción'
slug: gift-card-hub-acepta-un-identificador-no-valido-o-vacio-al-intentar-crear-una-transaccion
status: PUBLISHED
createdAt: 2023-07-05T12:50:22.000Z
updatedAt: 2023-07-05T12:50:49.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: gift-card-hub-accepts-invalidempty-id-in-response-to-create-transaction
locale: es
kiStatus: Backlog
internalReference: 855864
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

La documentación del protocolo de nuestro proveedor de tarjetas regalo especifica que la API de creación de transacciones debe incluir un ID válido en la respuesta. Sin embargo, la implementación actual del protocolo permite a los proveedores responder a esta solicitud con un ID vacío o no válido. Como resultado, al intentar liquidar el pago, la transacción se bloquea porque falta el ID requerido. Esto provoca que se genere un error y que la transacción quede bloqueada en el proceso.

## Simulación

Responde a la llamada de creación de transacción con un ID no válido e intenta finalizar la transacción.

## Workaround

provisional**
N/A
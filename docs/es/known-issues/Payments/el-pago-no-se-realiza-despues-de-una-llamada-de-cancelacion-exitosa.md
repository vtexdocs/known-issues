---
title: 'El pago no se realiza después de una llamada de cancelación exitosa.'
slug: el-pago-no-se-realiza-despues-de-una-llamada-de-cancelacion-exitosa
status: PUBLISHED
createdAt: 2020-12-14T22:45:27.000Z
updatedAt: 2026-09-15T17:46:33.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: payment-does-not-advance-to-canceled-after-a-successful-cancellation-call
locale: es
kiStatus: No Fix
internalReference: 316125
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Se solicita la cancelación/reembolso de una transacción; el conector REST de eRede la acepta y devuelve éxito, pero el pago nunca pasa al estado Cancelado, sino que permanece indefinidamente en su estado previo a la cancelación. La pasarela registra la respuesta exitosa del conector en las interacciones de la transacción y luego se detiene, sin completar la transición de estado.

## Simulación

No se puede reproducir a demanda: el fallo depende de la respuesta de cancelación asíncrona del conector en una transacción real, sin que se haya identificado ningún desencadenante determinista.

Para confirmar que se trata de este error clave, verifique la transacción:

1. La afiliación es eRede REST (`erederest`).

2. Existe una interacción de `URL de solicitud de cancelación` a `api.userede.com.br/erede/v1`.

3. La respuesta correspondiente indica `HttpStatusCode:Accepted` con `"returnCode":"360"`. 4. No se produce ningún cambio de estado y el pago permanece en su estado previo a la cancelación.

## Workaround

N/A
---
title: 'Error de Braspag al registrar o cancelar debido a un error con el código BP901'
slug: error-de-braspag-al-registrar-o-cancelar-debido-a-un-error-con-el-codigo-bp901
status: PUBLISHED
createdAt: 2021-12-17T23:09:52.000Z
updatedAt: 2026-06-05T20:33:59.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: braspag-error-when-capturing-or-canceling-due-to-an-error-with-code-bp901
locale: es
kiStatus: No Fix
internalReference: 490428
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Al utilizar el conector **BrasPag**, algunas **solicitudes de captura o cancelación** fallan con el código de error **BP901**. Este error indica un **tiempo de espera agotado** en la comunicación entre BrasPag y el adquirente, lo que significa que se intentó realizar la operación, pero no se recibió respuesta dentro del plazo previsto, dejando la transacción en un estado inconsistente.

## Simulación

No se ha podido reproducir en un entorno controlado. El error se produce de forma intermitente en producción, dependiendo de la estabilidad de la comunicación entre BrasPag y el adquirente en el momento de la solicitud.

## Workaround

provisional**
No hay ninguna solución provisional disponible.
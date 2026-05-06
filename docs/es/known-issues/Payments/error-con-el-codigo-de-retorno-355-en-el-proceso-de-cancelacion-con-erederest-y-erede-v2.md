---
title: 'Error con el código de retorno 355 en el proceso de cancelación con ERedeRest y E-Rede V2'
slug: error-con-el-codigo-de-retorno-355-en-el-proceso-de-cancelacion-con-erederest-y-erede-v2
status: PUBLISHED
createdAt: 2023-01-25T13:35:02.000Z
updatedAt: 2024-11-26T19:46:33.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: error-with-returncode-355-in-cancellation-process-with-erederest-and-erede-v2
locale: es
kiStatus: Backlog
internalReference: 740084
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Los conectores heredados, ERedeRest y E-Rede V2, inician las cancelaciones enviando una solicitud al proveedor y esperan recibir un «returnCode»: «359» que indique que la cancelación se ha realizado correctamente. Cualquier otro código es interpretado por nuestra pasarela como un estado indefinido, lo que provoca que la transacción se quede bloqueada en un estado de cancelación. Aunque, en algunos casos, la solicitud de reembolso o cancelación se haya realizado correctamente. Esto provocaba intentos repetidos de cancelación, incluso cuando el proveedor ya había procesado la cancelación.

## Simulación

No se puede simular, ya que dependemos de la respuesta del proveedor.

## Workaround

Si el pago por parte del proveedor ya está cancelado

 {"returnCode":"355","returnMessage":"Transacción ya cancelada."}

El equipo de soporte del producto tiene la opción de utilizar una API interna, «`force-cancel-status`», para actualizar el estado del pago y de la transacción a «cancelado».

Es posible que esto no funcione en transacciones con varios pagos, dependiendo de la coherencia del estado de sus liquidaciones.
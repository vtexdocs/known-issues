---
title: 'Cuando se produce un error después de que Firstdata haya autorizado una liquidación, la transacción no se puede completar.'
slug: cuando-se-produce-un-error-despues-de-que-firstdata-haya-autorizado-una-liquidacion-la-transaccion-no-se-puede-completar
status: PUBLISHED
createdAt: 2023-02-27T15:48:16.000Z
updatedAt: 2023-02-27T15:48:16.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: when-an-error-occurs-after-firstdata-approves-a-settlement-the-transaction-cannot-be-completed
locale: es
kiStatus: Backlog
internalReference: 760458
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

En ocasiones, pueden producirse errores al procesar nuestras operaciones a través de la pasarela. En el caso del conector de Firstdata, puede surgir un error inmediatamente después de la aprobación de la liquidación por nuestra parte. Para resolverlo, debemos solicitar la liquidación de nuevo. Sin embargo, debido a la idempotencia, el proveedor no envía de nuevo una respuesta de «aprobado», lo que puede provocar que la transacción quede bloqueada en el estado «en liquidación» hasta que se proporcione una nueva actualización de estado.

## Simulación

No es posible reproducir el error, ya que es intermitente.

## Workaround

No hay ninguna solución alternativa disponible
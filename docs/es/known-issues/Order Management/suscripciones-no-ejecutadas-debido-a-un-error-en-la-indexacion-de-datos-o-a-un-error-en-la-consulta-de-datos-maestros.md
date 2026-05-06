---
title: 'Suscripciones no ejecutadas debido a un error en la indexación de datos o a un error en la consulta de datos maestros'
slug: suscripciones-no-ejecutadas-debido-a-un-error-en-la-indexacion-de-datos-o-a-un-error-en-la-consulta-de-datos-maestros
status: PUBLISHED
createdAt: 2024-01-04T20:26:48.000Z
updatedAt: 2024-07-09T17:24:26.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: subscriptions-not-executed-due-to-data-indexing-failure-or-masterdata-query-failure
locale: es
kiStatus: Backlog
internalReference: 961526
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

La creación de solicitudes de suscripción depende del resultado de una consulta realizada a la base de datos de suscripciones; esta consulta se realiza periódicamente para identificar qué suscripciones deben ejecutarse en ese periodo. Si la consulta falla o no devuelve una suscripción concreta, su ciclo no se ejecuta y no se registra ningún error, lo que da lugar a una suscripción con la fecha «nextPurchaseDate» en el pasado.

## Simulación

No tenemos forma de simular este escenario debido a la dependencia de otros sistemas.

## Workaround

Para ajustar la `nextPurchaseDate`, el usuario final puede pausar la suscripción y reactivarla. Esta acción hará que el sistema de suscripciones recalcule la fecha de ejecución y la `nextPurchaseDate` se actualizará correctamente.

O bien, el cliente puede actualizar la `nextPurchaseDate` de la suscripción del usuario a una fecha futura a través de la API.
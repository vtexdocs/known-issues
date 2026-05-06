---
title: 'La simulación de suscripciones devolvió un error cuando PickupPointID contiene caracteres especiales'
slug: la-simulacion-de-suscripciones-devolvio-un-error-cuando-pickuppointid-contiene-caracteres-especiales
status: PUBLISHED
createdAt: 2023-09-19T17:31:32.000Z
updatedAt: 2023-09-19T17:31:32.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: subscriptions-simulation-returned-error-when-pickuppointid-contains-special-characters
locale: es
kiStatus: Backlog
internalReference: 903332
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Para realizar un pedido de suscripción o actualizar una suscripción, el sistema de suscripciones lleva a cabo una

## Simulación

en la que utiliza los datos de entrega proporcionados por el sistema logístico; si entre estos datos hay un punto de recogida cuyo ID aparece subrayado, el sistema de suscripciones no podrá seleccionar correctamente el SLA, lo que generará el error «Invalid AddressProvider:....» en la simulación y, en consecuencia, no generará el pedido.


## **Simulación**
1- Crea un punto de recogida cuyo ID tenga un subrayado.
2- Realiza una solicitud de suscripción seleccionando el punto de recogida creado en el paso 1.
3- Espera a que se ejecute el primer ciclo y comprueba que no se ejecuta y que el panel de suscripción registra un error indicando que la dirección no es válida.

## Workaround

Elimine el punto de recogida cuyo ID aparece subrayado, cree uno nuevo y actualice la suscripción para que utilice este nuevo punto de recogida.
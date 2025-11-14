---
title: 'La simulación de suscripciones devuelve un error cuando PickupPointID contiene caracteres especiales'
slug: la-simulacion-de-suscripciones-devuelve-un-error-cuando-pickuppointid-contiene-caracteres-especiales
status: PUBLISHED
createdAt: 2025-11-14T19:26:18.810Z
updatedAt: 2025-11-14T19:26:18.810Z
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


Para realizar un pedido de suscripción o actualizar una suscripción, el sistema de suscripción realiza una simulación, y en esta simulación utiliza los datos de entrega devueltos por el sistema logístico, y si dentro de estos datos hay un punto de recogida cuyo ID está subrayado, el sistema de suscripción no podrá elegir correctamente el ANS, generando así el error "AddressProvider inválido:...." en la simulación y en consecuencia no generará el pedido.


#### Simulación


1- Crear un punto de recogida cuyo ID tenga un subrayado
2- Realice una solicitud de suscripción eligiendo el punto de picking creado en el paso 1.
3- Espera a que se ejecute el primer ciclo y comprueba que no se ejecuta y que el panel de suscripción registra un error diciendo que la dirección no es válida.

## Workaround


Elimina el punto de recogida cuyo ID aparece subrayado y crea uno nuevo y actualiza la suscripción para que utilice este nuevo punto de recogida.




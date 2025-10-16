---
title: Las hojas de trabajo Pick and Pack permanecen abiertas y no pueden completarse
slug: las-hojas-de-trabajo-pick-and-pack-permanecen-abiertas-y-no-pueden-completarse
status: PUBLISHED
createdAt: 2025-10-16T20:29:05.412Z
updatedAt: 2025-10-16T20:29:05.412Z
contentType: knownIssue
productTeam: Pick and Pack
author: 2mXZkbi0oi061KicTExNjo
tag: Pick and Pack
slugEN: pick-and-pack-worksheets-remain-open-and-cannot-be-completed
locale: es
kiStatus: Backlog
internalReference: 1160144
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Los estados de las hojas de trabajo incluyen **pendiente**, **para empaquetar**, **completado** y **cancelado**.

Al cerrar una hoja de trabajo, debe alcanzar el estado **completado** o **cancelado**. Un posible problema es que no se alcancen estos dos estados finales, lo que impediría completar el proceso.

Esto podría ocurrir si los elementos asociados a la hoja de trabajo no han sido revisados por el selector o están bloqueados por procesos pendientes, como transferencias o aprobaciones.

Como resultado, la hoja de trabajo queda bloqueada en un estado que no permite que el flujo continúe.

## Simulación



- El selector accede a la hoja de trabajo.
- El selector procede a recoger cada elemento.
- Una vez finalizado el picking, todos los elementos de la hoja de trabajo se marcan como "**Picking**".
- La hoja de trabajo pasa automáticamente al estado "**Completado**", pero este comportamiento no se produce.

## Workaround


No hay solución




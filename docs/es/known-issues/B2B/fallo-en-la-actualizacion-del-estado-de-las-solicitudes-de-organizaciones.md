---
title: Fallo en la actualización del estado de las solicitudes de organizaciones
slug: fallo-en-la-actualizacion-del-estado-de-las-solicitudes-de-organizaciones
status: PUBLISHED
createdAt: 2025-09-11T15:32:39.482Z
updatedAt: 2025-09-11T15:32:39.482Z
contentType: knownIssue
productTeam: B2B
author: 2mXZkbi0oi061KicTExNjo
tag: B2B
slugEN: failure-in-organizations-requests-status-update
locale: es
kiStatus: Backlog
internalReference: 1275305
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario



Al aprobar una Solicitud de Organización en el B2B Suite es posible que el estado de la solicitud no se actualice correctamente tras crear la organización, dejándola en `Pendiente`.

Esto ocurre por causas desconocidas y se conocen dos posibles escenarios:

- La organización se crea correctamente pero el estado de la solicitud no se actualiza;
- La organización se ha creado de forma incompleta, falta información sobre el centro de costes y los usuarios y el estado no se actualiza.

## Simulación



No hay forma de reproducir el problema.

## Workaround



Cuando la organización esté correctamente creada (con usuario y centro de coste) puedes solicitar una sincronización de estado a los equipos de soporte de VTEX.

Cuando la organización se crea sin usuarios ni centro de costes, se debe realizar una solicitud `deleteOrganization` vía graphQL para que la solicitud pueda ser aprobada de nuevo.



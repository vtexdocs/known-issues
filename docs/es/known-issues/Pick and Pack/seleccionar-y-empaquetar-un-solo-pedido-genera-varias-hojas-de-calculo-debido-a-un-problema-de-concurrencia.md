---
title: 'Seleccionar y empaquetar | Un solo pedido genera varias hojas de cálculo debido a un problema de concurrencia'
slug: seleccionar-y-empaquetar-un-solo-pedido-genera-varias-hojas-de-calculo-debido-a-un-problema-de-concurrencia
status: PUBLISHED
createdAt: 2026-02-26T19:19:07.128Z
updatedAt: 2026-02-26T19:19:07.128Z
contentType: knownIssue
productTeam: Pick and Pack
author: 2mXZkbi0oi061KicTExNjo
tag: Pick and Pack
slugEN: pick-and-pack-single-order-generating-multiple-worksheets-due-to-concurrency-issue
locale: es
kiStatus: Backlog
internalReference: 1370559
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

En determinados escenarios de concurrencia en Pick and Pack, un solo pedido puede generar varias hojas de trabajo aunque solo exista un paquete en OMS.
Esto ocurre debido a una condición de carrera durante la creación de la hoja de trabajo, en la que procesos internos simultáneos intentan crear una hoja de trabajo para el mismo pedido casi al mismo tiempo. Como resultado, se pueden crear hojas de trabajo duplicadas o huérfanas.

## Simulación

Este comportamiento no es fácilmente reproducible en un entorno controlado, ya que depende de eventos internos concurrentes. Patrón de escenario observado: 1. Se crea un pedido y se envía a Pick and Pack.
2. Dos o más procesos internos (por ejemplo, flujos de automatización, reintentos o controladores de eventos paralelos) intentan crear una hoja de trabajo para el mismo pedido simultáneamente. 3. El primer proceso crea correctamente la hoja de trabajo y vincula los artículos. 4. El segundo proceso también crea un registro de hoja de trabajo, pero falla durante el paso de vinculación de artículos debido a un conflicto de versiones o una actualización simultánea. 5.

La hoja de trabajo adicional permanece creada en el sistema, posiblemente sin artículos asociados. Se trata de un problema de concurrencia del backend y no depende de la interacción del usuario ni de la configuración operativa.

## Workaround

No hay ninguna solución alternativa disponible. Desde el punto de vista operativo, los usuarios pueden ignorar la hoja de trabajo huérfana si no contiene ningún artículo, pero no hay ninguna medida preventiva que se pueda tomar a nivel de cuenta para evitar que se repita.
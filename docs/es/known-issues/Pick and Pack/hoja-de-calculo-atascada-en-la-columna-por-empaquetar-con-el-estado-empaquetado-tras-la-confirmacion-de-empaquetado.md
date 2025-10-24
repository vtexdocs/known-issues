---
title: 'Hoja de cálculo atascada en la columna "Por empaquetar" con el estado "Empaquetado" tras la confirmación de empaquetado.'
slug: hoja-de-calculo-atascada-en-la-columna-por-empaquetar-con-el-estado-empaquetado-tras-la-confirmacion-de-empaquetado
status: PUBLISHED
createdAt: 2025-09-30T14:51:41.840Z
updatedAt: 2025-09-30T14:51:41.840Z
contentType: knownIssue
productTeam: Pick and Pack
author: 2mXZkbi0oi061KicTExNjo
tag: Pick and Pack
slugEN: worksheet-stuck-in-to-pack-column-with-status-packed-after-packing-confirmation
locale: es
kiStatus: Backlog
internalReference: 1299842
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


En raras ocasiones, tras la confirmación de empaquetado, la Hoja de trabajo permanece en la columna "Para empaquetar" con el estado "Empaquetado" en lugar de pasar a "Completado". El pedido en Pick and Pack llega a COMPLETADO, pero la Hoja de trabajo correspondiente no avanza, lo que crea una incoherencia en la información de Pick and Pack y también con el OMS.

El análisis indica que la sincronización de estados entre el pedido (COMPLETADO) y la hoja de trabajo (EMBALADO → COMPLETADO) falla silenciosamente cuando el pedido contiene artículos rechazados; no se produce ningún registro de errores, lo que sugiere un fallo en la gestión de la transición de estados más que una excepción. Esto se ha observado en casos aislados (ejemplos proporcionados por el cliente).

## Simulación

## Workaround


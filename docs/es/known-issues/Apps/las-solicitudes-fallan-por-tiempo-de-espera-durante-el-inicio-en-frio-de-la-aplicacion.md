---
title: 'Las solicitudes fallan por tiempo de espera durante el inicio en frío de la aplicación.'
slug: las-solicitudes-fallan-por-tiempo-de-espera-durante-el-inicio-en-frio-de-la-aplicacion
status: PUBLISHED
createdAt: 2023-04-13T15:42:30.000Z
updatedAt: 2026-07-24T22:42:22.000Z
contentType: knownIssue
productTeam: Apps
author: 2mXZkbi0oi061KicTExNjo
tag: Apps
slugEN: requests-failing-with-timeout-during-app-cold-start
locale: es
kiStatus: Backlog
internalReference: 789499
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando una aplicación no recibe solicitudes durante un tiempo, entra en un estado de arranque en frío. Las solicitudes enviadas a la aplicación mientras se está "activando" pueden fallar debido a un tiempo de espera agotado. Como resultado, algunos eventos podrían no entregarse correctamente. Por lo tanto, algunos eventos o solicitudes a la aplicación afectada podrían perderse silenciosamente cuando la aplicación está en arranque en frío y tarda demasiado en responder.

## Simulación

Este comportamiento es intermitente, por lo que no es posible simularlo.

## Workaround

En algunos casos, se puede reprocesar el escenario, ya que la aplicación ya está "activa" en ese momento.
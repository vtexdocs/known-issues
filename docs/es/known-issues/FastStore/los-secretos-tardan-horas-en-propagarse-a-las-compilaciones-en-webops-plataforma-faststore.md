---
title: 'Los secretos tardan horas en propagarse a las compilaciones en WebOps (plataforma FastStore).'
slug: los-secretos-tardan-horas-en-propagarse-a-las-compilaciones-en-webops-plataforma-faststore
status: PUBLISHED
createdAt: 2026-03-02T17:25:46.230Z
updatedAt: 2026-03-02T17:25:46.230Z
contentType: knownIssue
productTeam: FastStore
author: 2mXZkbi0oi061KicTExNjo
tag: FastStore
slugEN: secrets-take-hours-to-propagate-to-builds-in-webops-faststore-platform
locale: es
kiStatus: Backlog
internalReference: 1371882
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Las actualizaciones de secretos de WebOps a veces tardan horas en estar disponibles en las compilaciones de FastStore, en lugar de los pocos minutos esperados. El síntoma visible es que los secretos nuevos o editados no aparecen en la imagen/entorno de compilación, incluso después de activar una nueva implementación.

## Simulación

Requisitos previos: un proyecto FastStore que utilice WebOps con variables y secretos configurados.

Pasos: 1) En WebOps → Configuración → Variables y secretos para la cuenta/entorno de destino, cree o actualice los secretos. Anote la marca de tiempo de guardado. 2) Active una nueva implementación (ya sea mediante un commit o iniciando una implementación en WebOps) y anote el enlace de implementación y la hora de compilación. 3) Inspeccione las variables de imagen/entorno de compilación resultantes. El problema se reproduce cuando los secretos recién guardados no aparecen en la compilación durante un período prolongado (posiblemente horas).

## Workaround

Después de guardar los secretos, espere unos minutos y luego inicie una nueva implementación. Si los secretos siguen sin aparecer, abra inmediatamente un ticket de soporte con: - Cuenta/entorno, nombres exactos de los secretos (sin valores), marca de tiempo de guardado de los secretos, enlace de implementación y hora de compilación.
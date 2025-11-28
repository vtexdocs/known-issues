---
title: 'La importación/exportación de MasterData devuelve el tiempo de espera.'
slug: la-importacionexportacion-de-masterdata-devuelve-el-tiempo-de-espera
status: PUBLISHED
createdAt: 2025-11-28T22:00:05.105Z
updatedAt: 2025-11-28T22:00:05.105Z
contentType: knownIssue
productTeam: Storage
author: 2mXZkbi0oi061KicTExNjo
tag: Storage
slugEN: masterdata-worksheet-importexport-returning-timeout
locale: es
kiStatus: Backlog
internalReference: 400265
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Al exportar y/o importar una entidad, puede producirse un timeout en los siguientes escenarios:

- Entidad con muchos campos;
- Un determinado campo con demasiada información;
- Muchos documentos en la entidad.
Estos escenarios pueden conducir a un tamaño de archivo muy grande, sobrecargando al trabajador que exporta/importa los documentos al archivo/base de datos, resultando en una respuesta de tiempo de espera con una respuesta de solicitud abortada.


#### Simulación

## Workaround


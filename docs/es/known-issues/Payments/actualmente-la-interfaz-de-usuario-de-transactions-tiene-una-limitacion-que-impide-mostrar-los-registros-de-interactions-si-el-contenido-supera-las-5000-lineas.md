---
title: 'Actualmente, la interfaz de usuario de Transactions tiene una limitación que impide mostrar los registros de /interactions si el contenido supera las 5000 líneas.'
slug: actualmente-la-interfaz-de-usuario-de-transactions-tiene-una-limitacion-que-impide-mostrar-los-registros-de-interactions-si-el-contenido-supera-las-5000-lineas
status: PUBLISHED
createdAt: 2023-03-27T13:40:30.000Z
updatedAt: 2023-03-27T13:40:30.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: the-transaction-ui-currently-has-a-limitation-where-it-cannot-display-logs-from-interactions-if-the-payload-exceeds-5000-lines
locale: es
kiStatus: Backlog
internalReference: 778408
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Actualmente, la API /interactions solo puede recuperar un máximo de 5000 líneas del archivo S3 en el que se almacenan todos los datos. Esto puede suponer un problema cuando una transacción genera registros que superan este límite.

## Simulación

Si una transacción genera registros que superan el límite de 5000 líneas, la API /interactions no puede recuperar todos los datos.

## Workaround

Si necesita los registros que faltan para investigar un problema, póngase en contacto con nuestro equipo de soporte para solicitar una auditoría directamente del archivo S3. Tenga en cuenta que esta operación conlleva un coste significativo, por lo que nuestro equipo analizará y recuperará estos datos cuando sea necesario.
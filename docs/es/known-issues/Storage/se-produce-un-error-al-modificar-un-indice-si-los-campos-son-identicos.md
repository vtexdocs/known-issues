---
title: 'Se produce un error al modificar un índice si los campos son idénticos.'
slug: se-produce-un-error-al-modificar-un-indice-si-los-campos-son-identicos
status: PUBLISHED
createdAt: 2023-07-03T21:48:35.000Z
updatedAt: 2025-10-21T22:14:14.000Z
contentType: knownIssue
productTeam: Storage
author: 2mXZkbi0oi061KicTExNjo
tag: Storage
slugEN: error-when-changing-an-index-if-the-fields-are-identical
locale: es
kiStatus: Fixed
internalReference: 854634
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

La actualización de un índice de esquema puede provocar un error 500 (Error interno del servidor) cuando no hay cambios que realizar, lo que significa que los valores de los campos son idénticos a los actuales.
Al realizar una solicitud GET en la API para comprobar los índices, se observa que no es necesaria ninguna actualización, ya que el índice es idéntico al cuerpo proporcionado en la solicitud PUT.

## Simulación

1. Envía una solicitud PUT para actualizar un índice de esquema a través de la API, proporcionando la carga útil necesaria en el cuerpo de la solicitud.
2. Verifica la respuesta de la API y comprueba si devuelve un **error 500 del servidor interno**.
3. Realiza una solicitud GET posterior en la API para recuperar los índices de esquema y compáralos con el cuerpo proporcionado en la solicitud PUT.

## Workaround

N/A
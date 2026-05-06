---
title: 'Si se crean redireccionamientos incorrectos que contengan caracteres o consultas que no deberían incluirse, la carga o descarga del archivo CSV a través de la CLI no funciona.'
slug: si-se-crean-redireccionamientos-incorrectos-que-contengan-caracteres-o-consultas-que-no-deberian-incluirse-la-carga-o-descarga-del-archivo-csv-a-traves-de-la-cli-no-funciona
status: PUBLISHED
createdAt: 2024-01-25T19:00:01.000Z
updatedAt: 2024-01-25T19:00:01.000Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: creating-wrong-redirects-containing-charactersqueries-that-shouldnt-be-uploaded-the-uploaddownload-of-the-csv-through-the-cli-doesnt-work
locale: es
kiStatus: No Fix
internalReference: 971936
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Tras crear redireccionamientos incorrectos que contienen caracteres que no deben cargarse (por ejemplo: #, consultas) o redireccionamientos que deberían crearse a nivel del servidor, la carga o descarga masiva de archivos CSV a través de la CLI deja de funcionar.

## Simulación

Crea una redirección para una consulta, por ejemplo: /?binding=XXXXX
Elimina la redirección mediante el IDE de GraphQL (de lo contrario, no podrás eliminarla)
Intenta descargar o cargar el CSV de las redirecciones a través de la CLI y verás que no podrás hacerlo.

 ![](https://vtexhelp.zendesk.com/attachments/token/etn94WlrSAYOFFj0rZfVwoowE/?name=image.png)

## Workaround

provisional**
Actualmente no hay ninguna solución provisional para esto y la descarga masiva mediante la CLI no se podrá utilizar.
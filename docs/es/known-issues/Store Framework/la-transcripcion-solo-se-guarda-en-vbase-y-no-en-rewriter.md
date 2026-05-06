---
title: 'La transcripción solo se guarda en vbase y no en rewriter'
slug: la-transcripcion-solo-se-guarda-en-vbase-y-no-en-rewriter
status: PUBLISHED
createdAt: 2023-01-23T15:28:58.000Z
updatedAt: 2023-12-12T19:53:55.000Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: transliteration-only-being-saved-in-vbase-and-not-into-rewriter
locale: es
kiStatus: Backlog
internalReference: 738334
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando se transcriben las URL a través del reescritor del catálogo y este no las almacena, o no se recibe ninguna notificación a través del difusor, solo las almacenamos en vbase

## Simulación

Transl

Comprueba el reescritor con el linkId que has creado en admin/graphql-ide y selecciona la aplicación del reescritor:


 { internal{ get(path: "tuLinkIdAquí"){ id } }}

## Workaround

Ejecuta la siguiente consulta en el reescritor


 { internal{ get(path: "tuNombreDeCategoríaTraducidoSlugificado"){ id from declarer type query binding  origin resolveAs } }}


Guarda los valores devueltos, los necesitarás en el siguiente paso

Ejecuta la siguiente mutación cambiando solo el parámetro «from»; los demás deben ser iguales a los anteriores:


 mutation saveInternal($route: InternalInput!) { internal { save(route: $route) { from declarer type id binding resolveAs origin } }}{ "route": { "from": "tuLinkId", "declarer": "yourSavedDeclarer", "type": "yourSavedType", "binding": "yourSavedBinding", "id": "yourSavedId", "origin": "yourSavedOrigin", "resolveAs": "TheOriginalNameOfTheCategory" --aquí en cirílico }}



> Para obtener más información sobre esos parámetros, puedes consultar: https://developers.vtex.com/vtex-developer-docs/docs/rewriter


Ahora, vamos a eliminar la ruta antigua (la guardada con el nombre)


    mutation saveInternal($route: InternalInput!) { internal { delete(path: "tuNombreDeCategoríaTraducidoSlugificado") { id } }}
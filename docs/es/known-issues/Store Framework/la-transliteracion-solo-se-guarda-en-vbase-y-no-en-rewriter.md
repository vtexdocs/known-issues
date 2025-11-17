---
title: 'La transliteración sólo se guarda en vbase y no en rewriter'
slug: la-transliteracion-solo-se-guarda-en-vbase-y-no-en-rewriter
status: PUBLISHED
createdAt: 2025-11-17T17:44:18.056Z
updatedAt: 2025-11-17T17:44:18.056Z
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



Al transliterar las urls a través del catalogo rewriter no lo almacena, o no recibe ninguna notificación a través del broadcaster, solo lo almacenamos en vbase


#### Simulación



Traducir

Comprueba el rewriter con el linkId que creaste en admin/graphql-ide y elige la app rewriter:


    { internal{ get(ruta: "tuLinkdIdAquí"){ id } }}



## Workaround



Ejecute la siguiente consulta en la regrabadora


    { internal{ get(path: "tuNombreCategoriaTraducidoSlugified"){ id from declarer type query binding origin resolveAs } }}


Guarde los valores devueltos, necesitará utilizarlos en el siguiente paso

Ejecute la siguiente mutación cambiando únicamente el parámetro from, los demás deben ser iguales que los anteriores:


    mutation saveInternal($ruta: InternalInput!) { internal { save(ruta: $ruta) { from declarer type id binding resolveAs origin } }}{ "ruta": { "from": "yourLinkId", "declarer": "tuDeclaradorGuardado", "tipo": "yourSavedType", "binding": "yourSavedBinding", "id": "yourSavedId", "origin": "yourSavedOrigin", "resolveAs": "TheOriginalNameOfTheCategory" -aquí en cirílico }}



> Para más información sobre estos parámetros, puede consultar: https://developers.vtex.com/vtex-developer-docs/docs/rewriter


Ahora, vamos a borrar la ruta antigua (la guardada con el nombre)


    mutation guardarInterna($ruta: ¡EntradaInterna!) { interna { borrar(ruta: "tuNombreCategoriaTraducidoSlugificado") { id } }}
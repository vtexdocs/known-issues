---
title: 'Los valores de las especificaciones no se traducen en la sección de búsqueda inteligente'
slug: los-valores-de-las-especificaciones-no-se-traducen-en-la-seccion-de-busqueda-inteligente
status: PUBLISHED
createdAt: 2026-03-18T19:52:45.012Z
updatedAt: 2026-03-18T19:52:45.012Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: specification-values-not-being-translated-in-intelligent-search-side
locale: es
kiStatus: Backlog
internalReference: 784129
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

La traducción de campos de un idioma a otro mediante la aplicación `vtex.catalog-graphql` y su inclusión en la búsqueda inteligente no funciona correctamente.

El proceso de indexación y la aplicación `vtex.catalog-graphql` difieren en el manejo de los valores de especificación. La diferencia radica en que, al llamar a `vtex.messages`, el proceso de indexación utiliza el _FieldValueId_ del valor de especificación, mientras que, al registrar las traducciones, la aplicación `vtex.catalog-graphql` utiliza el _FieldId_ de la especificación. Esta sutil diferencia hace que las traducciones de los valores de especificación creadas mediante la aplicación `vtex.catalog-graphql` no se recojan durante el proceso de indexación.

## Simulación

Siga la guía sobre valores de especificación de traducción: https://developers.vtex.com/docs/guides/catalog-internationalization

Compruebe que la traducción no se refleje en las facetas del lado del IS.

## Workaround

- Obtenga todos los valores de especificación que necesite traducir y sus _FieldValueIds_.
- Utilice la consulta traducida para obtener la traducción actual de la aplicación de mensajes utilizando el _FieldId_ como contexto (en el ejemplo siguiente, _Red_ es el valor de especificación y 1 es el _FieldId_ para una especificación de color).

    query GetTranslation($args: TranslateArgs!) {translate(args: $args)}{"args": { "indexedByFrom": [   { "from": "en-US",      "messages": [ { "content": "Red", "context": "1" }     ]    } ], "to": "pt-BR"}}

- Crea una nueva traducción utilizando el FieldValueId como contexto y la mutación translate (en el ejemplo siguiente, 11 es el _FieldValueId_ para el valor de especificación _Red_).

    mutación Save($saveArgs: SaveArgsV2!) {saveV2(args: $saveArgs)}{"saveArgs": { "to": "pt-BR", "messages": [   { "srcLang": "en-US",      "srcMessage": "Red", "context": "11", "targetMessage": "Vermelho"    }]}}
En resumen, en lugar de guardar la propiedad «context» basándote únicamente en `fieldValueId`, también tendrás que guardarla en el contexto de los mensajes utilizando el `fieldId`.

Ten en cuenta que ambas traducciones son necesarias, ya que diferentes partes del almacén utilizarán diferentes formas de consultarlas; el «FieldValueId» es utilizado por la información del Catálogo/Búsqueda, y el «FieldId» puede ser utilizado directamente por el Marco del Almacén.

Para especificaciones con tipo «text», cuyos valores no están predefinidos, no habrá un `fieldValueId` real. En este caso, se debe utilizar el propio texto, generando la misma cadena en los campos `srcMessage` y `context`.


%0A
---
title: 'Resolver de búsqueda que aplica las traducciones de Messages al contenido ya traducido'
slug: resolver-de-busqueda-que-aplica-las-traducciones-de-messages-al-contenido-ya-traducido
status: PUBLISHED
createdAt: 2023-07-20T15:28:40.000Z
updatedAt: 2024-06-13T20:51:03.000Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: search-resolver-applying-messages-translations-over-already-translated-content
locale: es
kiStatus: Backlog
internalReference: 865918
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

El Search Resolver (capa GraphQL para la búsqueda inteligente) solicita traducciones al servicio de mensajes incluso en tiendas monolingües o en el caso de contenido ya traducido en una tienda multilingüe.

En la práctica, estas traducciones se realizan entre los mismos idiomas de origen y destino, pero si la tienda tiene activada la función de traducción automática, la cadena puede cambiar a algo inesperado.

Esto afecta especialmente a las cadenas con varias palabras que pueden considerarse de diferentes idiomas, como palabras en inglés en el nombre de un producto que es principalmente en francés, y potencialmente a las fechas (entre los formatos «dd/mm/aaaa» y «mm/dd/aaaa»).

## Simulación

- Traduce cualquier contenido del catálogo de la tienda a un idioma diferente al predeterminado;
- Asegúrate de que sigue habiendo al menos una palabra en un idioma diferente al traducido;
- Comprueba la tienda; no coincidirá con la traducción.

## Workaround

- Desactiva la traducción automática;
- Crea traducciones para estos contenidos utilizando el mismo idioma como «de» y «a», por ejemplo, traduciéndolos de «fr-FR» a «fr-FR».
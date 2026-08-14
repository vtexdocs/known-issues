---
title: 'La base de datos del catálogo no admite caracteres cirílicos en el mapa del sitio.'
slug: la-base-de-datos-del-catalogo-no-admite-caracteres-cirilicos-en-el-mapa-del-sitio
status: PUBLISHED
createdAt: 2022-12-13T20:06:46.000Z
updatedAt: 2026-08-14T23:25:14.000Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slugEN: catalog-database-cannot-handle-cyrillic-characters-on-sitemap
locale: es
kiStatus: Fixed
internalReference: 715686
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Actualmente, la base de datos del catálogo no admite caracteres cirílicos ni algunos caracteres del alfabeto rumano. Como resultado, los enlaces de texto y las URL se generan incorrectamente, lo que afecta al mapa del sitio, el tipo de página, los títulos de las etiquetas, las migas de pan, etc.

## Simulación

1. Cree una categoría con un carácter cirílico.
2. Compruebe el mapa del sitio accediendo a `https://.myvtex.com/sitemap.xml`.
3. Compruebe el mapa del sitio de la categoría y observe que la categoría creada en el paso (1) no se procesará.

## Workaround

Abra una incidencia y el equipo de producto ajustará la biblioteca de la base de datos de la cuenta.
---
title: 'Los campos de traducción de categorías se sobrescriben en el GraphQL del catálogo'
slug: los-campos-de-traduccion-de-categorias-se-sobrescriben-en-el-graphql-del-catalogo
status: PUBLISHED
createdAt: 2026-03-20T00:25:37.551Z
updatedAt: 2026-03-20T00:25:37.551Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: category-translation-fields-being-overwritten-on-catalog-graphql
locale: es
kiStatus: Backlog
internalReference: 654896
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Al traducir contenido mediante la aplicación catalog-graphql o la función de traducción del catálogo, se sobrescriben campos como «nombre», «título» o «descripción». Este comportamiento solo se produce cuando la configuración de la categoría en el idioma de origen tiene valores idénticos en cualquiera de estos campos.

## Simulación

- Comprueba la configuración de la categoría en el panel de administración del catálogo
- Verifica que al menos dos de los siguientes campos tengan valores idénticos en la configuración del idioma base: «Nombre», «Título de la página de la categoría (Título de la etiqueta)», «Descripción de la categoría (Descripción de la metaetiqueta)»
- Siga la documentación: https://developers.vtex.com/vtex-developer-docs/docs/catalog-internationalization#category

## Workaround

Para evitar que se sobrescriban los valores, asegúrese de que la configuración de la categoría base (en el idioma predeterminado de la cuenta) tenga valores distintos para los tres campos: Nombre, Título de la página de la categoría (Título de la etiqueta) y Descripción de la categoría (Descripción de la metaetiqueta).
---
title: 'La opción «Seleccionar un bloque» no funciona correctamente cuando las extensiones de página se cargan de forma diferida en el editor del sitio'
slug: la-opcion-seleccionar-un-bloque-no-funciona-correctamente-cuando-las-extensiones-de-pagina-se-cargan-de-forma-diferida-en-el-editor-del-sitio
status: PUBLISHED
createdAt: 2026-05-07T17:22:03.000Z
updatedAt: 2026-05-07T17:26:54.000Z
contentType: knownIssue
productTeam: CMS
author: 2mXZkbi0oi061KicTExNjo
tag: CMS
slugEN: select-a-block-does-not-work-correctly-when-page-extensions-load-lazily-in-site-editor
locale: es
kiStatus: Backlog
internalReference: 1403234
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

La función «Seleccionar un bloque» del Editor del sitio no funciona correctamente en las páginas en las que las extensiones terminan de cargarse después de la representación inicial. Tras hacer clic en el botón «Seleccionar un bloque», al pasar el cursor por encima de los bloques de la tienda no se resalta ninguno, y al hacer clic en los bloques no se abre el editor de bloques. Es más probable que el problema se produzca en páginas con un gran número de bloques o con indicadores de optimización del rendimiento activados (como «Habilitar tiempo de ejecución diferido»).

## Simulación

1. Accede al Editor del sitio de una tienda con una página que tenga un gran número de bloques o con el indicador «Habilitar tiempo de ejecución diferido» activo.
2. Navega hasta la página afectada a través de la URL del Editor del sitio.
3. Haga clic en el botón «Seleccionar un bloque» de la barra superior.
4. Pase el cursor por encima de los elementos del iframe de la tienda.
5. Observe que no aparece ningún bloque resaltado y que al hacer clic en los elementos no ocurre nada.

Para confirmar que el problema está relacionado con la carga diferida de extensiones, compruebe si el problema se repite al recargar la página y si ocurre con mayor frecuencia en páginas más pesadas.

## Workaround

provisional**
No hay ninguna solución provisional disponible.
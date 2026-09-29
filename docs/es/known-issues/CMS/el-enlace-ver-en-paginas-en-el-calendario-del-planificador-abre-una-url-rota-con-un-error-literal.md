---
title: 'El enlace "Ver en páginas" en el Calendario del planificador abre una URL rota con un error literal.'
slug: el-enlace-ver-en-paginas-en-el-calendario-del-planificador-abre-una-url-rota-con-un-error-literal
status: PUBLISHED
createdAt: 2026-09-29T22:10:20.000Z
updatedAt: 2026-09-29T22:10:20.000Z
contentType: knownIssue
productTeam: CMS
author: 2mXZkbi0oi061KicTExNjo
tag: CMS
slugEN: view-in-pages-link-in-planner-calendar-opens-a-broken-url-with-literal
locale: es
kiStatus: Backlog
internalReference: 1468037
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Al abrir el menú de opciones de un elemento de actualización de contenido dentro de una versión en el Calendario del Planificador (`/admin/planner/calendar`) y hacer clic en "Ver en Páginas", el usuario es redirigido a una URL donde el marcador de posición `` no se ha sustituido, lo que resulta en un enlace roto (p. ej., `https://.myvtex.com/admin/new-cms//plp/edit/<id>`). El problema afecta a cualquier tipo de contenido listado en la versión (PLP, Inicio, colecciones, etc.), no solo a un tipo específico.

## Simulación

1. Acceda al Calendario del Planificador (`/admin/planner/calendar`) en una cuenta con Headless CMS.

2. Navegue hasta un día que tenga una versión con al menos una actualización de contenido (p. ej., un elemento de Inicio o PLP).

3. En la lista de actualizaciones de la versión, haga clic en el menú de opciones (icono de tres puntos) de cualquier elemento. 4. Haga clic en "Ver en páginas" (para elementos ya publicados) o en "Editar".

5. Observe que la pestaña que se abre muestra una URL con una cadena literal en lugar del nombre de cuenta real, lo que provoca un error de página no encontrada.

## Workaround

No existe una solución alternativa a través de la interfaz de usuario. Como alternativa manual, el usuario puede editar la URL incorrecta directamente en la barra de direcciones del navegador, reemplazando la cadena literal por el nombre de cuenta real (y, si se encuentra en un espacio de trabajo distinto de `master`, anteponiendo `{espacio de trabajo}--{cuenta}`), y luego recargar la página. Alternativamente, el usuario puede navegar manualmente al elemento de contenido correcto a través del menú Tienda > CMS sin interfaz gráfica, utilizando el nombre/tipo del elemento que se muestra en la publicación como referencia, en lugar de usar el enlace generado por el Planificador.
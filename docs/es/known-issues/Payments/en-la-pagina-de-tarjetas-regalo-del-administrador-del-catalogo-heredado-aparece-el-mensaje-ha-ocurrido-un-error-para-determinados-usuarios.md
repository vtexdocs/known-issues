---
title: 'En la página de tarjetas regalo del administrador del catálogo heredado aparece el mensaje «Ha ocurrido un error» para determinados usuarios'
slug: en-la-pagina-de-tarjetas-regalo-del-administrador-del-catalogo-heredado-aparece-el-mensaje-ha-ocurrido-un-error-para-determinados-usuarios
status: PUBLISHED
createdAt: 2026-04-30T16:24:15.316Z
updatedAt: 2026-04-30T16:24:15.316Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: legacy-catalog-admin-gift-card-page-shows-something-went-wrong-for-specific-users
locale: es
kiStatus: Backlog
internalReference: 1373636
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Algunos usuarios no pueden acceder a la página de tarjetas regalo en la administración del catálogo heredada (por ejemplo, /admin/Site/Vale.aspx). La pantalla muestra un error genérico del tipo «Ha ocurrido un error». El problema es específico del usuario y se produce cuando un filtro no válido queda almacenado en el servidor para esa página y ese usuario, lo que provoca que las llamadas internas al sistema de tarjetas regalo devuelvan un código HTTP 400.

## Simulación

1. Acceda a la página heredada de Tarjetas regalo: _/admin/Site/Vale.aspx._
2. Aplique un valor de filtro mal formado (por ejemplo, pegando una cadena de etiqueta + código como `“Código: AAAA-XXXX-BBBB-YYYY”` en lugar de un código de canje puro). La página persiste el filtro por usuario + página en la base de datos.
3. La interfaz de usuario se recarga con un error de «Algo salió mal».

## Workaround

Esta solución alternativa requiere que otro usuario pueda acceder a la página de tarjetas regalo sin encontrarse con el error.


1. En la página defectuosa, obtenga el _VtexIdclientAutCookie_ **del usuario que se enfrenta al problema** y guárdelo (se utilizará en el paso 8).
2. Acceda correctamente a la página de Tarjetas de regalo **con otro usuario** y abra las herramientas de desarrollo del navegador (F12).
3. Abra la pestaña «Red» en las herramientas de desarrollo. En el panel de administración de VTEX, abra el menú de filtros y haga clic en el botón «_Borrar filtros de búsqueda_».
4. Busca la solicitud **con método POST** en la pestaña «Red» llamada «_Vale.aspx_». En el _Payload_ de esta solicitud, debes ver un campo definido como: `ctl00$Conteudo$ctlFiltro$btnLimpar  Clear Search Filters`
5. Con el botón derecho, haz clic en el nombre de la solicitud (_Vale.aspx_) y selecciona la opción «_Copiar como cURL (bash)_».
6. Abre Postman o una herramienta de API similar.
7. Importa/pega la solicitud copiada.
8. En la pestaña **Headers**, cambia «_Cookie_» por «_VtexIdclientAutCookie_» y establece el **valor del usuario que tiene el problema**.
9. Envía la solicitud.
10. Actualiza la página **que mostraba el error**. Se espera que ahora se cargue correctamente.


%0A
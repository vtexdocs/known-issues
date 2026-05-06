---
title: 'Las redirecciones de exportación no funcionan como deberían'
slug: las-redirecciones-de-exportacion-no-funcionan-como-deberian
status: PUBLISHED
createdAt: 2022-03-08T15:01:23.000Z
updatedAt: 2024-01-29T18:39:50.000Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: export-redirects-not-working-as-intended
locale: es
kiStatus: Backlog
internalReference: 537962
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Al intentar exportar la redirección, ya sea a través de la terminal o de la página del CMS, se obtienen archivos de distintos tamaños, con posibles resultados diferentes en su contenido. Este no es el comportamiento esperado, ya que no se han realizado cambios en las redirecciones que puedan explicar estas diferencias.

## Simulación

(Terminal) Sigue los pasos de la documentación: https://developers.vtex.com/vtex-developer-docs/docs/vtex-io-documentation-managing-url-redirects

Comprueba los archivos devueltos y verás que, en algunos casos, hay diferencias entre los dos archivos extraídos.

(Interfaz de usuario de administración) Vaya a Admin > CMS > Redireccionamientos, cambie entre las páginas de la paginación y haga clic en Exportar; verá las diferencias en los archivos que se devuelven.

## Workaround

provisional**
N/A
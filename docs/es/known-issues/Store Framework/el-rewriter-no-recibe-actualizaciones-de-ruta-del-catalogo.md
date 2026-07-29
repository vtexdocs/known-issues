---
title: 'El Rewriter no recibe actualizaciones de ruta del catálogo.'
slug: el-rewriter-no-recibe-actualizaciones-de-ruta-del-catalogo
status: PUBLISHED
createdAt: 2024-07-16T22:24:41.000Z
updatedAt: 2026-07-25T00:00:05.000Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: rewriter-not-receiving-route-updates-from-the-catalog
locale: es
kiStatus: Backlog
internalReference: 1066527
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Algunas actualizaciones del catálogo relacionadas con las rutas no llegan al Rewriter. Esto afecta a marcas, categorías, subcategorías y departamentos, en ambas direcciones:

- Las **rutas nuevas o editadas** no son recibidas por el Rewriter. Normalmente, ejecutar la consulta de arranque es suficiente para sincronizarlas, pero en casos particulares no funciona. En la tienda online, la ruta no devuelve productos o muestra el error "algo se ha descompuesto".

- Las **rutas modificadas o eliminadas** dejan una entrada obsoleta, por lo que la URL sigue apuntando al tipo incorrecto. Una marca eliminada, por ejemplo, sigue resolviéndose con `map=b`. Esta divergencia también puede causar problemas en la Búsqueda Inteligente.

Una señal útil para el segundo caso: compare la ruta en `pageType` y en el Rewriter. Si `pageType` devuelve `fullText` mientras que el Rewriter sigue devolviendo el tipo antiguo, significa que `pageType` se actualizó y el Rewriter no.

## Simulación

1. Reproduzca la actualización faltante:

- _Creación/edición:_ cree una nueva ruta de categoría/subcategoría/marca en el catálogo, o edite una existente, y luego intente acceder a ella en la tienda en línea.

- _Eliminación/modificación:_ elimine una marca existente del catálogo y luego búsquela en la tienda en línea.

2. Verifique la ruta que tiene el Rewriter:

{ internal { get(path: "/path") { from declarer id query disableSitemapEntry } }}

Una respuesta `null` significa que el Rewriter nunca recibió la actualización: ejecute bootstrap y, si falla, siga las instrucciones de `internal.save` a continuación.

Una respuesta con la `query`/`type` anterior significa que el Rewriter conservó una entrada obsoleta: siga las instrucciones de `internal.delete` a continuación.

3. Prueba primero con la consulta de Bootstrap:

{ bootstrap { brands categories }}

Si la ruta sigue sin aparecer o no funciona después de Bootstrap, aplica las soluciones alternativas que se indican a continuación.

## Workaround

Para las rutas que se eliminaron o modificaron en el catálogo pero persisten en el Rewriter, elimine la ruta manualmente:

mutación { internal { delete(path: "/path") { from id resolveAs } }}

Para las rutas que se crearon o editaron pero nunca llegaron, agréguelas manualmente:

mutación saveInternal($route: InternalInput!) { internal { save(route: $route) { from declarer type id query endDate binding resolveAs origin disableSitemapEntry } }}

{ "route": { "from": "", "query": { "map": "" // "b" para marcas, por ejemplo }, "declarer": "vtex.store@2.x", "binding": "", "type": "", "id": "{{id}}", "origin": "vtex.routes-bootstrap@0.4.3:brand-bootstrap" }}

Después de cualquiera de las mutaciones, vuelva a ejecutar el Rewriter. Se realiza una consulta `internal.get` para confirmar que la ruta se resuelve correctamente.
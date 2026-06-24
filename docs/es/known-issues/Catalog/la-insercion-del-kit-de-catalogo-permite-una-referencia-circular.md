---
title: 'La inserción del kit de catálogo permite una referencia circular.'
slug: la-insercion-del-kit-de-catalogo-permite-una-referencia-circular
status: PUBLISHED
createdAt: 2026-06-24T18:49:40.000Z
updatedAt: 2026-06-24T18:49:40.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: catalog-kit-insertion-allows-circular-reference
locale: es
kiStatus: Backlog
internalReference: 1425901
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Actualmente, al crear un skukit en la interfaz de usuario del catálogo, es posible insertar un skukit que se referencia a sí mismo como componente.

Por ejemplo, supongamos que se creó un skukit con ID 123.

Es posible agregar otros skus como componentes, así como el propio kit (padre = 123, componente = 123), lo que genera efectos secundarios no mapeados.

Hasta el momento, el efecto secundario conocido es que esto impide la carga de datos en la aplicación del portal, como el skuJSON en vtexJS.

## Simulación

1 - Cree un sku marcado como kit (bundle) https://help.vtex.com/en/docs/tutorials/bundle-registration

2 - Agregue, en la pestaña de componentes, su propio ID de sku como componente.

3 - En la página del producto, abra las herramientas para desarrolladores y revise la consola. Busca la propiedad vtexjs.skujson; debería devolver datos, pero devuelve null.

## Workaround

-
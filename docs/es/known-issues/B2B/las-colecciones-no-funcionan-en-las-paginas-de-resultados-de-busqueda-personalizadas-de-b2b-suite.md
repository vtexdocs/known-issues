---
title: 'Las colecciones no funcionan en las páginas de resultados de búsqueda personalizadas de B2B Suite.'
slug: las-colecciones-no-funcionan-en-las-paginas-de-resultados-de-busqueda-personalizadas-de-b2b-suite
status: PUBLISHED
createdAt: 2026-03-02T14:58:19.634Z
updatedAt: 2026-03-02T14:58:19.634Z
contentType: knownIssue
productTeam: B2B
author: 2mXZkbi0oi061KicTExNjo
tag: B2B
slugEN: collections-doesnt-work-in-custom-search-results-pages-in-b2b-suite
locale: es
kiStatus: Backlog
internalReference: 1043470
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Las páginas de resultados de búsqueda personalizadas configuradas con el identificador de colección no funcionan cuando se asignan diferentes colecciones de productos a una organización.

El comportamiento esperado al utilizar colecciones es definir la variedad de productos que los usuarios de la organización verán en la tienda, pero dado que las organizaciones B2B también utilizan `productClusterId` en la búsqueda, al acceder a páginas de resultados de búsqueda personalizadas configuradas con un `productClusterId` diferente, los resultados de la búsqueda muestran productos de ambas colecciones.

Además, si la organización tiene más de un `productClusterId` asignado, al utilizar `productClusterId` como filtro en la búsqueda, se mostrarán los productos de todas las colecciones asignadas a la organización.

## Simulación

**Escenario 1:** - Configure una colección de productos para una organización. - Cree una página de resultados de búsqueda personalizada con un ID de colección diferente en el filtro `productClusterId`. - Inicie sesión y acceda a la página de resultados de búsqueda personalizada. Se mostrarán los productos de ambas colecciones. **Escenario 2:**

- Configure más de una colección de productos para una organización. - Cree una página de resultados de búsqueda personalizada utilizando solo uno de los «productClusterId» como filtro. - Inicie sesión y acceda a la página de resultados de búsqueda personalizada; se mostrarán los productos de todas las colecciones registradas en la organización.

## Workaround

Utilice «productClusterNames» como filtro para estas páginas de búsqueda en lugar de «productClusterIds».
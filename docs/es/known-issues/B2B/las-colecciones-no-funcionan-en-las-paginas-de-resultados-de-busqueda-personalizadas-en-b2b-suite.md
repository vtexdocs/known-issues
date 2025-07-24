---
title: 'Las colecciones no funcionan en las páginas de resultados de búsqueda personalizadas en B2B Suite'
id: 2O2UmKrMJHimDunDRbLBe
status: PUBLISHED
createdAt: 2024-06-03T22:13:10.775Z
updatedAt: 2024-06-21T14:57:27.454Z
publishedAt: 2024-06-21T14:57:27.454Z
firstPublishedAt: 2024-06-03T22:13:11.591Z
contentType: knownIssue
productTeam: B2B
author: 2mXZkbi0oi061KicTExNjo
tag: B2B
slugEN: collections-doesnt-work-in-custom-search-results-pages-in-b2b-suite
locale: es
kiStatus: Backlog
internalReference: 1043470
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Las páginas de resultados de búsqueda personalizadas configuradas con el id de colección no funcionan cuando se asignan diferentes colecciones de productos a una organización.

El comportamiento esperado al utilizar Colecciones es definir el surtido de productos que los usuarios de la organización verán en el escaparate, pero como las Organizaciones B2B también utilizan `productClusterId` en la búsqueda, al acceder a páginas de resultados de búsqueda personalizadas configuradas con un `productClusterId` diferente, los resultados de la búsqueda muestran productos de ambas colecciones.



## Simulación



- Configure una colección de productos para una organización;
- Cree una página de resultados de búsqueda personalizada con una colección diferente;
- Inicie sesión y acceda a la página de resultados de búsqueda personalizada; se muestran los productos de ambas colecciones.



## Workaround


N/A





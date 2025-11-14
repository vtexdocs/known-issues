---
title: 'Los rastreadores no leen las migas de pan debido al tiempo de espera del SSR'
slug: los-rastreadores-no-leen-las-migas-de-pan-debido-al-tiempo-de-espera-del-ssr
status: PUBLISHED
createdAt: 2025-11-14T19:40:02.524Z
updatedAt: 2025-11-14T19:40:02.524Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: breadcrumb-not-being-read-by-crawlers-due-ssr-timeout
locale: es
kiStatus: Backlog
internalReference: 460999
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Cuando se cargan por primera vez las migas de pan, los datos de la lista de categorías son más rápidos que los del árbol de categorías enviados por la consulta de facetas, esto está causando un comportamiento inesperado en el tiempo de carga de la miga de pan, porque la lista de categorías trae también categorías similares de productos similares y no tiene toda la información necesaria para json+ld.


#### Simulación



Abrir una página de producto

Desactive javascript para la página (esto garantizará que trabajará en SSR)

Actualice la página

Verá que el breadcrumb cargará al principio todo el árbol de categorías duo el tiempo necesario para buscar, y luego, traerá los resultados esperados (del árbol de categorías), si no hay categorías similares para las categorías, no verá ningún efecto visual

Otra forma de reproducir es ir a https://validator.schema.org/
y tratar de validar la página del producto, si la miga de pan está allí, no hay ningún problema con su producto, si no está allí, este es el KI

## Workaround


No
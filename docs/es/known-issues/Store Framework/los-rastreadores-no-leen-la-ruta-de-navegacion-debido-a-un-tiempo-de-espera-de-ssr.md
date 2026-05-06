---
title: 'Los rastreadores no leen la ruta de navegación debido a un tiempo de espera de SSR'
slug: los-rastreadores-no-leen-la-ruta-de-navegacion-debido-a-un-tiempo-de-espera-de-ssr
status: PUBLISHED
createdAt: 2021-11-02T14:32:38.000Z
updatedAt: 2023-01-31T15:54:11.000Z
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

Al cargar por primera vez la ruta de navegación, los datos de la lista de categorías se cargan más rápido que los del árbol de categorías enviado por la consulta de facetas; esto provoca un comportamiento inesperado en el tiempo de carga de la ruta de navegación, ya que la lista de categorías incluye también categorías de productos similares y no contiene toda la información necesaria para JSON+LD.

## Simulación

Abre la página de un producto

Desactiva JavaScript en la página (esto garantizará que trabajes en SSR)

Actualiza la página

Verás que la ruta de navegación cargará primero todo el árbol de categorías debido al tiempo necesario para recuperarla y, a continuación, mostrará los resultados esperados (del árbol de categorías); si no hay categorías similares para las categorías, no verás ningún efecto visual

Otra forma de reproducir el problema es ir a https://validator.schema.org/
e intentar validar la página del producto; si la ruta de navegación aparece, no hay ningún problema con tu producto; si no aparece, se trata del KI

## Workaround

provisional**
No
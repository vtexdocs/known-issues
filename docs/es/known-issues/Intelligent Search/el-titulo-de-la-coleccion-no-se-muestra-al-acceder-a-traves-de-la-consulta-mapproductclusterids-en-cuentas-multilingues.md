---
title: 'El título de la colección no se muestra al acceder a través de la consulta «?map=productClusterIds» en cuentas multilingües'
slug: el-titulo-de-la-coleccion-no-se-muestra-al-acceder-a-traves-de-la-consulta-mapproductclusterids-en-cuentas-multilingues
status: PUBLISHED
createdAt: 2026-04-09T19:01:43.885Z
updatedAt: 2026-04-09T19:01:43.885Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: collection-title-is-not-displayed-when-accessing-through-mapproductclusterids-query-in-multilanguage-accounts
locale: es
kiStatus: Backlog
internalReference: 1390606
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Al cambiar el idioma de la tienda en una página de colección a través de `?map=productClusterIds`, es posible que desaparezcan el título de la colección y la ruta de navegación.

Aunque las colecciones no están pensadas para depender del idioma, es posible que el flujo de indexación actual gestione los valores vacíos relacionados con las colecciones de una forma que provoque este comportamiento inesperado en la tienda.

## Simulación

1 - Acceda a una página de colección mediante `?map=productClusterIds`.
2 - Al abrir la página de colección, el título y la ruta de navegación desaparecen.

## Workaround

Acceda a la página de colección mediante `?map=productClusterNames`.
---
title: 'El título de la colección no se muestra al acceder mediante la consulta ?map=productClusterIds en cuentas multilingües.'
slug: el-titulo-de-la-coleccion-no-se-muestra-al-acceder-mediante-la-consulta-mapproductclusterids-en-cuentas-multilingues
status: PUBLISHED
createdAt: 2026-04-09T22:00:58.000Z
updatedAt: 2026-09-22T16:50:25.000Z
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

Al cambiar el idioma de la tienda en una página de colección mediante `?map=productClusterIds`, el título de la colección y las migas de pan pueden desaparecer.

Aunque las colecciones no deberían depender del idioma, el flujo de indexación actual podría gestionar los valores vacíos relacionados con la colección de una manera que provoque este comportamiento inesperado en el estante.

## Simulación

1 - Acceda a una página de colección mediante `?map=productClusterIds`.

2 - Al abrir la página de la colección, el título y las migas de pan desaparecen.

## Workaround

Acceda a la página de la colección mediante `?map=productClusterNames`.
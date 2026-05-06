---
title: 'Especificaciones multiplicadas en el catálogo'
slug: especificaciones-multiplicadas-en-el-catalogo
status: PUBLISHED
createdAt: 2023-10-16T12:47:49.000Z
updatedAt: 2023-10-16T12:48:47.000Z
contentType: knownIssue
productTeam: Marketplace
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace
slugEN: specifications-multiplied-on-catalog
locale: es
kiStatus: Backlog
internalReference: 919761
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

El mercado puede aprobar los productos enviados por los vendedores a través del módulo «SKU recibidos».

Cuando un producto tiene una especificación de SKU que coincide con la especificación existente en la categoría del mercado, pero se trata de un valor nuevo, este nuevo valor se crea en la especificación del mercado.

Los valores duplicados pueden producirse cuando se aprueban al mismo tiempo más de un SKU con el mismo «nuevo valor» en «SKU recibidos» dentro de la misma categoría (o árbol) en la que se creó la especificación.

Si la especificación se crea en la categoría raíz (no recomendado), este escenario podría darse con mayor facilidad.

## Simulación

1. Crea una especificación de SKU en la categoría raíz;
2. Elige 2 (o más) SKU para aprobar en el módulo «SKU recibidos» que tengan el mismo valor de especificación de SKU (el valor no puede existir previamente en el lado del marketplace)
3. Apruebe las SKU (al mismo tiempo o con un breve intervalo) y compruebe si los valores de la especificación se han multiplicado por el número de SKU aprobadas.

## Workaround

Apruebe las SKU más lentamente y evite crear especificaciones en la categoría raíz.
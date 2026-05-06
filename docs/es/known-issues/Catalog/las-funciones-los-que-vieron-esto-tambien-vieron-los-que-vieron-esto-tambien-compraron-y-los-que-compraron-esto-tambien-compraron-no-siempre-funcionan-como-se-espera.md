---
title: 'Las funciones «Los que vieron esto también vieron», «Los que vieron esto también compraron» y «Los que compraron esto también compraron» no siempre funcionan como se espera'
slug: las-funciones-los-que-vieron-esto-tambien-vieron-los-que-vieron-esto-tambien-compraron-y-los-que-compraron-esto-tambien-compraron-no-siempre-funcionan-como-se-espera
status: PUBLISHED
createdAt: 2022-12-07T15:30:58.000Z
updatedAt: 2025-09-10T20:23:43.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: apis-who-saw-also-saw-who-saw-also-bought-who-bought-also-bought-not-always-working-as-expected
locale: es
kiStatus: No Fix
internalReference: 712015
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Estos tres tipos de API de venta cruzada: «Quienes vieron esto también vieron», «Quienes vieron esto también compraron» y «Quienes compraron esto también compraron» no siempre muestran los productos que deberían recomendarse. A veces, los resultados son productos aleatorios de la misma categoría que el producto original.

## Simulación

1. Visita dos productos de categorías diferentes en el sitio web; (o visita uno y compra otro / o compra los dos por separado)
2. Utiliza una de las API anteriores y comprueba el resultado de la respuesta;
3. Comprueba que los productos devueltos no contengan el otro que has visitado, sino que sean simplemente otros productos de la misma categoría que el primero.

## Workaround

No hay ninguna solución alternativa.
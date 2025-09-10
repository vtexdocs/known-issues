---
title: Las API "Quién vio también vio", "Quién vio también compró" y "Quién compró también compró" no siempre funcionan como se esperaba.
slug: las-api-quien-vio-tambien-vio-quien-vio-tambien-compro-y-quien-compro-tambien-compro-no-siempre-funcionan-como-se-esperaba
status: PUBLISHED
createdAt: 2025-09-10T17:24:38.499Z
updatedAt: 2025-09-10T17:24:38.499Z
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



Estos 3 tipos de APIs de crossSelling:  Who Saw Also Saw, Who Saw Also Bought y Who Bought Also Bought no siempre traen los resultados de los productos que deberían recomendarse. A veces los resultados son productos aleatorios de la misma categoría que el producto original.


#### Simulación



1. Visita dos productos de diferentes categorías en el sitio; (o visita uno y compra otro / o compra los dos por separado)
2. Utiliza una de las APIs anteriores y verifica el resultado de la respuesta;
3. 3. Compruebe que los productos devueltos no contienen el otro que visitó, sino que son otros productos de la misma categoría que el primero.

## Workaround


No hay solución.



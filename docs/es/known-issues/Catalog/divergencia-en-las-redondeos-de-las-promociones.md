---
title: 'Divergencia en las redondeos de las promociones'
slug: divergencia-en-las-redondeos-de-las-promociones
status: PUBLISHED
createdAt: 2023-12-22T18:48:14.000Z
updatedAt: 2023-12-22T18:48:14.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: promotions-microrounding-divergence
locale: es
kiStatus: Backlog
internalReference: 957369
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

El módulo de promociones redondea los descuentos hasta tres decimales, lo que, en casos muy concretos, puede dar lugar a ligeras diferencias en el precio final del carrito.

Por ejemplo, supongamos que tenemos el siguiente escenario:

Artículo 1 - 10 $
Artículo 2 - 20 $
Artículo 3 - 32 $
____________
Total - 62 $

Y dos promociones aplicables a todos ellos:

Promoción A - 15 $ de descuento
Promoción B - 10 % de descuento.


Normalmente, el descuento se calcula de forma secuencial, aplicando primero el descuento nominal:

62 $ - 15 $ = 47 $
Luego
47 $ * 0,9 = 42,3 $


Sin embargo, los descuentos se distribuyen, incluso el descuento nominal, de forma proporcional en el carrito, por lo que lo que ocurre realmente es:

`artículo 1`:
Valor original = 10 $
Descuento nominal (15 * 10/62 del carrito) = -2,41935484 $
Descuento porcentual esperado (12,5806452 * 0,9) = -1,25806452 $
Descuento real porcentual = -1,258 $

`artículo 2`:
Valor original = 20 $
Descuento nominal (15 * 20/62 del carrito) = -4,83870968 $
Descuento porcentual esperado (15,1612903 * 0,9) = -1,51612903 $
Descuento real porcentual = -1,516 $

`artículo 3`:
Valor original = 32 $
Descuento nominal (15 * 32/62 del carrito) = -7,74193548 $
Descuento esperado porcentual (24,2580645 * 0,9) = -2,42580645 $
Descuento real porcentual = -2,426 $


🔎 diferencia total: 0,00006452 + 0,000012903 + 0,000019355 = 0,0000270973

Como podemos ver arriba, se ha creado una «micro» diferencia.

Si se añadieran varios artículos, con precios distintos, a este carrito de ejemplo, esta diferencia podría ascender a 1 céntimo (0,01) o más.

## Simulación

Hay multitud de formas de recrear el caso. Afortunadamente, todas ellas son extremadamente específicas.

Dado esto, es difícil reproducir el problema, pero, en la mayoría de los casos, es necesario crear un carrito con varios artículos diferentes (unos 10 o más) y todos ellos con dos o más promociones; lo ideal es que una de ellas sea un descuento nominal y la otra, un descuento porcentual.

## Workaround

n/a



%0A
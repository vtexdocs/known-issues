---
title: 'O=OrderByPriceASC (o OrderByPriceDESC) podría generar un orden incorrecto'
slug: oorderbypriceasc-o-orderbypricedesc-podria-generar-un-orden-incorrecto
status: PUBLISHED
createdAt: 2022-05-20T15:48:00.000Z
updatedAt: 2024-06-21T11:28:55.000Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slugEN: oorderbypriceasc-or-orderbypricedesc-could-bring-the-wrong-order
locale: es
kiStatus: Backlog
internalReference: 582861
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

**O=OrderByPriceASC** (o **OrderByPriceDESC**) puede aplicar una política incorrecta a la hora de ordenar los precios. Además, dado que el precio indexado solo tiene un decimal, no se tendrá en cuenta el segundo decimal del precio.

Además, los precios de los vendedores no integrales no se tienen en cuenta en la ordenación. Como resultado, las tiendas regionalizadas del Portal no pueden utilizar el parámetro **orderByPrice**.

## Simulación

- Introduzca más de un precio en el producto. Ej.: dos precios de catálogo diferentes en distintos vendedores
- Configure la ordenación de la página por precio (ej.: O=OrderByPriceASC)
- Compruebe que la ordenación no sigue el orden de los precios mostrados
o

- Busque dos productos con precios decimales. Ej.: precio 1 = 14,04 y precio 2 = 14,01
- Configure la ordenación de la página por precio (p. ej.: O=OrderByPriceASC)
- Compruebe que la ordenación no sigue el orden de los precios que se muestran

## Workaround

No hay ninguna en el Portal. Sin embargo, la cuenta puede cambiar a Inteligente Search.
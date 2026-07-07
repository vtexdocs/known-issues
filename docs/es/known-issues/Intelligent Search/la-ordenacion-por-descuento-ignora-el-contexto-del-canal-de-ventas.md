---
title: 'La ordenación por descuento ignora el contexto del canal de ventas.'
slug: la-ordenacion-por-descuento-ignora-el-contexto-del-canal-de-ventas
status: PUBLISHED
createdAt: 2026-07-07T20:33:35.000Z
updatedAt: 2026-07-07T20:33:35.000Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: sorting-by-discount-ignores-sales-channel-context
locale: es
kiStatus: Backlog
internalReference: 1431337
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Al usar la Búsqueda Inteligente con precios diferentes por canal de venta, la ordenación de artículos por descuento no funciona correctamente.

Las políticas comerciales no consideran las variaciones de precios por descuento o promoción. Las promociones actualizadas se detectan al renderizar el contenido (por lo que siempre se muestran correctamente en la ficha del producto), pero no afectan a la ordenación basada en descuentos (realizada previamente).

Como resultado, los porcentajes de descuento utilizados para clasificar los productos reflejan la promoción indexada, lo que produce un orden de clasificación incorrecto en las Listas de Precios de Producto (LPP).

## Simulación

En una tienda con promociones o descuentos específicos para canales de venta específicos, acceda a cualquier LPP mientras ordena por mejor descuento (`OrderByBestDiscountDESC` / `discount:desc`): observará que el orden no refleja los descuentos aplicables al canal de venta activo, ya que el índice solo contiene los valores de descuento indexados.

## Workaround

N/A
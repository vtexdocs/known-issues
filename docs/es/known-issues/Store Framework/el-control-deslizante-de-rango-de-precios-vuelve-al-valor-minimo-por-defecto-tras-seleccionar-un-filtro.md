---
title: 'El control deslizante de rango de precios vuelve al valor mínimo por defecto tras seleccionar un filtro'
slug: el-control-deslizante-de-rango-de-precios-vuelve-al-valor-minimo-por-defecto-tras-seleccionar-un-filtro
status: PUBLISHED
createdAt: 2023-06-13T19:19:09.000Z
updatedAt: 2023-11-08T13:34:38.000Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: price-range-slider-defaults-to-minimum-value-after-selecting-a-filter
locale: es
kiStatus: Backlog
internalReference: 843442
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Se trata de un rango de precios; es un control deslizante y cuenta con dos selectores (marcadores), uno para el mínimo y otro para el máximo, de modo que sabe dónde situarse en el control deslizante.
Al aplicarle un filtro de marca, el selector no desplazará su valor mínimo a los valores mínimos de la marca, sino que mantendrá el valor mínimo predeterminado y el marcador aparecerá fuera del rango.

## Simulación

1 - Accede a una página de categoría y fíjate en el filtro de rango de precios y sus valores mínimo y máximo.
2- Selecciona un filtro marcándolo a la izquierda (categoría 2/3/4)
3- Con el filtro aplicado, fíjate en que el control deslizante de rango de precios mantendrá el valor mínimo como antes y quedará fuera del rango del control deslizante.

 ![](https://vtexhelp.zendesk.com/attachments/token/RuhwOHLwbPslKpeZ4VUq4Y995/?name=image.png)

Filtro con el comportamiento descrito para el valor mínimo.

## Workaround

No hay ninguna solución alternativa disponible.
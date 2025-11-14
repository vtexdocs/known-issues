---
title: 'Problema de diseño de carrusel utilizando responsive-values en SKU Selector'
slug: problema-de-diseno-de-carrusel-utilizando-responsivevalues-en-sku-selector
status: PUBLISHED
createdAt: 2025-11-14T19:40:15.711Z
updatedAt: 2025-11-14T19:40:15.711Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: carousel-layout-issue-using-responsivevalues-in-sku-selector
locale: es
kiStatus: Backlog
internalReference: 1217421
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


El valor de la anchura del selector SKU se rompe cuando `displayMode="slider"` se utiliza para productos no disponibles y `sliderItemsPerPage` se configura utilizando valores `min-width`.


#### Simulación




1.

Instale la aplicación vtex.responsive-values en el área de trabajo o configure un bloque responsive-values en su tema para proporcionar valores basados en puntos de corte de anchura mínima.



2.

Configure la propiedad sliderItemsPerPage del selector SKU utilizando el patrón responsive-values:

Esta configuración utiliza puntos de rotura min-width y se basa en la app responsive-values, que no es compatible oficialmente con el Selector SKU.



3.

Despliegue esta configuración en una página de detalles del producto (PDP) que no tenga SKU disponibles (es decir, todas las SKU están agotadas).



4.

Acceda al PDP en el área de trabajo y confirme que el selector SKU se muestra en displayMode="slider".



5. 5. Observe el resultado: el carrusel de SKU se romperá - los elementos tendrán anchos incorrectos, a menudo desbordándose o no renderizándose como se esperaba.

## Workaround


Sustituya la configuración de `sliderItemsPerPage` utilizando las teclas `min-width` por el formato esperado utilizando las teclas estándar `desktop`, `tablet` y `mobile`.




---
title: 'Hoja de cálculo «LINK SERVICE VALUES TO SKUS» que solo muestra los servicios activos'
slug: hoja-de-calculo-link-service-values-to-skus-que-solo-muestra-los-servicios-activos
status: PUBLISHED
createdAt: 2023-08-23T17:51:44.000Z
updatedAt: 2023-08-23T17:51:44.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: link-service-values-to-skus-spreadsheet-only-returning-active-services
locale: es
kiStatus: Backlog
internalReference: 886486
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Al exportar los valores de los servicios de una categoría específica en el panel de administración, el resultado solo muestra los servicios activos. Esto no permite al comerciante activar mediante una hoja de cálculo servicios que anteriormente estaban inactivos.

## Simulación

1. Crea un servicio y asígnalo a un SKU;
2. Desactiva el servicio en el SKU;
3. Exporta la hoja de cálculo «LINK SERVICE VALUES TO SKUS»;
4. Comprueba que el servicio anterior no aparece en los resultados.

## Workaround

Utiliza la API o ve directamente al panel de administración de SKU - Servicios para actualizar el servicio:
https://developers.vtex.com/docs/api-reference/catalog-api#put-/api/catalog/pvt/skuservice/-skuServiceId-
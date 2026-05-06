---
title: 'Error al exportar precios con metadatos'
slug: error-al-exportar-precios-con-metadatos
status: PUBLISHED
createdAt: 2023-07-12T11:48:49.000Z
updatedAt: 2023-07-12T11:48:49.000Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: error-exporting-prices-with-metadata
locale: es
kiStatus: Backlog
internalReference: 860290
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

A veces, al intentar exportar los precios con la opción de metadatos activada y sin utilizar filtros, puede producirse un error. Al consultar el mensaje en DevTools, aparecerá algo similar a «Polly broken circuit on service...».

Este error se debe a la limitación de acceso del módulo del catálogo al intentar recuperar los metadatos de un gran número de SKU.

## Simulación

1. Exporta los precios con metadatos sin utilizar ningún filtro;
2. A veces aparecerá un mensaje de error;
3. Comprueba en DevTools si el mensaje es similar al anterior.

## Workaround

provisional**
Utiliza los filtros para reducir la cantidad de SKU en la hoja de cálculo y el módulo de catálogo devolverá los datos sin problemas.
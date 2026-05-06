---
title: 'Las plantillas de pago a plazos y los controles de estantería heredados no tienen en cuenta los multiplicadores de unidades'
slug: las-plantillas-de-pago-a-plazos-y-los-controles-de-estanteria-heredados-no-tienen-en-cuenta-los-multiplicadores-de-unidades
status: PUBLISHED
createdAt: 2024-02-08T13:39:16.000Z
updatedAt: 2024-02-08T13:48:14.000Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slugEN: legacy-installment-template-and-shelf-controls-do-not-consider-unit-multipliers
locale: es
kiStatus: Backlog
internalReference: 979205
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Actualmente, en las tiendas que utilizan el CMS heredado, las plantillas heredadas y los controles de estantería no se ajustan si la SKU tiene un multiplicador de unidades.

Por ejemplo, si tienes un artículo con un multiplicador de unidades de 2 y un controlador de plazos, los datos que se muestran en las estanterías solo mostrarán las opciones de pago a plazos de una sola unidad, en lugar de ajustarse a esta configuración.

## Simulación

1 - Crea una SKU con un multiplicador de unidades
2 - Configura opciones de pago a plazos para ella
3 - Configura un controlador relacionado con el pago a plazos, como $product.InstallmentValue
4 - Los datos mostrados se referirán únicamente a una sola unidad.

## Workaround

Implementa una personalización del front-end para sobrescribir los datos originales que se muestran.
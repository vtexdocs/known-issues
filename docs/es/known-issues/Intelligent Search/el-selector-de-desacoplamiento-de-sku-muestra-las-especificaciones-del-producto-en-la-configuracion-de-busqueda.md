---
title: 'El selector de desacoplamiento de SKU muestra las especificaciones del producto en la configuración de búsqueda.'
slug: el-selector-de-desacoplamiento-de-sku-muestra-las-especificaciones-del-producto-en-la-configuracion-de-busqueda
status: PUBLISHED
createdAt: 2025-12-10T21:19:33.000Z
updatedAt: 2026-10-06T17:20:20.000Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: sku-detach-selector-lists-product-specifications-in-the-search-settings
locale: es
kiStatus: Backlog
internalReference: 1338042
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

El selector para **Usar especificaciones de SKU para mostrar productos individuales en los resultados de búsqueda** muestra especificaciones de producto además de las especificaciones de SKU en **Administración > Búsqueda inteligente > Configuración de búsqueda**.

Esto conlleva el riesgo de una configuración incorrecta si se selecciona una **especificación de producto**, lo que provoca un comportamiento inconsistente al intentar mostrar SKU individuales según una especificación.

## Simulación

1. Vaya a **Administración > Búsqueda inteligente > Configuración de búsqueda**.

2. En el campo **Usar especificaciones de SKU para mostrar productos individuales en los resultados de búsqueda**, abra el menú desplegable/lista de especificaciones de la opción.

3. Observe que la lista incluye tanto **especificaciones de SKU** como **especificaciones de producto**.

## Workaround

Si se selecciona una especificación de producto, elimine la especificación seleccionada del campo **Usar especificaciones de SKU para mostrar productos individuales en los resultados de búsqueda**.
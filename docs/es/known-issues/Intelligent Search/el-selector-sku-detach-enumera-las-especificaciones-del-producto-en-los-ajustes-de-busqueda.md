---
title: 'El selector SKU Detach enumera las especificaciones del producto en los Ajustes de búsqueda'
slug: el-selector-sku-detach-enumera-las-especificaciones-del-producto-en-los-ajustes-de-busqueda
status: PUBLISHED
createdAt: 2025-12-10T18:20:14.356Z
updatedAt: 2025-12-10T18:20:14.356Z
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


El selector para **Usar especificaciones SKU para mostrar productos individuales en los resultados de búsqueda** está listando especificaciones de producto además de especificaciones SKU en el **Admin > Búsqueda Inteligente > Configuración de Búsqueda**.

El impacto es el riesgo de configuración errónea si se selecciona una **especificación de producto**, causando un comportamiento incoherente al intentar mostrar SKU individuales basadas en una especificación.

## Simulación



1. 1. Vaya a **Admin > Búsqueda inteligente > Configuración de búsqueda**.
2. En el campo **Utilizar especificaciones SKU para mostrar productos individuales en los resultados de búsqueda**, abra el desplegable/lista de especificaciones de la opción.
3. Observe que la lista incluye tanto **especificaciones SKU** como **especificaciones de producto**.

## Workaround


Si se selecciona una especificación de producto, elimine la especificación seleccionada del campo **Utilizar especificaciones SKU para mostrar productos individuales en los resultados de búsqueda**.



